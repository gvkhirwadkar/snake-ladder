import React from "react";
import styles from "./AccordionItemExpand.module.css";

export default function AccordionItemExpand({ isExpanded, content }) {
  return (
    isExpanded && (
      <section className={styles.expandedSection}>{content}</section>
    )
  );
}
