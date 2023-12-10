import React from "react";
import styles from "./AccordionItemHeader.module.css";

export default function AccordionItemHeader({ label = "" }) {
  return <span className={styles.headerText}>{label}</span>;
}
