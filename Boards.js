import React, { useState, useEffect } from 'react';
import BoardList from './BoardList';
import BoardForm from './BoardForm';
import './BoardList.css';

const Boards = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const savedBoards = JSON.parse(localStorage.getItem('boards')) || [];
    setBoards(savedBoards);
  }, []);

  useEffect(() => {
    localStorage.setItem('boards', JSON.stringify(boards));
  }, [boards]);

  const addBoard = (newBoard) => {
    setBoards([...boards, newBoard]);
  };

  const updateBoard = (id) => {
    const updatedName = prompt('Enter new board name:');
    if (updatedName) {
      setBoards(boards.map(board => board.id === id ? { ...board, name: updatedName } : board));
    }
  };

  const deleteBoard = (id) => {
    setBoards(boards.filter(board => board.id !== id));
  };

  return (
    <div className="board-list-container">
      <h1>Explore Boards</h1>
      <div className="board-form">
        <BoardForm addBoard={addBoard} />
      </div>
      <BoardList boards={boards} updateBoard={updateBoard} deleteBoard={deleteBoard} />
    </div>
  );
};

export default Boards;
