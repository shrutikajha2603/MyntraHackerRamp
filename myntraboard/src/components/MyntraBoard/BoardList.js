import React from 'react';
import './BoardList.css';

const BoardList = ({ boards, updateBoard, deleteBoard }) => {
  return (
    <div className="board-list">
      {boards.map((board) => (
        <div key={board.id} className="board-card">
          <h2>{board.name}</h2>
          <div className="board-actions">
            <button onClick={() => updateBoard(board.id)}>Edit</button>
            <button onClick={() => deleteBoard(board.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoardList;
