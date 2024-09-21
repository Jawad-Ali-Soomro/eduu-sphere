const errHanlder = require("../_middlewares/errHandler");
const { User } = require("../_models");
const { generateToken, comparePassword, compareToken } = require("../_utils");

// Helper function to validate email and password
const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
const isValidPassword = (password) => password.length > 6;

const createAccount = errHanlder(async (req, res) => {
  const { name, email, password } = req.body;
  if (!isValidEmail(email)) {
    return res.status(203).json({
      message: "Invalid email format. Email must include '@'.",
    });
  }
  if (!isValidPassword(password)) {
    return res.status(204).json({
      message: "Password must be greater than 6 characters.",
    });
  }
  const findAccount = await User.findOne({ email });
  if (findAccount) {
    return res.status(201).json({
      message: "Account already exists",
    });
  }
  const accountCreated = await User.create({ name, email, password });
  if (!accountCreated) {
    return res.status(202).json({
      message: "Error while creating account!",
    });
  } else {
    const generatedToken = await generateToken({ data: accountCreated });
    return res.status(200).json({
      message: "Account Created!",
      token: generatedToken,
    });
  }
});

const loginUser = errHanlder(async (req, res) => {
  const { email, password } = req.body;
  if (!isValidEmail(email)) {
    return res.status(203).json({
      message: "Invalid email format. Email must include '@'.",
    });
  }
  if (!isValidPassword(password)) {
    return res.status(400).json({
      message: "Password must be greater than 6 characters.",
    });
  }

  const findAccount = await User.findOne({ email }).select("+password");
  if (!findAccount) {
    return res.status(201).json({
      message: "Account doesn't exist",
    });
  } else {
    const matchPassword = await comparePassword({
      password,
      hashedPassword: findAccount.password,
    });
    if (!matchPassword) {
      return res.status(202).json({
        message: "Incorrect Password",
      });
    } else {
      const generatedToken = generateToken({ data: findAccount });
      return res.cookie("loginToken", generatedToken).status(200).json({
        message: "Login Successful",
        token: generatedToken,
      });
    }
  }
});

const getUserProfile = errHanlder(async (req, res) => {
  const { loginToken } = req.cookies;
  if (!loginToken) {
    return res.status(201).json({
      message: "User Token not found",
    });
  }
  try {
    const verifyToken = await compareToken({ token: loginToken });
    res.status(200).json({
      data: verifyToken,
    });
  } catch (error) {
    return res.status(202).json({
      message: "Invalid Token",
    });
  }
});

const updateProfile = errHanlder(async (req, res) => {
  const { usertoFindId } = req.params;
  const { loginToken } = req.cookies;
  if (!loginToken) {
    return res.status(201).json({
      message: "Login Again!",
    });
  } else {
    const verifyToken = await compareToken({ token: loginToken });
    if (!verifyToken) {
      return res.status(202).json({
        message: "Invalid Token",
      });
    }
    if (verifyToken.data._id !== usertoFindId) {
      return res.status(202).json({
        message: "Invalid User Id",
      });
    } else {
      const { name, email, password } = req.body;
      const findAccount = await User.findOneAndUpdate(
        { _id: usertoFindId },
        { name, email, password }
      );
      await findAccount.save();
      const userUpdated = await User.findById(findAccount?._id);
      const generatedToken = await generateToken({ data: userUpdated });
      return res.cookie("loginToken", generatedToken).status(200).json({
        message: "Profile Updated!",
        token: generatedToken,
        data: userUpdated,
      });
    }
  }
});

module.exports = { createAccount, loginUser, getUserProfile, updateProfile };
