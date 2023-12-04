import Row from "./Row";
import styles from "./Board.module.css";

const Board = ({ steps = 100, squarePerRows = 10, markerPosition }) => {
  const rows = steps / squarePerRows;

  const board = [];

  for (let index = 0; index < rows; index++) {
    board.push(
      <Row
        key={index}
        columns={squarePerRows}
        rowIndex={index}
        markerPosition={markerPosition}
      />
    );
  }

  return <div className={styles.board}>{board}</div>;
};

export default Board;
