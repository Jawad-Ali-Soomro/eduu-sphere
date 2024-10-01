const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Course Name Should Be Entered!"],
  },
  description: {
    type: String,
    required: [true, "Course Description Is Required!"],
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
    default: 0,
  },
  duration: {
    type: String,
  },
  level: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  enrolledUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  ratings: [
    {
      ratedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      rating: {
        type: Number,
        min: 1,
      },
      comment: {
        type: String,
        max: 200,
      },
    },
  ],
  thumbnail: {
    type: String,
  },
  lessons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lesson",
    },
  ],
});

module.exports = mongoose.model("Course", courseSchema);
