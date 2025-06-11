import { useState } from "react";
import Board from "./Board/Board";
import History from "./History/History";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    setXIsNext(!xIsNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpToMove(move) {
    setCurrentMove(move);
    setXIsNext(move % 2 === 0);
  }

  function resetHanlder() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setXIsNext(true);
  }

  const moves = history.map((squares, move) => {
    let discription;
    if (move > 0) {
      discription = `Go to the move # ${move}`;
    } else {
      discription = `Go to Start the Game`;
    }
    return (
      <li key={move}>
        <button
          onClick={() => {
            jumpToMove(move);
          }}
          className="cursor-pointer text-white my-1"
        >
          {discription}
        </button>
      </li>
    );
  });

  return (
    <div className="flex justify-center gap-4 p-4 py-15">
      <Board
        squares={currentSquares}
        xIsNext={xIsNext}
        onMove={handlePlay}
        onReset={resetHanlder}
      />
      <History value={moves} />
    </div>
  );
};

export default Game;
