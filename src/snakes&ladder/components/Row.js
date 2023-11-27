import { useState } from "react";
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

const getTooltipText = (squareIndex) => {
  const snakeBiteEnd = SNAKE_BITES[squareIndex];
  const ladderEnd = LADDER_CLIMBS[squareIndex];
  if (snakeBiteEnd) {
    return `You will end up at ${snakeBiteEnd}`;
  }

  if (ladderEnd) {
    return `It will take you up at ${ladderEnd}`;
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
          <label className="square tooltip">{tooltipText}</label>
        ) : (
          <Component {...restProps}>{children}</Component>
        )}
      </div>
    );
  };
};

const Row = ({ columns, rowIndex, markerPosition }) => {
  return Array.from({ length: columns }, (_, k) => {
    const squareIndex = columns * rowIndex + k + 1;
    const squareLabel = squareIndex === markerPosition ? "X" : squareIndex;
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
  });
};

export default Row;
