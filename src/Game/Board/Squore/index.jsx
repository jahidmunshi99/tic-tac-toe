const Squore = ({ value, onSquareClick }) => {
  return (
    <button onClick={onSquareClick} className="square cursor-pointer">
      {value}
    </button>
  );
};

export default Squore;
