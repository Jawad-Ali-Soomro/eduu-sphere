const {
  hashPassword,
  generateToken,
  compareToken,
} = require("../_middlewares");
const { User } = require("../models");

const createUser = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const findAaccount = await User.findOne({ email });
    if (findAaccount) {
      return res.status(201).json({ msg: "User already exists" });
    } else {
      const hashedPassword = await hashPassword({ password });
      const newUser = await User.create({
        email,
        password: hashedPassword,
        username,
      });
      const token = await generateToken({ data: newUser });
      return res.status(200).json({ msg: "User created successfully", token });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const getProfile = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(201).json({ msg: "Please login" });
    }

    const token = authHeader.split(" ")[1]; // Extract the token from the header

    const data = await compareToken({ token });
    return res.json({
      data,
    });
  } catch (error) {
    console.error("Error in getProfile:", error);
    return res.status(500).json({ msg: "Server error" });
  }
};

module.exports = { createUser, getProfile };
