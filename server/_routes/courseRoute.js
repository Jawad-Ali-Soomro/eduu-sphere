const express = require("express");
const {
  createCourse,
  getAllCourses,
  getSingleCourse,
  enrollUser,
} = require("../_controllers/courseController");
const courseRoute = express.Router();

courseRoute.post("/create", createCourse);
courseRoute.get("/get/all", getAllCourses);
courseRoute.get("/get/:courseId", getSingleCourse);
courseRoute.post("/enroll", enrollUser);

module.exports = courseRoute;
