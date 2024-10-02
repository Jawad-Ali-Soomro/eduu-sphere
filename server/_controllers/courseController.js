const { User, Course } = require("../models");

const createCourse = async (req, res) => {
  try {
    const instructor = await User.findById(req.body.instructor);
    if (!instructor) {
      return res.status(201).json({ msg: "User not found" });
    } else if (instructor.isAdmin === false) {
      return res.status(201).json({ msg: "You are Unauthorized" });
    } else {
      const newCourse = await Course.create({
        ...req.body,
        instructor: instructor._id,
      });
      if (!newCourse) {
        return res.status(201).json({ msg: "Course not created" });
      }
      instructor.createdCourses.push(newCourse._id);
      await instructor.save();
      return res
        .status(200)
        .json({ msg: "Course created successfully", newCourse });
    }
  } catch (error) {
    return res.status(300).json({ error });
  }
};

const getAllCourse = async (req, res) => {
  try {
    const courses = await Course.find({}).populate("instructor");
    if (!courses) {
      return res.status(202).json({
        msg: "No courses found",
      });
    }
    return res.status(200).json({
      courses,
    });
  } catch (error) {
    return res.status(300).json({ error });
  }
};

const getCourseById = async (req, res) => {
  try {
    const { courseId } = req.params;
    if (!courseId) {
      return res.status(202).json({
        msg: "No courses found",
      });
    }
    const course = await Course.findById(courseId)
      .populate("instructor")
      .populate("lessons");
    if (!course) {
      return res.status(202).json({
        msg: "No courses found",
      });
    }
    return res.status(200).json({
      course,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error During Getting course Info",
      error,
    });
  }
};

module.exports = { createCourse, getAllCourse, getCourseById };
