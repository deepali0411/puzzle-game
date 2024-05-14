const express = require("express");
const { getQuestions, getGrid, checkAnswers } = require("../controllers/apiController");
const router = express.Router();

router.route("/questions").get(getQuestions);
router.route("/grid").get(getGrid);
router.route("/answers").post(checkAnswers);

module.exports = router;