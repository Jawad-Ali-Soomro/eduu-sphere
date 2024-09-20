const mongoose = require("mongoose");
const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_RI).then(() => {
      console.log("database connected");
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDatabase;
