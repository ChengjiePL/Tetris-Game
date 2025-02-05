import "./Board.css";
import BoardCell from "../components/BoardCell";

const Board = ({ board }) => {
  console.log("board", board);

  const boardStyles = {
    gridTemplateColumns: `repeat(${board.size.columns}, 1fr)`,
    gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
  };

  return (
    <div className="Board" style={boardStyles}>
      {board.rows.map((row, rowIndex) =>
        row.map((cell, columnIndex) => {
          <BoardCell
            key={columnIndex * board.size.columns + columnIndex}
            cell={cell}
          />;
        }),
      )}
    </div>
  );
};

export default Board;
