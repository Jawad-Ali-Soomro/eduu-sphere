const express = require("express");
const { createLesson } = require("../_controllers");
const lessonRoute = express.Router();

lessonRoute.post("/create", createLesson);

module.exports = lessonRoute;
