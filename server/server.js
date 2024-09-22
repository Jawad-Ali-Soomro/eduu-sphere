const express = require("express");
const userRoute = require("./_routes/userRoute");
const courseRoute = require("./_routes/courseRoute");
const server = express.Router();

server.use("/user", userRoute);
server.use("/course", courseRoute);

module.exports = server;
