import { useEffect, useState } from "react";
import { ROWS, WINNING_INDICES } from "../Config";
import Row from "./Row";

const BLANK_ARRAY = Array.from({ length: 9 });
const DEFAULT_PLAYER = "X";

function Grid({ setScore }) {
  const [player, setPlayer] = useState(DEFAULT_PLAYER);
  const [turns, setTurns] = useState(0);
  const [isWon, setIsWon] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [winner, setWinner] = useState("");
  const [markerPositions, setMarkerPositions] = useState(BLANK_ARRAY);
  const rows = [];

  const setData = () => {
    const newMarker = player === "X" ? "O" : "X";
    const newTurns = turns + 1;
    setPlayer(newMarker);
    setTurns(newTurns);
  };

  const resetGame = () => {
    setPlayer(DEFAULT_PLAYER);
    setMarkerPositions(BLANK_ARRAY);
    setTurns(0);
    setIsWon(false);
    setIsDraw(false);
  };

  const calculateWinner = (markerPositions = []) => {
    let verdict = {
      isWon: false,
      isDraw: false,
      winner: "",
    };

    // Calculate winning only when turns more than 4
    if (turns >= 4) {
      for (let index = 0; index < WINNING_INDICES.length; index++) {
        const [i, j, k] = WINNING_INDICES[index];
        if (markerPositions[i] && markerPositions[j] && markerPositions[k]) {
          if (
            markerPositions[i] === markerPositions[j] &&
            markerPositions[j] === markerPositions[k]
          ) {
            return {
              ...verdict,
              isWon: true,
              winner: markerPositions[i],
            };
          }
        }
      }
    }

    if (markerPositions.indexOf(undefined) < 0) {
      return {
        ...verdict,
        isDraw: true,
      };
    }

    return verdict;
  };

  const handleSquareClick = (e) => {
    const clickIndex = e.target.getAttribute("index");
    if (!markerPositions[clickIndex]) {
      const newMarkerPositions = [...markerPositions];
      newMarkerPositions[clickIndex] = player;
      const { isWon, isDraw, winner } = calculateWinner(newMarkerPositions);
      if (isWon) {
        setIsWon(true);
        setWinner(winner);
        setScore(winner);
      }
      if (isDraw) {
        setIsDraw(true);
      }

      setData();
      setMarkerPositions(newMarkerPositions);
    } else {
      return;
    }
  };

  useEffect(() => {
    let id;
    if (isWon || isDraw) {
      id = setTimeout(() => {
        resetGame();
      }, 2000);
    }

    return () => clearTimeout(id);
  }, [isWon, isDraw]);

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
      {isWon && <span>User {winner} won</span>}
      {isDraw && <span>Draw</span>}
      {<div>{rows}</div>}
    </>
  );
}

export default Grid;
