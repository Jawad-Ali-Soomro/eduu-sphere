const { errHanlder } = require("../_middlewares");

exports.loginUser = errHanlder(async (req, res) => {
  res.end("Hello");
});
