import { useState } from "react";
import Board from "./Board";
import History from "./History";

const Game = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMoves, setCurrentMoves] = useState(0);

  console.log(history);

  const currentSquares = history[currentMoves];

  function handlePlay(nextSquare) {
    const nextHistory = [...history.slice(0, currentMoves + 1), nextSquare];
    setHistory(nextHistory);
    setCurrentMoves(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    setCurrentMoves(nextMove);
    setXIsNext(moves % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to move # ${move}`;
    } else {
      description = `Go to game start`;
    }
    return (
      <li key={move}>
        <button
          onClick={() => jumpTo(move)}
          className="font-bold my-1 cursor-pointer"
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="h-[100vh] scroll-smooth overflow-y-hidden">
      <div className="container">
        <div>
          <div className="text-4xl text-white text-center py-5">
            Tic Tac Toe Game
          </div>
          <div className="flex justify-center gap-7">
            <div className="Board">
              <Board
                squares={currentSquares}
                xIsNext={xIsNext}
                onPlay={handlePlay}
              />
            </div>
            <div className="history">
              <History value={moves} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
