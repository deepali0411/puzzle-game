export const getAnswers = (answersId, answerGrid) => {
  let answers = {},
    error = "";
  for (let key of Object.keys(answersId)) {
    let ans = "";
    answersId[key].forEach((data) => {
      const value = answerGrid[data[0]][data[1]];
      console.log("value: ", value);
      if (value!==0 && !value) {
        console.log(value)
        error = "Please complete the game !!";
        return;
      }
      ans += value;
    });
    answers[key] = ans;
    ans = "";
  }
  console.log('answers: ', answers);
  return { error, answers };
};
