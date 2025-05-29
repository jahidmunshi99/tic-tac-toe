import { useState } from "react";
import Squore from "./Squore";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  {
    /** Diclare The winner */
  }

  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = `Winner : ${winner}`;
  } else {
    status = `Next Player: ${xIsNext ? "X" : "O"}`;
  }

  function handleClick(index) {
    const nextSqares = squares.slice();

    if (squares[index] || winner) {
      return;
    }

    if (xIsNext) {
      nextSqares[index] = "X";
    } else {
      nextSqares[index] = "O";
    }
    setSquares(nextSqares);
    setXIsNext(!xIsNext);
    console.log(nextSqares);
  }

  return (
    <div className="board">
      <div className="container">
        <h1 className="text-center text-3xl font-bold">Tic Tac Toe</h1>
        {status}
        <div className="game-board flex flex-col items-center justify-center mt-10">
          {/* Game board will be rendered here */}
          <div className="flex">
            <Squore value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Squore value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Squore value={squares[2]} onSquareClick={() => handleClick(2)} />
          </div>
          <div className="flex">
            <Squore value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Squore value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Squore value={squares[5]} onSquareClick={() => handleClick(5)} />
          </div>
          <div className="flex">
            <Squore value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Squore value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Squore value={squares[8]} onSquareClick={() => handleClick(8)} />
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
