const jwt = require("jsonwebtoken");

const compareToken = async ({ token }) => {
  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    return decoded; // This will return the decoded token data if it's valid.
  } catch (error) {
    throw new Error("Invalid token");
  }
};

module.exports = compareToken;
