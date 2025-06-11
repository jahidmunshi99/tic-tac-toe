import Squore from "./Squore";

const Board = ({ squares, xIsNext, onMove, onReset }) => {
  let status;
  const winner = calculateWinner(squares);
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  function handleClick(i) {
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";

    if (squares[i] || winner) {
      return; // Ignore click if square is already filled or game is over
    }
    onMove(newSquares);
  }

  return (
    <div className="board">
      <div className="container">
        <h1 className="text-center text-3xl font-bold">Tic Tac Toe</h1>
        <div>{status}</div>
        <div className="game-board flex flex-col items-center justify-center mt-10">
          {/* Game board will be rendered here */}
          <div className="flex">
            <Squore value={squares[0]} onSquare={() => handleClick(0)} />
            <Squore value={squares[1]} onSquare={() => handleClick(1)} />
            <Squore value={squares[2]} onSquare={() => handleClick(2)} />
          </div>
          <div className="flex">
            <Squore value={squares[3]} onSquare={() => handleClick(3)} />
            <Squore value={squares[4]} onSquare={() => handleClick(4)} />
            <Squore value={squares[5]} onSquare={() => handleClick(5)} />
          </div>
          <div className="flex">
            <Squore value={squares[6]} onSquare={() => handleClick(6)} />
            <Squore value={squares[7]} onSquare={() => handleClick(7)} />
            <Squore value={squares[8]} onSquare={() => handleClick(8)} />
          </div>

          <div className="flex">
            <button onClick={onReset} className="square cursor-pointer">
              Reset
            </button>
          </div>
        </div>
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
