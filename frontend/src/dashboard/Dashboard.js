import React, { useEffect, useState } from "react";
import cx from "classnames";

import QuestionBox from "../components/questionBox/QuestionBox";
import GridBox from "../components/gridBox/GridBox";

import { updateAnswers } from "../actions";
import { getAnswers } from "../helpers";

import styles from "./dashboard.module.scss";

const Dashboard = ({
  questions,
  grid,
  answerOptions,
  setAnswerOptions,
  answersId,
  onRetry
}) => {
  console.log("answersId: ", answersId);
  const [answerGrid, setAnswerGrid] = useState([]);
  const [error, setError] = useState("");
  const [checkAnswers, setCheckAnswers] = useState("");
  console.log("answerGrid: ", answerGrid);

  useEffect(() => {
    if (grid) {
      setAnswerGrid(
        new Array(grid?.length).fill(new Array(grid[0]?.length).fill(null))
      );
    }
  }, [grid]);

  const handleClick = async () => {
    const { error, answers } = getAnswers(answersId, answerGrid);
    setError(error);
    if (error) return;
    const data = await updateAnswers(answers);
    setCheckAnswers(data);
    console.log("data: ", data);
  };

  const handleRetry = () => {
    setCheckAnswers("")
    onRetry();
  }

  return (
    <>
      {!checkAnswers ? (
        <div className={styles.container}>
          <QuestionBox questions={questions} />
          <div className={styles.grid}>
            <GridBox
              grid={grid}
              answerOptions={answerOptions}
              setAnswerOptions={setAnswerOptions}
              setAnswerGrid={setAnswerGrid}
            />
          </div>
          <div className={styles.button}>
            {error && <div className={styles.error}>{error}</div>}
            <button onClick={handleClick} className={styles.submit}>
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div
          className={`${styles.ansContainer} ${
            checkAnswers === "Correct Answers"
              ? styles.correct
              : styles.inCorrect
          }`}
        >
          <div>{checkAnswers} !!!</div>
          <button className={styles.retry} onClick={handleRetry}>Try again</button>
        </div>
      )}
    </>
  );
};
export default Dashboard;
