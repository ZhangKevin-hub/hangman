import React from "react";
function Score({ name, score }) {
    return (
      <div className="score">
        <div className="name">{name}</div>
        <div className="score-value">{score}</div>
      </div>
    );
  }
  export default Score;