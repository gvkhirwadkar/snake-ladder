import React from "react";
import Square from "./Square";
import { COLUMNS } from "../Config";
import styles from "./Row.module.css";

export default function Row({
  rowIndex,
  squarePerCell = COLUMNS,
  handleClick,
  filledPositions,
}) {
  return (
    <div className={styles.row}>
      {Array.from({ length: squarePerCell }).map((_, k) => {
        const squareIndex = squarePerCell * rowIndex + k;
        const marker = filledPositions[squareIndex];
        return (
          <Square
            key={squareIndex}
            handleClick={handleClick}
            index={squareIndex}
          >
            {marker}
          </Square>
        );
      })}
    </div>
  );
}
