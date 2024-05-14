const asyncHandler = require("express-async-handler");
const { questionAndOptions, gridData, rightAnswers } = require("../model/questionData");
const _ = require('lodash');

const getQuestions = asyncHandler(async (req, res) => {
  res.status(200).json(questionAndOptions);
});

const getGrid = asyncHandler(async (req, res) => {
  res.status(200).json(gridData);
});

const checkAnswers = asyncHandler(async (req, res) => {
  console.log('req: ', req.body);
  const {answers} = req.body;
  // console.log('userAnswers: ', userAnswers);
  if (!answers) {
    res.status(400);
    throw new Error("All fields are mendatory !");
  }
  const isEqual = _.isEqual(rightAnswers, answers);
  console.log('_isEqual(userAnswers, answers): ', isEqual);
  if(!isEqual){
     res.status(201).json("Incorrect Answers")
  }
  else res.status(201).json("Correct Answers");
});

module.exports = { getQuestions, getGrid, checkAnswers };
