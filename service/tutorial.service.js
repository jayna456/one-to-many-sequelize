const Models = require("../models");

const Tutorial = Models.tutorial;
const Comment = Models.comment;

const createTutorial = async (tutorial) => {
  return await Tutorial.create(tutorial);
};

const findById = async (id) => {
  return await Tutorial.findByPk(id, {
    include: [{ model: Comment, as: "comments" }],
  });
};

const findAll = async () => {
  return await Tutorial.findAll({
    include: [{ model: Comment, as: "comments" }],
  });
};

module.exports = { createTutorial, findById, findAll };
