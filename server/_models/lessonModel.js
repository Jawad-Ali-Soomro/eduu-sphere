const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true, // Can be markdown, HTML, or plain text
  },
  videoUrl: {
    type: String, // URL to a hosted video (YouTube, Vimeo, etc.)
  },
  attachments: [
    {
      fileUrl: {
        type: String, // URL to the file attachment (PDF, PPT, etc.)
      },
      description: {
        type: String, // Short description of the file
      },
    },
  ],
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course", // Reference to the Course this lesson belongs to
    required: true,
  },
  duration: {
    type: String, // Duration of the lesson (e.g., '45 minutes')
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;
