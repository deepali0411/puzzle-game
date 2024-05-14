import react, { useState } from "react";
import styles from "./grid.module.scss";
import DropBox from "../dropBox/DropBox";

const GridBox = ({ grid, answerOptions, setAnswerOptions, setAnswerGrid }) => {
  const [isDragged, setIsDragged] = useState(false);

  const handleDragStart = (e, data) => {
    const jsonString = JSON.stringify(data);
    e.dataTransfer.setData("application/json", jsonString);
  };

  const handleDragEnd = (e) => {
    console.log("handlefsdcsnjk: ", e);
  };

  return (
    <>
      <div
        className={styles.container}
        style={{ gridTemplateColumns: `repeat(${grid[0]?.length}, 1fr)` }}
      >
        {grid.flat(1).map((row, index) =>
          {
            const m = grid[0].length;
            const i = Math.floor(index/m);
            const j = index % m;
            return (row === 1 ? (
            <div className={styles.cell}>
              <DropBox
                setAnswerOptions={setAnswerOptions}
                setIsDragged={setIsDragged}
                isDragged={isDragged}
                indexes={[i,j]}
                setAnswerGrid={setAnswerGrid}
              />
            </div>
          ) : (
            <div style={{ width: "4rem", height: "4rem" }}></div>
          ))}
        )}
      </div>
      <div className={styles.options}>
        {answerOptions.map((option) => (
          <div
            key={option?.id}
            className={styles.option}
            draggable
            onDragStart={(e) => handleDragStart(e, option)}
            onDragEnd={(e) => handleDragEnd(e)}
          >
            {option?.data}
          </div>
        ))}
      </div>
    </>
  );
};
export default GridBox;
