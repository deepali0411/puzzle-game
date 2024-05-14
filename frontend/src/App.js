import React, { useEffect, useState } from "react";
import "./App.css";
import { getGrid, getQuestions } from "./actions.js";
import Dashboard from "./dashboard/Dashboard.js";

function App() {
  const [questions, setQuestions] = useState([]);
  const [grid, setGrid] = useState([]);
  const [answerOptions, setAnswerOptions] = useState([]);
  const [answersId, setAnswersId] = useState([]);

  const getData = async () => {
    const data = await getQuestions();
    const gridData = await getGrid();
    setQuestions(data.questions);
    setAnswerOptions(data.answerOptions);
    setGrid(gridData);
    setAnswersId(data?.answers)
  };

  useEffect(() => {
    getData();
  }, []);

  const onRetry = () => {
    getData();
  }

  return (
    <div className="App">
      <Dashboard
        questions={questions}
        grid={grid}
        answerOptions={answerOptions}
        setAnswerOptions={setAnswerOptions}
        answersId={answersId}
        onRetry={onRetry}
      />
    </div>
  );
}

export default App;
