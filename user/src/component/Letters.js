import React from "react";
import style from "./Letters.css";

function Letter({ handleGuess, guesses }) {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className="letters">
      {letters.map((letter) => (
        <button
          className="letter_btn"
          key={letter}
          onClick={() => handleGuess(letter)}
          disabled={guesses.includes(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

export default Letter;
