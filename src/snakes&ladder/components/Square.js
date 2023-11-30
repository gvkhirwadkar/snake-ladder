import styles from "./Square.module.css";

const Square = ({ children, squareClass }) => {
  return (
    <div className={squareClass}>
      <span className={styles.marker}>{children}</span>
    </div>
  );
};

export default Square;
