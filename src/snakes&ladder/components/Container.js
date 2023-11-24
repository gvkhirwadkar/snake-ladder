import { useState } from "react";
import "./Container.css";
import { SNAKE_BITES, LADDER_CLIMBS } from "../Config";
import Dice from "./Dice";
import Board from "./Board";

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getMarkerPosition(oldMarkerPosition, randomNumber) {
  const markerPosition = oldMarkerPosition + randomNumber;

  const snakeBiteEnd = SNAKE_BITES[markerPosition];
  const stairClimbEnd = LADDER_CLIMBS[markerPosition];

  if (snakeBiteEnd) {
    return snakeBiteEnd;
  }

  if (stairClimbEnd) {
    return stairClimbEnd;
  }

  return markerPosition;
}

const Container = () => {
  const [diceNumber, setDiceNumber] = useState(1);
  const [markerPosition, setMarkerPosition] = useState(1);

  const rollDice = () => {
    const randomNumber = getRandomNumber(1, 6);
    setDiceNumber(randomNumber);
    const newMarkerPosition = getMarkerPosition(markerPosition, randomNumber);

    // Your marker poisiton is actually lacking the number
    if (newMarkerPosition > 100) {
      setMarkerPosition(markerPosition);
      return;
    }
    if (newMarkerPosition === 100) {
      alert("You won !!!");
      setMarkerPosition(1);
      return;
    }
    setMarkerPosition(newMarkerPosition);
  };

  return (
    <>
      <div>
        <button onClick={rollDice}>Roll</button>
        <Dice number={diceNumber} />
      </div>
      <div className="container">
        <Board markerPosition={markerPosition} />
      </div>
    </>
  );
};

export default Container;
