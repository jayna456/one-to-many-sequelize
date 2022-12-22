const express = require("express");
const {
  insertComment,
  findCommentById,
} = require("../controller/comment.controller");

const router = express.Router();

router.post("/", insertComment);

router.get("/getCommentById/:id", findCommentById);

module.exports = router;
