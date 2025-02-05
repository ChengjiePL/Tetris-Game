// CSS
import "./Preview.css";

import React from "react";

// Hooks
import { buildBoard } from "../logic/Board";
import { transferToBoard } from "../logic/Tetrominoes";

// Components
import BoardCell from "./BoardCell";

const Preview = ({ index, tetromino }) => {
  const { shape, className } = tetromino;

  const board = buildBoard({ rows: 4, columns: 4 });

  const style = { top: `${index * 15}vw` };

  board.rows = transferToBoard({
    className,
    isOccupied: false,
    position: { row: 0, column: 0 },
    rows: board.rows,
    shape,
  });

  return (
    <div className="Preview" style={style}>
      <div className="Preview-board">
        {board.rows.map((row, rowIndex) =>
          row.map((cell, columnIndex) => (
            <BoardCell
              key={columnIndex * board.size.columns + columnIndex}
              cell={cell}
            />
          )),
        )}
      </div>
    </div>
  );
};

export default React.memo(Preview);
