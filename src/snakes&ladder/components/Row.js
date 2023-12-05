import { useState } from "react";
import { LADDER_CLIMBS, SNAKE_BITES } from "../Config";
import styles from "./Square.module.css";
import Square from "./Square";
import rowStyles from "./Row.module.css";

const getSquareClass = (squareIndex, currentPosition) => {
  let squareClass = styles.square;
  const snakeBiteEnd = SNAKE_BITES[squareIndex];
  const stairClimbEnd = LADDER_CLIMBS[squareIndex];

  if (currentPosition) {
    squareClass = squareClass.concat(" " + styles.current_position);
  }

  if (snakeBiteEnd) {
    squareClass = squareClass.concat(" " + styles.snake_bite);
  }

  if (stairClimbEnd) {
    squareClass = squareClass.concat(" " + styles.ladder_climb);
  }

  return squareClass;
};

const getTooltipText = (squareIndex) => {
  const snakeBiteEnd = SNAKE_BITES[squareIndex];
  const ladderEnd = LADDER_CLIMBS[squareIndex];
  if (snakeBiteEnd) {
    return `Go to ${snakeBiteEnd}`;
  }

  if (ladderEnd) {
    return `Go to ${ladderEnd}`;
  }
};

const WithTooltip = (Component, tooltipText = "") => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (props) => {
    const { children, ...restProps } = props;
    return (
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {tooltipText && showTooltip ? (
          <label className={`${styles.square} ${styles.tooltip}`}>
            {tooltipText}
          </label>
        ) : (
          <Component {...restProps}>{children}</Component>
        )}
      </div>
    );
  };
};

const Row = ({ columns, rowIndex, markerPosition }) => {
  const isOddRow = rowIndex % 2 === 0;
  const rowClassName = isOddRow
    ? rowStyles.boardRow
    : rowStyles.boardRowReverse;
  return (
    <div className={rowClassName} key={rowIndex}>
      {Array.from({ length: columns }, (_, k) => {
        const squareIndex = columns * rowIndex + k + 1;
        const squareLabel =
          squareIndex === markerPosition ? (
            <div className={styles.userPosition}></div>
          ) : (
            squareIndex
          );
        const squareClass = getSquareClass(
          squareIndex,
          squareIndex === markerPosition
        );
        const tooltipText = getTooltipText(squareIndex);

        const SquareWithToolTip = WithTooltip(Square, tooltipText);

        return (
          <SquareWithToolTip key={squareLabel} squareClass={squareClass}>
            {squareLabel}
          </SquareWithToolTip>
        );
      })}
    </div>
  );
};

export default Row;
