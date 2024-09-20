const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course", // Reference to the Course this quiz belongs to
    required: true,
  },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question", // Array of Question references (each quiz contains multiple questions)
    },
  ],
  totalMarks: {
    type: Number,
    required: true, // Total marks possible for the quiz
  },
  passingMarks: {
    type: Number, // Minimum score required to pass
  },
  timeLimit: {
    type: Number, // Time limit in minutes for the quiz
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
