import react, { useState } from "react";
import styles from "./dropBox.module.scss";

const DropBox = ({ setAnswerOptions, setIsDragged, isDragged, indexes, setAnswerGrid }) => {
  const [data, setData] = useState(null);

  const handleDragStart = (e, data) => {
    const jsonString = JSON.stringify(data);
    e.dataTransfer.setData("application/json", jsonString);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const droppedNumber = e.dataTransfer.getData("application/json");
    const obj = JSON.parse(droppedNumber);
    if (data) setAnswerOptions((prev) => [...prev, data]);
    setAnswerOptions((prev) => {
      return prev.filter((data) => data.id != obj.id);
    });

    setData(obj);
    setAnswerGrid(prev => {
        const matrix = [...prev];
        matrix[indexes[0]] = [...prev[indexes[0]]];
        matrix[indexes[0]][indexes[1]] = obj?.data;
        return matrix
    })
    setIsDragged(true);
  };

  const handleDragEnd = (e) => {
    if (isDragged) setData(null);
    setIsDragged(false);
  };

  return (
    <div
      className={styles.container}
      onDragOver={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onDragStart={(e) => handleDragStart(e, data)}
      onDragEnd={(e) => handleDragEnd(e)}
      draggable
    >
      {data?.data}
    </div>
  );
};
export default DropBox;
