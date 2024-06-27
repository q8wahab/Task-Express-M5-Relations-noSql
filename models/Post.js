const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
});

module.exports = mongoose.model("Post", postSchema);
