import React from "react";
import Preview from "./Preview";

const Previews = ({ tetrominoes }) => {
  const previewTetrominoes = tetrominoes
    .slice(1 - tetrominoes.length)
    .reverse();

  return (
    <>
      {previewTetrominoes.map((tetromino, index) => (
        <Preview key={index} index={index} tetromino={tetromino} />
      ))}
    </>
  );
};

export default React.memo(Previews);
