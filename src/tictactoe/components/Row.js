import React from "react";
import Square from "./Square";
import { COLUMNS } from "../Config";
import styles from "./Row.module.css";

export default function Row({ squarePerCell = COLUMNS }) {
  return (
    <div className={styles.row}>
      {Array.from({ length: squarePerCell }).map((v, i) => {
        return <Square key={i} />;
      })}
    </div>
  );
}
