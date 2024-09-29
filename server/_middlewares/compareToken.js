const jwt = require("jsonwebtoken");

const compareToken = async ({ token }) => {
  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    return decoded; // Return the decoded token which contains user data
  } catch (error) {
    throw new Error("Invalid token"); // Handle invalid token scenario
  }
};

module.exports = compareToken;
