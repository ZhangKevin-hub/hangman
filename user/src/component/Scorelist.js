import React from "react";
import Score from "./Score";

function ScoreList({ scores }) {
    return (
      <div className="score-list">
        {scores.map(({ name, score }) => (
          <Score key={name} name={name} score={score} />
        ))}
      </div>
    );
}

export default ScoreList;
