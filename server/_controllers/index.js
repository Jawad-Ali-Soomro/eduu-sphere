const { createCourse } = require("./courseController");
const { createUser, getProfile, loginUser } = require("./userController");

module.exports = { createUser, getProfile, loginUser, createCourse };
