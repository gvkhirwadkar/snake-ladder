import { ROWS } from "../Config";
import Row from "./Row";

function Grid() {
  const rows = [];

  for (let index = 0; index < ROWS; index++) {
    rows.push(<Row key={index} />);
  }

  return <>{rows}</>;
}

export default Grid;
