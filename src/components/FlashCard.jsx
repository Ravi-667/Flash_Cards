import React from 'react';
import './FlashCard.css';

const FlashCard = ({ question, answer, isFlipped, onFlip }) => {
  return (
    <div 
      className="flash-card-container"
      onClick={onFlip}
    >
      <div 
        className={`flash-card-inner ${isFlipped ? 'flipped' : ''}`}
      >
        {/* Front */}
        <div className="flash-card-front">
          <div className="card-label">Question</div>
          <h2 className="card-content">
            {question}
          </h2>
          <div className="card-hint">Click to flip</div>
        </div>

        {/* Back */}
        <div className="flash-card-back">
          <div className="card-label answer-label">Answer</div>
          <p className="card-content">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
