const { Lesson, Course } = require("../models");

const createLesson = async (req, res) => {
  const { title, description, video, duration, course, attachement } = req.body;
  const findCourse = await Course.findById(course);
  if (!findCourse) {
    return res.status(201).json({ msg: "Course not found" });
  }
  const newLesson = await Lesson.create({
    title,
    description,
    video,
    duration,
    course,
  });
  if (!newLesson) {
    return res.status(201).json({ msg: "Lesson not created" });
  }
  findCourse.lessons.push(newLesson._id);
  await findCourse.save();
  return res
    .status(200)
    .json({ msg: "Lesson created successfully", newLesson });
};

module.exports = {
  createLesson,
};
