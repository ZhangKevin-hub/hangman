import React from 'react';
import './Word.css';

function Word({ word, guesses }) {
  const isWordGuessed = word.split('').every(letter => guesses.includes(letter));

  return (
    <div>
        {isWordGuessed && (
            <div className="word-animation">
            Correct!
            </div>
        )}
        <div className="word">
            
        {word.split('').map((letter, index) => (
            <div
            key={index}
            className={`letter-box ${guesses.includes(letter) ? 'guessed' : ''}`}
            >
            {guesses.includes(letter) ? letter : '_'}
            </div>
        ))}

        </div>
    </div>

  );
}

export default Word;
