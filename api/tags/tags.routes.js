const express = require("express");
const { CreateTag, getAllTags } = require("./tags.controllers");
const router = express.Router();

router.post("/", CreateTag);
router.get("/", getAllTags);

module.exports = router;
