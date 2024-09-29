const { hashPassword } = require("../_middlewares");
const { User } = require("../models");

const createUser = async (req, res) => {
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
    }).select("-password");
    return res.status(200).json({ msg: "User created successfully", newUser });
  }
};
module.exports = { createUser };
