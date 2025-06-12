const Squares = ({ value, onSquare }) => {
  return (
    <button onClick={onSquare} className="square cursor-pointer">
      {value}
    </button>
  );
};

export default Squares;
