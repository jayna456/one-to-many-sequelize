const Models = require("../models");

const Tutorial = Models.tutorial;
const Comment = Models.comment;

const createComment = async (tutorialId, comment) => {
  return await Comment.create({
    name: comment.name,
    text: comment.text,
    tutorialId: tutorialId,
  });
};

const findById = async (id) => {
  return await Comment.findByPk(id, {
    include: [{ model: Tutorial, as: "tutorial" }],
  });
};

module.exports = { createComment, findById };
