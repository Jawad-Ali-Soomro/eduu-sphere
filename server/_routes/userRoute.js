const express = require("express");
const {
  createAccount,
  loginUser,
  getUserProfile,
  updateProfile,
} = require("../_controllers/userController");
const userRoute = express.Router();

userRoute.post("/create", createAccount);
userRoute.post("/login", loginUser);
userRoute.get("/get/profile", getUserProfile);
userRoute.put("/update/:usertoFindId", updateProfile);

module.exports = userRoute;
