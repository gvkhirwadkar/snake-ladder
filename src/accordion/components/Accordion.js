import React, { useState } from "react";
import styles from "./Accordion.module.css";
import AccordionItem from "./AccordionItem";

export default function Accordion() {
  const [config, setConfig] = useState([
    {
      id: "accordion1",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      header: "Expand Accordion to see content",
      isExpanded: false,
    },
    {
      id: "accordion2",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      header: "Expand Accordion to see content",
      isExpanded: false,
    },
    {
      id: "accordion3",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      header: "Expand Accordion to see content",
      isExpanded: false,
    },
  ]);

  const handleItemClick = (e) => {
    const idClicked = e.target.id;
    setConfig((prevConfig) => {
      return prevConfig.map((v) => {
        if (v.id === idClicked) {
          return {
            ...v,
            isExpanded: !v.isExpanded,
          };
        } else return v;
      });
    });
  };

  return (
    <div className={styles.accordion}>
      {config.map(({ header, id, isExpanded, content }) => {
        return (
          <AccordionItem
            key={id}
            header={header}
            id={id}
            onItemClick={handleItemClick}
            isExpanded={isExpanded}
            content={content}
            buttonLabel={isExpanded ? "Collapse" : "Expand"}
          />
        );
      })}
    </div>
  );
}
