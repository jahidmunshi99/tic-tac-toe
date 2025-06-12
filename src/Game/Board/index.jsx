import Squares from "./Squore";

const Board = ({ squares, xIsNext, onPlay }) => {
  let result;

  const winner = calculateWinner(squares);

  if (winner) {
    result = `Game Winner is : ${winner}`;
  } else {
    result = `Next Player is ${xIsNext ? "X" : "O"}`;
  }

  function handleClick(i) {
    const newSuqres = squares.slice();
    if (newSuqres[i] || winner) return;
    newSuqres[i] = xIsNext ? "X" : "O";
    onPlay(newSuqres);
    console.log(newSuqres);
  }
  return (
    <div>
      <div className="text-white text-xl my-5">{result}</div>
      <div className="flex">
        <Squares value={squares[0]} onSquare={() => handleClick(0)} />
        <Squares value={squares[1]} onSquare={() => handleClick(1)} />
        <Squares value={squares[2]} onSquare={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Squares value={squares[3]} onSquare={() => handleClick(3)} />
        <Squares value={squares[4]} onSquare={() => handleClick(4)} />
        <Squares value={squares[5]} onSquare={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Squares value={squares[6]} onSquare={() => handleClick(6)} />
        <Squares value={squares[7]} onSquare={() => handleClick(7)} />
        <Squares value={squares[8]} onSquare={() => handleClick(8)} />
      </div>
    </div>
  );
};

export default Board;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
