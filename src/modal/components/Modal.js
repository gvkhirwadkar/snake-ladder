import React from "react";
import styles from "./Modal.module.css";

export default function Modal({
  headerText = "Header Text",
  footerText = "Footer Text",
  bodyText = "Content not provided",
  onClose = () => {},
}) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <header>
          {headerText}
          <button onClick={onClose}>X</button>
        </header>
        <hr />
        <main>{bodyText}</main>
        <footer>{footerText}</footer>
      </div>
    </div>
  );
}
