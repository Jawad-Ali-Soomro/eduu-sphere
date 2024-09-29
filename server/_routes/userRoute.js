const express = require("express");
const { createUser, getProfile } = require("../_controllers");
const userRoute = express.Router();

userRoute.post("/create", createUser);
userRoute.get("/get-profile", getProfile);

module.exports = userRoute;
