import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './BoardForm.css';

const BoardForm = ({ addBoard }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') return;
    addBoard({ id: uuidv4(), name, products: [] });
    setName('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New board name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Board</button>
    </form>
  );
};

export default BoardForm;
