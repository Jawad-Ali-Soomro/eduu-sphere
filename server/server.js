const express = require("express");
const { userRoute } = require("./_routes");
const server = express.Router();

server.use("/user", userRoute);

module.exports = server;
