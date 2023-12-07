import React from "react";
import styles from "./Button.module.css";

export default function Button({
  label = "Click",
  variant = "primary",
  onClick = () => {},
  ...rest
}) {
  const buttonClass = `${styles.button} ${styles[variant]}`;
  return (
    <button className={buttonClass} onClick={onClick} {...rest}>
      {label}
    </button>
  );
}
