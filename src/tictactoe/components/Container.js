import Grid from "./Grid";
import styles from "./Container.module.css";
import PointsBoard from "./PointsBoard";
import { useState } from "react";

const SCORE = { xScore: 0, oScore: 0 };

function TicTacToeContainer() {
  const [score, setScore] = useState(SCORE);
  return (
    <div className={styles.container}>
      <PointsBoard score={score} />
      <Grid
        setScore={(winner) => {
          if (winner.toUpperCase() === "X") {
            setScore((prev) => {
              return {
                ...prev,
                xScore: prev.xScore + 1,
              };
            });
          } else {
            setScore((prev) => {
              return {
                ...prev,
                oScore: prev.oScore + 1,
              };
            });
          }
        }}
      />
    </div>
  );
}

export default TicTacToeContainer;
