const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "configs", ".env") });
const express = require("express");
const cors = require("cors");

const mainRouter = require("./routes/main.routes");
const connectDB = require("./configs/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", mainRouter)


const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
  connectDB()
});
