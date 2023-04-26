import React, { useState, useEffect } from "react";
import ScoreList from "./Scorelist";

function Scoreboard() {
    const [scores, setScores] = useState([]);
  
    useEffect(() => {
      // Get info from database to populate
      const example = [
        { name: "Alice", score: 100 },
        { name: "Bob", score: 90 },
        { name: "Charlie", score: 80 },
      ];
      setScores(example);
    }, []);
  
    return (
      <div className="scoreboard">
        <h2>High Scores</h2>
        <ScoreList scores={scores} />
      </div>
    );
}

export default Scoreboard;
