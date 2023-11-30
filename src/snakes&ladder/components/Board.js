import Row from "./Row";
import styles from "./Board.module.css";

const Board = ({ steps = 100, squarePerRows = 10, markerPosition }) => {
  const rows = steps / squarePerRows;

  const board = [];

  for (let index = 0; index < rows; index++) {
    const isOddRow = index % 2 === 0;
    const rowClassName = isOddRow ? styles.boardRow : styles.boardRowReverse;
    board.push(
      <div className={rowClassName} key={index}>
        <Row
          columns={squarePerRows}
          rowIndex={index}
          markerPosition={markerPosition}
        />
      </div>
    );
  }
  return board;
};

export default Board;
