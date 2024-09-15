import React, { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Pagination from "./components/Pagination";
import axios from "axios";
import Loading from "./components/Loading";

function App() {
  const [allArticles, setAllArticles] = useState([]);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("general");
  const [inputValue, setInputValue] = useState("");
  const [region, setRegion] = useState("in");
  const [limit, setLimit] = useState(10);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchNews();
  }, [category, region, keyword]);

  useEffect(() => {
    paginateArticles();
  }, [page, allArticles]);

  const fetchNews = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/news", {
        params: {
          keyword: keyword,
          country: region,
          category: category,
        },
      });

      setAllArticles(response.data.articles);
      const totalItems = response.data.articles.length;
      const pages = Math.ceil(totalItems / limit);
      setTotalPages(pages);
      setPage(1);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const paginateArticles = () => {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    setArticles(allArticles.slice(startIndex, endIndex));
  };

  return (
    <div className={darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}>
     <h1 className="flex justify-center text-3xl">ACONEWS</h1>
      <button
        className="m-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => setDarkMode(!darkMode)}
      >
        Toggle Dark Mode
      </button>
      <div
        className={`bg-${darkMode ? 'gray-800' : 'white'} rounded-full flex justify-between px-1 py-1 border border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif] m-2`}
      >
        <input
          type="text"
          placeholder="Search"
          className={`w-full rounded-l-full outline-none pl-4 text-sm ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-900'}`}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button
          className={`bg-blue-500 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-5 py-2.5 ${darkMode ? 'bg-blue-400 hover:bg-blue-600' : 'bg-blue-500 hover:bg-blue-700'}`}
          onClick={() => setKeyword(inputValue)}
        >
          Search
        </button>
      </div>

      <div className="flex justify-around overflow-hidden max-w-md mx-auto font-[sans-serif] m-2">
        <select
          onChange={(e) => setCategory(e.target.value)}
          className={`m-2 block w-full px-4 py-2 border rounded-full focus:outline-none ${
            darkMode
              ? "bg-gray-800 text-gray-200 border-gray-700"
              : "bg-white text-gray-900 border-gray-300"
          }`}
        >
          <option value="general">All Categories</option>
          <option value="sports">Sports</option>
          <option value="nation">Nation</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="science">Science</option>
          <option value="technology">Technology</option>
          <option value="health">Health</option>
        </select>

        <select
          onChange={(e) => setRegion(e.target.value)}
          className={`m-2 block w-full px-4 py-2 border rounded-full focus:outline-none ${
            darkMode
              ? "bg-gray-800 text-gray-200 border-gray-700"
              : "bg-white text-gray-900 border-gray-300"
          }`}
        >
          <option value="in">India</option>
          <option value="us">United States</option>
          <option value="gb">United Kingdom</option>
        </select>
      </div>

      <div className="flex flex-wrap justify-center">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <Cards key={index} article={article} darkMode={darkMode} />
          ))
        ) : (
          <Loading />
        )}
      </div>

      <Pagination currentPage={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
}

export default App;
