import { useEffect } from "react";
import "./ProgressBar.css";
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
    <div className="progress-bar">
      <span className="progress-value" style={getProgressValueStyle(value)}>
        {value.toFixed()}%
      </span>
      <div className="progress-fill" style={getProgressFillStyle(value)}></div>
    </div>
  );
};

export default ProgressBar;
