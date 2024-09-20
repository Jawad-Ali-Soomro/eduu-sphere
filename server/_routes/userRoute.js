const express = require("express");
const { loginUser } = require("../_controllers");
const userRoute = express.Router();

userRoute.get("/login", loginUser);

module.exports = userRoute;
