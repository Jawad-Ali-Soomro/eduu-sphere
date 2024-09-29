const jwt = require("jsonwebtoken");
const generateToken = async ({ data }) => {
  return jwt.sign({ data }, process.env.JWT_SECRET);
};

module.exports = generateToken;
