const { findById, createComment } = require("../service/comment.service");

const insertComment = async (req, res) => {
  try {
    const dataToPass = {
      name: req.body.name,
      text: req.body.text,
    };
    const newRecord = await createComment(req.body.tutorialId, dataToPass);

    if (newRecord) {
      res.status(200).json({
        code: 200,
        success: true,
        data: newRecord,
      });
    } else {
      res.status(500).json({
        code: 500,
        success: false,
        message: "something went wrong!",
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      success: false,
      message: error.message,
    });
  }
};

const findCommentById = async (req, res) => {
  try {
    const fetchedComment = await findById(req.params.id);

    if (fetchedComment) {
      res.status(200).json({
        code: 200,
        success: true,
        data: fetchedComment,
      });
    } else {
      res.status(500).json({
        code: 500,
        success: false,
        message: "something went wrong!",
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      success: false,
      message: error.message,
    });
  }
};

module.exports = { insertComment, findCommentById };
