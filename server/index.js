const express = require("express");
const http = require("http");
const connectDB = require("./_config/connection");
require("dotenv").config({
  path: "./_config/.env",
});
const app = express();
const server = http.createServer(app);

// connecting database & applying middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
connectDB();

server.listen(process.env.PORT || 4000, () => {
  console.log(`server running on port ${process.env.PORT || 4000}`);
});
