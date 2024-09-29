const express = require("express");
const { createUser } = require("../_controllers");
const userRoute = express.Router();

userRoute.post("/create", createUser);

module.exports = userRoute;
