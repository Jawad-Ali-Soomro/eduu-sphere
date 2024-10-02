const mongoose = require("mongoose");
const lessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Course Name Should Be Required"],
    },
    description: {
      type: String,
      required: [true, "Course Description Is Required"],
    },
    video: {
      type: String,
    },
    duration: {
      type: String,
      default: "Unknown", // Default value for the duration
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true, // To ensure it is linked to a course
    },
    attachement: [
      {
        type: {
          type: String, // file name
          required: true,
        },
        url: {
          type: String,
          validate: {
            validator: function (v) {
              return /^(https?:\/\/[^\s]+)$/i.test(v); // URL validation for attachments
            },
            message: (props) => `${props.value} is not a valid URL!`,
          },
        },
      },
    ],
  },
  { timestamps: true }
); // Adds createdAt and updatedAt timestamps

module.exports = mongoose.model("Lesson", lessonSchema);
