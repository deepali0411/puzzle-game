const questionAndOptions = {
  questions: [
    {
      id: 2,
      text: "smallest 5 digit number with 1 at 100th place",
      grid: 4,
    },
    {
      id: 1,
      text: "Largest 4 digit number with given digits",
      grid: 4,
    },
  ],
  answerOptions: [
    {
      id: 1,
      data: 0,
    },
    {
      id: 2,
      data: 1,
    },
    {
      id: 3,
      data: 4,
    },
    {
      id: 4,
      data: 5,
    },
    {
      id: 5,
      data: 9,
    },
    {
      id: 6,
      data: 6,
    },
    {
      id: 7,
      data: 2,
    },
    {
      id: 8,
      data: 8,
    },
    {
      id: 9,
      data: 3,
    },
    {
      id: 10,
      data: 7,
    },
  ],
  answers: {
    first: ["10", "11", "12", "13", "14"],
    second: ["02", "12", "22", "32"],
  },
};

const gridData = [
  [0, 0, 1, 0, 0],
  [1, 1, 1, 1, 1],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 1, 1],
];

const rightAnswers = { first: "20134",  second: "9187" };

module.exports = { questionAndOptions, gridData, rightAnswers };
