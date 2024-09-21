const express = require("express");
const userRoute = require("./_routes/userRoute");
const server = express.Router();

server.use("/user", userRoute);

module.exports = server;
