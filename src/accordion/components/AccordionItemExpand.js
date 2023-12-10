import React from "react";
import styles from "./AccordionItemExpand.module.css";

export default function AccordionItemExpand({ isExpanded, content }) {
  let sectionClass = "";

  if (isExpanded) {
    sectionClass = `${styles.section} ${styles.expandedSection}`;
  } else {
    sectionClass = `${styles.section} ${styles.collapsedSection}`;
  }

  return <section className={sectionClass}>{content}</section>;
}
