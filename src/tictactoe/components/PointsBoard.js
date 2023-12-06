import React from "react";
import styles from "./PointsBoard.module.css";

export default function PointsBoard({ score }) {
  const { xScore, oScore } = score;
  console.log(xScore, oScore);
  const xPlayerWin = xScore > oScore ? styles.win : "";
  const oPlayerWin = xScore < oScore ? styles.win : "";

  return (
    <div className={styles.pointsBoard}>
      <table>
        <tbody>
          <tr>
            <th>Player</th>
            <th>Score</th>
          </tr>
          <tr className={xPlayerWin}>
            <td>X</td>
            <td>{xScore}</td>
          </tr>
          <tr className={oPlayerWin}>
            <td>O</td>
            <td>{oScore}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
