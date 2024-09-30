const express = require("express");
const { createUser, getProfile, loginUser } = require("../_controllers");
const userRoute = express.Router();

userRoute.post("/create", createUser);
userRoute.get("/get-profile", getProfile);
userRoute.post("/login", loginUser);

module.exports = userRoute;
