const express = require("express");
const { createCourse } = require("../_controllers");
const { getAllCourse } = require("../_controllers/courseController");
const courseRoute = express.Router();

courseRoute.post("/create", createCourse);
courseRoute.get("/get-all", getAllCourse);

module.exports = courseRoute;
