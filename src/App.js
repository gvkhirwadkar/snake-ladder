import { useState } from "react";
import styles from "./App.module.css";
import "./index.css";
import { GAME_MAPPER } from "./Config";

export default function App() {
  const [game, setGame] = useState("SNL");

  const handleClick = (e) => {
    setGame(e.target.value);
  };

  const displayGame = () => {
    return GAME_MAPPER.find((v, i) => v.id === game).renderer;
  };

  return (
    <div className={styles.App}>
      <div className="game-options" onClick={handleClick}>
        {GAME_MAPPER.map((v) => {
          return (
            <button key={v.id} disabled={!v.isImplemented} value={v.id}>
              {v.label}
            </button>
          );
        })}
      </div>
      <hr />
      {displayGame()}
    </div>
  );
}
