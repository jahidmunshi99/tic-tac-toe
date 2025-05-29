import Board from "./Board/Board";
import History from "./History/History";

const Game = () => {
  return (
    <div className="flex justify-center gap-4 p-4 py-15">
      <Board />
      <History />
    </div>
  );
};

export default Game;
