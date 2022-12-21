const {
  createTutorial,
  findById,
  findAll,
} = require("../service/tutorial.service");

const insertTutorial = async (req, res) => {
  try {
    const newRecord = await createTutorial(req.body);

    if (newRecord) {
      res.status(200).json({
        code: 200,
        success: true,
        data: newRecord,
      });
    } else {
      res.status(200).json({
        code: 500,
        success: false,
        message: "something went wrong!",
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      success: false,
      message: "something went wrong!",
    });
  }
};

const findTutorialById = async (req, res) => {
  try {
    const fetchedTutorial = await findById(req.params.id);

    if (fetchedTutorial) {
      res.status(200).json({
        code: 200,
        success: true,
        data: fetchedTutorial,
      });
    } else {
      res.status(500).json({
        code: 500,
        success: false,
        message: error.message,
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

const fetchAllTutorials = async (req, res) => {
  try {
    const tutorialList = await findAll();

    res.status(200).json({
      code: 200,
      success: true,
      data: tutorialList,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      success: false,
      message: error.message,
    });
  }
};

module.exports = { insertTutorial, findTutorialById, fetchAllTutorials };
