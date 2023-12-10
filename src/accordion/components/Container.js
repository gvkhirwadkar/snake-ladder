import React from "react";
import Accordion from "./Accordion";
import styles from "./Container.module.css";

export default function AccordionContainer() {
  return (
    <div className={styles.container}>
      <Accordion />
    </div>
  );
}
