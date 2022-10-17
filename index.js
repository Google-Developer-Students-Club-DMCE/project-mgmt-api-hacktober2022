const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "configs", ".env") });
// require('dotenv').config({ path: path.resolve(__dirname, './.env') });
const express = require("express");
const cors = require("cors");

const mainRouter = require("./routes/main.routes");
const connectDB = require("./configs/db");

const app = express();

app.use(cors());
app.use("/api",mainRouter)

const PORT = process.env.PORT || 5300;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
  console.log(process.env.PORT)
  connectDB()
});
