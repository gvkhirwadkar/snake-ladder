import styles from "./Dice.module.css";

const DICE_MAPPING = {
  1: [5],
  2: [1, 9],
  3: [1, 5, 9],
  4: [1, 3, 7, 9],
  5: [1, 3, 5, 7, 9],
  6: [1, 4, 7, 3, 6, 9],
};

const Dice = ({ number }) => {
  return (
    <div className={styles.dice}>
      <div className={styles.row}>
        {Array.from({ length: 3 }, (_, k) => {
          const base = k + 1;
          return DICE_MAPPING[number].indexOf(base) > -1 ? (
            <div key={base} index={base} className={styles.dot} />
          ) : (
            <div key={base} />
          );
        })}
      </div>
      <div className={styles.row}>
        {Array.from({ length: 3 }, (_, k) => {
          const base = 3 + k + 1;
          return DICE_MAPPING[number].indexOf(base) > -1 ? (
            <div key={base} index={base} className={styles.dot} />
          ) : (
            <div key={base} />
          );
        })}
      </div>
      <div className={styles.row}>
        {Array.from({ length: 3 }, (_, k) => {
          const base = 6 + k + 1;
          return DICE_MAPPING[number].indexOf(base) > -1 ? (
            <div key={base} index={base} className={styles.dot} />
          ) : (
            <div key={base} />
          );
        })}
      </div>
    </div>
  );
};

export default Dice;
