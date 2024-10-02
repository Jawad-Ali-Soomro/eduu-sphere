const { createCourse } = require("./courseController");
const { createLesson } = require("./lessonContoller");
const { createUser, getProfile, loginUser } = require("./userController");

module.exports = {
  createUser,
  getProfile,
  loginUser,
  createCourse,
  createLesson,
};
