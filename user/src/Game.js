import React, { useState } from "react";
import Header from "./component/Header";
import Hangman from "./component/Hangman";
import Word from "./component/Word";
import Letter from "./component/Letters";
import "./Game.css";

const Game = () => {
  const [word, setWord] = useState("apple"); // Set the initial word
  const [guesses, setGuesses] = useState([]); // Set the initial guesses

  const handleGuess = (letter) => {
    if (guesses.includes(letter)) {
      alert("This letter is already guessed!");
      return;
    }

    if (word.includes(letter)) {
      setGuesses([...guesses, letter]);
      console.log(`${letter} is a correct guess!`);
    } else {
      console.log(`${letter} is a wrong guess!`);
    }
  };

  return (
    <div className="container">
      <Header />
      <Hangman wrongLetters={guesses} maxWrong={6} />
      <Word word={word} guesses={guesses} className = 'word'/>
      <Letter handleGuess={handleGuess} guesses={guesses} />
    </div>
  );
};

export default Game;
