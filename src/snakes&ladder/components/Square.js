import "./Square.css";

const Square = ({ children, squareClass }) => {
  return (
    <div className={squareClass}>
      <span className="marker">{children}</span>
    </div>
  );
};

export default Square;
