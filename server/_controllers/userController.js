const {
  hashPassword,
  generateToken,
  compareToken,
  comparePassword,
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

    const token = authHeader.split(" ")[1];

    const data = await compareToken({ token });
    return res.json({
      data,
    });
  } catch (error) {
    console.error("Error in getProfile:", error);
    return res.status(500).json({ msg: "Server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const findUser = await User.findOne({ email: req.body.email }).select(
      "+password"
    );
    if (!findUser) {
      return res.status(202).json({ msg: "User not found" });
    }
    if (!findUser.password || !req.body.password) {
      return res.status(400).json({ msg: "Missing password" });
    }
    const isMatch = await comparePassword({
      password: req.body.password,
      hashedPassword: findUser.password,
    });

    if (!isMatch) {
      return res.status(201).json({ msg: "Wrong password" });
    } else {
      const token = await generateToken({ data: findUser });
      return res.status(200).json({ msg: "Login successful", token });
    }
  } catch (error) {
    console.error("Login error:", error); // Log the error details for debugging
    return res.status(500).json({ msg: "Internal Server Error", error });
  }
};

module.exports = { createUser, getProfile, loginUser };
