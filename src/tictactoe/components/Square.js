import React from "react";
import styles from "./Square.module.css";

export default function Square({
  handleClick = () => {
    alert("Please implement onclick");
  },
  index,
  children,
}) {
  return (
    <div onClick={handleClick} className={styles.square} index={index}>
      {children}
    </div>
  );
}
