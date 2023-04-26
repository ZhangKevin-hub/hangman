import React from 'react';
import Game from './Game';
import UserPanel from './component/Userpanel';
import Scoreboard from './component/Scoreboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Scoreboard />
      <Game />
      <UserPanel />
    </div>
  );
}

export default App;
