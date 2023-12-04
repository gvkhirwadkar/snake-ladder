import { useEffect, useState } from "react";
import { ROWS, WINNING_INDICES } from "../Config";
import Row from "./Row";

const BLANK_ARRAY = Array.from({ length: 9 });

function Grid() {
  const [player, setPlayer] = useState("X");
  const [turns, setTurns] = useState(0);
  const [isWon, setIsWon] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [markerPositions, setMarkerPositions] = useState(BLANK_ARRAY);
  const rows = [];

  const setData = () => {
    const newMarker = player === "X" ? "O" : "X";
    const newTurns = turns + 1;
    setPlayer(newMarker);
    setTurns(newTurns);
  };

  const handleSquareClick = (e) => {
    const clickIndex = e.target.getAttribute("index");
    if (!markerPositions[clickIndex]) {
      const newMarkerPositions = [...markerPositions];
      newMarkerPositions[clickIndex] = player;
      setMarkerPositions(newMarkerPositions);
      setData();
    } else {
      return;
    }
  };

  const resetGame = () => {
    setMarkerPositions(BLANK_ARRAY);
    setTurns(0);
  };

  useEffect(() => {
    if (turns > 4) {
      WINNING_INDICES.forEach((options) => {
        const [i, j, k] = options;
        if (markerPositions[i] && markerPositions[j] && markerPositions[k]) {
          if (
            markerPositions[i] === markerPositions[j] &&
            markerPositions[j] === markerPositions[k]
          ) {
            setIsWon(true);
          }
        }
      });
    }
    if (turns > 8) {
      setIsDraw(true);
    }
  }, [player, isWon, turns, markerPositions]);

  useEffect(() => {
    let id;
    if (isWon) {
      resetGame();
      id = setTimeout(() => {
        setIsWon(false);
      }, 2000);
    }

    return () => clearTimeout(id);
  }, [isWon]);

  for (let index = 0; index < ROWS; index++) {
    rows.push(
      <Row
        key={index}
        rowIndex={index}
        handleClick={handleSquareClick}
        filledPositions={markerPositions}
      />
    );
  }

  return (
    <>
      {isWon && <span>User {player} won</span>}
      {isDraw && <span>Draw</span>}
      {!isWon && <div>{rows}</div>}
    </>
  );
}

export default Grid;
