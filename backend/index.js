const express = require("express");
const cors = require("cors");
const mainrouter = require("./routers/index");
const app = express();
app.use(cors());
require('dotenv').config();
app.use("/api/v1",mainrouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});