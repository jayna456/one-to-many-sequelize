const express = require("express");
const {
  insertTutorial,
  findTutorialById,
  fetchAllTutorials,
} = require("../controller/tutorial.controller");

const router = express.Router();

router.post("/", insertTutorial);

router.get("/getTutorialById/:id", findTutorialById);

router.get("/", fetchAllTutorials);

module.exports = router;
