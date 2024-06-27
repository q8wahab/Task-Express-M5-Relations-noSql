const Author = require("../../models/Author");

const getAllAuthors = async (req, res, next) => {
  try {
    const authors = await Author.find();
    res.status(201).json(authors);
  } catch (error) {
    next(error);
  }
};

const CreateAuthor = async (req, res, next) => {
  try {
    const author = await Author.create(req.body);
    return res.status(201).json(author);
  } catch (error) {
    next(error);
  }
};
module.exports = { getAllAuthors, CreateAuthor };
