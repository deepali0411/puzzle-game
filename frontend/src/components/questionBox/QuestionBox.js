import react from "react";
import styles from "./questionsBox.module.scss";

const QuestionBox = ({ questions }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {questions.map((question) => (
          <li key={question?.id} className={styles.question}>
            <div className={styles.question}>{question?.text}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default QuestionBox;
