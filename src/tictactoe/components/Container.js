import Grid from "./Grid";
import styles from "./Container.module.css";

function TicTacToeContainer() {
  return (
    <div className={styles.container}>
      <Grid />
    </div>
  );
}

export default TicTacToeContainer;
