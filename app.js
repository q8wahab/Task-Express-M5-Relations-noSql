const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");
const authorRouter = require("./api/authors/authors.routes");
const CreatRouter = require("./api/authors/authors.routes");

connectDb();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/posts", postsRoutes);
app.use("/authors", authorRouter);
app.use("/authors", CreatRouter);

app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || "Internal Server Error",
  });
});

app.listen(8001, () => {
  console.log("The application is running on localhost:8001");
});
