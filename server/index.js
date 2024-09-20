const express = require("express");
const connectDatabase = require("./_config/connect");
const server = require("./server");
const app = express();
require("dotenv").config({
  path: "./_config/.env",
});
const port = process.env.SERVER_PORT;
const cors = require("cors");
const cookieParser = require("cookie-parser");

// connecting middlewares
connectDatabase();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", server);

app.listen(port || 4000, () => {
  console.log("server for eduusphere is running!");
});
