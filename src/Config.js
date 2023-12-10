import React from "react";
import SnakeAndLadder from "./snakes&ladder/components/Container";
import ProgressBar from "./progressBar/components/Container";
import TicTacToe from "./tictactoe/components/Container";
import Modal from "./modal/components/Container";
import Accordion from "./accordion/components/Container";

export default function NotImplemented() {
  return <div>NotImplemented</div>;
}

const GAME_MAPPER = [
  {
    renderer: <SnakeAndLadder />,
    isImplemented: true,
    label: "Snake&Ladder",
    id: "SNL",
  },
  {
    renderer: <ProgressBar />,
    isImplemented: true,
    label: "Progress Bar",
    id: "PB",
  },
  {
    renderer: <TicTacToe />,
    isImplemented: true,
    label: "Tic Tac Toe",
    id: "TTT",
  },
  {
    isImplemented: true,
    id: "MODAL",
    label: "Modal",
    renderer: <Modal />,
  },
  {
    isImplemented: true,
    id: "ACC",
    label: "Accordion",
    renderer: <Accordion />,
  },
];

export { GAME_MAPPER };
