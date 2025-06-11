const Squore = ({ value, onSquare }) => {
  return (
    <button onClick={onSquare} className="square cursor-pointer">
      {value}
    </button>
  );
};

export default Squore;
