import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FlashCard from './components/FlashCard';
import ProgressBar from './components/ProgressBar';
import { questions } from './data/questions';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(prev => prev + 1), 200); // Small delay for smooth feel
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(prev => prev - 1), 200);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <header className="app-header">
          <h1>Flash Mastery</h1>
          <p>Master React concepts one card at a time</p>
        </header>

        <main>
          <ProgressBar current={currentIndex + 1} total={totalQuestions} />
          
          <FlashCard 
            question={currentQuestion.question}
            answer={currentQuestion.answer}
            isFlipped={isFlipped}
            onFlip={handleFlip}
          />

          <div className="controls">
            <button 
              className="nav-button" 
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <ChevronLeft size={24} />
              <span>Prev</span>
            </button>
            
            <button 
              className="nav-button" 
              onClick={handleNext}
              disabled={currentIndex === totalQuestions - 1}
            >
              <span>Next</span>
              <ChevronRight size={24} />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
