const express = require("express");
const { getAllAuthors, CreateAuthor } = require("./authors.controllers");
const router = express.Router();

router.get("/", getAllAuthors);
router.post("/", CreateAuthor);

module.exports = router;
