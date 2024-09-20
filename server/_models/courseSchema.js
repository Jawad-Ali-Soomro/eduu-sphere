const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Course title is required"],
  },
  description: {
    type: String,
    required: [true, "Course description is required"],
  },
  category: {
    type: String,
    required: [true, "Course category is required"],
  },
  level: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
    default: "beginner",
  },
  price: {
    type: Number,
    default: 0, // 0 means it's free
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the instructor
    required: true,
  },
  studentsEnrolled: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // References to enrolled students
    },
  ],
  lessons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lesson", // References to lessons in this course
    },
  ],
  quizzes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz", // References to quizzes in this course
    },
  ],
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task", // References to tasks assigned to students in this course
    },
  ],
  thumbnail: {
    type: String, // URL or path to the course thumbnail image
  },
  duration: {
    type: String, // E.g., '10 hours', '6 weeks'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review", // References to reviews left by students
    },
  ],
  averageRating: {
    type: Number,
    default: 0, // Calculated average rating from reviews
  },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
