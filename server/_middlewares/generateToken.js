const jwt = require("jsonwebtoken");

const generateToken = async ({ data }) => {
  return await jwt.sign({ data }, process.env.JWT_SECRET, { expiresIn: "24h" });
};

module.exports = generateToken;
