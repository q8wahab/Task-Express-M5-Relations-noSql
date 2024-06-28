const Author = require("../../models/Author");
const Tag = require("../../models/tag");

const CreateTag = async (req, res, next) => {
  try {
    const tag = await Tag.create(req.body);
    return res.status(201).json(tag);
  } catch (error) {
    next(error);
  }
};

const getAllTags = async (req, res, next) => {
  try {
    const tags = await Tag.find();
    return res.status(201).json(tags);
  } catch (error) {
    next(error);
  }
};

module.exports = { CreateTag, getAllTags };
