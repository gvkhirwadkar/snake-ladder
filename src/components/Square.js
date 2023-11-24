import "./Square.css";

const Square = ({ squareLabel, squareClass }) => {
  return (
    <div className={squareClass}>
      <span className="marker">{squareLabel}</span>
    </div>
  );
};

export default Square;
