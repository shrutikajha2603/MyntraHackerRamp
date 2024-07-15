// src/components/Card.js
import React from 'react';
import './card.css'; // Assuming you'll create a separate CSS file for styling

const Card = ({ title }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      {/* Placeholder for additional content or actions */}
    </div>
  );
};

export default Card;