const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();

router.get("/news", async (req, res) => {
    const { page = 1, limit = 10, keyword, country, category } = req.query;
    const start = (page - 1) * limit;

    try {
        const response = await axios.get(`${process.env.URL}/top-headlines`, {
            params: {
                q: keyword || '',
                category: category || 'general',
                lang: "en",
                country: country || 'in',
                max: 100, 
                apikey: process.env.API_KEY
            }
        });

        const totalItems = response.data.totalArticles;
        const articles = response.data.articles;
        const paginatedArticles = articles.slice(start, start + parseInt(limit));
        res.json({
            totalItems: totalItems,
            currentPage: parseInt(page),
            itemsPerPage: parseInt(limit),
            articles: paginatedArticles,
        });
    } catch (err) {
        // Handle errors
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
