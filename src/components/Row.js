import { LADDER_CLIMBS, SNAKE_BITES } from "../Config";
import Square from "./Square";

const getSquareClass = (squareIndex, currentPosition) => {
  let squareClass = "square";
  const snakeBiteEnd = SNAKE_BITES[squareIndex];
  const stairClimbEnd = LADDER_CLIMBS[squareIndex];

  if (currentPosition) {
    squareClass = squareClass.concat(" current_position");
  }

  if (snakeBiteEnd) {
    squareClass = squareClass.concat(" snake_bite");
  }

  if (stairClimbEnd) {
    squareClass = squareClass.concat(" ladder_climb");
  }

  return squareClass;
};

const Row = ({ columns, rowIndex, markerPosition }) => {
  return Array.from({ length: columns }, (_, k) => {
    const squareIndex = columns * rowIndex + k + 1;
    const squareLabel = squareIndex === markerPosition ? "X" : squareIndex;
    const squareClass = getSquareClass(
      squareIndex,
      squareIndex === markerPosition
    );
    return (
      <Square
        key={squareLabel}
        squareLabel={squareLabel}
        squareClass={squareClass}
      />
    );
  });
};

export default Row;
