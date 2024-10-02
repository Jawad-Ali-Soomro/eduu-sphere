const express = require("express");
const { createCourse } = require("../_controllers");
const {
  getAllCourse,
  getCourseById,
} = require("../_controllers/courseController");
const courseRoute = express.Router();

courseRoute.post("/create", createCourse);
courseRoute.get("/get-all", getAllCourse);
courseRoute.get("/get/:courseId", getCourseById);

module.exports = courseRoute;
