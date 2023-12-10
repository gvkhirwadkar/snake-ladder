import React from "react";
import styles from "./AccordionItem.module.css";
import Button from "../../button/Button";
import AccordionItemHeader from "./AccordionItemHeader";
import AccordionItemExpand from "./AccordionItemExpand";

export default function AccordionItem({
  header,
  id,
  isExpanded,
  content,
  onItemClick = () => {},
  buttonLabel,
}) {
  return (
    <div className={styles.item}>
      <div className={styles.header}>
        <AccordionItemHeader label={header} />
        <Button label={buttonLabel} onClick={onItemClick} id={id} />
      </div>
      <AccordionItemExpand isExpanded={isExpanded} content={content} />
    </div>
  );
}
