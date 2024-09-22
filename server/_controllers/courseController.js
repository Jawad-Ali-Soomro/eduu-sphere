const errHandler = require("../_middlewares/errHandler");
const { Course, User } = require("../_models");
const { compareToken } = require("../_utils");

const createCourse = errHandler(async (req, res) => {
  const { loginToken } = req.cookies;
  if (!loginToken) {
    return res.status(201).json({ message: "Invalid Login" });
  }

  const verifyToken = await compareToken({ token: loginToken });
  if (!verifyToken) {
    return res.status(202).json({ message: "Invalid Token" });
  }

  const userRole = verifyToken?.data?.role;
  if (userRole === "student") {
    return res.status(203).json({ message: "Unauthorized Access" });
  }

  try {
    const createdCourse = await Course.create({
      ...req.body,
      instructor: verifyToken?.data?._id,
    });
    const findInstructor = await User.findById(verifyToken?.data?._id);
    findInstructor.coursesTaught.push(createdCourse._id);
    await findInstructor.save();
    return res.status(200).json({
      message: "Course Created",
      data: createdCourse,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error creating course", error: error.message });
  }
});

const getAllCourses = errHandler(async (req, res) => {
  const foundCourses = await Course.find({}).populate("instructor");
  return res.json({
    data: foundCourses,
  });
});

const getSingleCourse = errHandler(async (req, res) => {
  const { courseId } = req.params;
  const foundCourse = await Course.findById(courseId)
    .populate("instructor")
    .populate("studentsEnrolled")
    .populate("lessons")
    .populate("quizzes")
    .populate("tasks");
  return res.json({
    data: foundCourse,
  });
});

const enrollUser = errHandler(async (req, res) => {
  const { userId, courseId } = req.body;
  const foundCourse = await Course.findById(courseId);
  foundCourse.studentsEnrolled.push(userId);
  const foundUser = await User.findById(userId);
  foundUser.coursesEnrolled.push(foundCourse._id);
  await foundCourse.save();
  await foundUser.save();
  return res.json({
    message: "User Enrolled",
    data: foundCourse,
  });
});

module.exports = { createCourse, getAllCourses, getSingleCourse, enrollUser };
