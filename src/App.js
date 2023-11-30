import { useState } from "react";
import SnakeAndLadder from "./snakes&ladder/components/Container";
import ProgressBar from "./progressBar/components/Container";

import "./index.css";

const GAME_MAPPER = {
  SNL: { renderer: <SnakeAndLadder />, isImplemented: true },
  PB: { renderer: <ProgressBar />, isImplemented: true },
};

export default function App() {
  const [game, setGame] = useState("SNL");

  const handleClick = (e) => {
    setGame(e.target.value);
  };

  return (
    <>
      <div className="game-options" onClick={handleClick}>
        <button disabled={!GAME_MAPPER.SNL?.isImplemented} value="SNL">
          Snake and Ladder
        </button>
        <button disabled={!GAME_MAPPER.PB?.isImplemented} value="PB">
          ProgressBar
        </button>
        <button disabled={!GAME_MAPPER.TTT?.isImplemented} value="TTT">
          TicTaeToe
        </button>
      </div>
      {GAME_MAPPER[game]?.renderer}
    </>
  );
}
