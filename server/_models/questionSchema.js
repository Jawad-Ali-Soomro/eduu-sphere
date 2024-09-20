const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true, // The actual question text
  },
  questionType: {
    type: String,
    enum: ["mcq", "trueFalse", "shortAnswer"], // Types of questions: MCQ, True/False, Short Answer
    default: "mcq",
  },
  options: [
    {
      text: String, // Option text (only for MCQ)
    },
  ],
  correctAnswer: {
    type: String, // Correct answer (could be a boolean, string, or reference)
    required: true,
  },
  marks: {
    type: Number,
    required: true, // Marks for this question
  },
  quiz: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Quiz", // Reference to the Quiz this question belongs to
    required: true,
  },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
