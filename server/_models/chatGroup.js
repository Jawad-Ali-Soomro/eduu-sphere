const mongoose = require("mongoose");

const chatGroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  messages: [
    {
      sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      content: String,
      sentAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const ChatGroup = mongoose.model("ChatGroup", chatGroupSchema);
module.exports = ChatGroup;
