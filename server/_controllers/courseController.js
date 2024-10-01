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

module.exports = { createCourse, getAllCourse };
