const express = require("express");
const {
  createAccount,
  loginUser,
  getUserProfile,
} = require("../_controllers/userController");
const userRoute = express.Router();

userRoute.post("/create", createAccount);
userRoute.post("/login", loginUser);
userRoute.get("/get/profile", getUserProfile);

module.exports = userRoute;
