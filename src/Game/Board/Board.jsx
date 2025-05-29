import { useState } from "react";
import Squore from "./Squore";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(index) {
    const nextSqares = squares.slice();

    if (squares[index]) {
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
        <p className="text-center">
          This is where the game board will be displayed.
        </p>
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
