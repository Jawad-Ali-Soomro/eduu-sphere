const express = require("express");
const http = require("http");
const connectDB = require("./_config/connection");
const { userRoute, courseRoute, lessonRoute } = require("./_routes");
require("dotenv").config({
  path: "./_config/.env",
});
const app = express();
const server = http.createServer(app);
const cors = require("cors");

// connecting database & applying middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
connectDB();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// using routes

app.use("/api/user", userRoute);
app.use("/api/course", courseRoute);
app.use("/api/lesson", lessonRoute);

server.listen(process.env.PORT || 4000, () => {
  console.log(`server running on port ${process.env.PORT || 4000}`);
});
