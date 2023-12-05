import Grid from "./Grid";
import styles from "./Container.module.css";
import PointsBoard from "./PointsBoard";

function TicTacToeContainer() {
  return (
    <div className={styles.container}>
      <PointsBoard />
      <Grid />
    </div>
  );
}

export default TicTacToeContainer;
