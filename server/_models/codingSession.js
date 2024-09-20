const mongoose = require("mongoose");

const codingSessionSchema = new mongoose.Schema({
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  code: {
    type: String,
    default: "// Start coding...",
  },
  language: {
    type: String,
    enum: ["javascript", "python", "java", "cpp"],
    default: "javascript",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastEditedAt: Date,
});

const CodingSession = mongoose.model("CodingSession", codingSessionSchema);
module.exports = CodingSession;
