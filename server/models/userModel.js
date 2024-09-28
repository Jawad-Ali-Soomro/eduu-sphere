const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please enter username"],
  },
  email: {
    type: String,
    required: [true, "please enter email"],
  },
  password: {
    type: String,
    required: [true, "please enter password"],
    min: [6, "Your password shouldn't be less than 6 characters"],
  },
  avatar: {
    type: String,
  },
  bio: {
    type: String,
    max: 200,
  },
  socialLinks: [
    {
      platform: {
        type: String,
        url: String,
      },
    },
  ],
  isAdmin: {
    type: Boolean,
    default: false,
  },
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const User = mongoose.Model("User", userSchema);
module.exports = User;
