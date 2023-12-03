import { useEffect } from "react";
import styles from "./ProgressBar.module.css";
import { MAX } from "../Config";

const getProgressValueStyle = (value) => {
  return {
    color: value > 49 ? "white" : "black",
  };
};

const getProgressFillStyle = (value) => {
  return { transform: `scaleX(${value / 100})`, transformOrigin: "left" };
};

const ProgressBar = ({ value = 0, onEnd = () => {}, onStart = () => {} }) => {
  useEffect(() => {
    if (value === MAX) {
      onEnd();
    }
  }, [value, onEnd]);

  return (
    <div className={styles.progressBar}>
      <span
        className={styles.progressValue}
        style={getProgressValueStyle(value)}
      >
        {value.toFixed()}%
      </span>
      <div
        className={styles.progressFill}
        style={getProgressFillStyle(value)}
      ></div>
    </div>
  );
};

export default ProgressBar;
