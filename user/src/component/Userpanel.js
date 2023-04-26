import React from 'react';
import style from './Userpanel.css';
function UserPanel() {
  const handleLogoutClick = () => {
    // handle logout click event
  };

  const handleResetClick = () => {
    // handle reset game click event
  };

  const handleNewClick = () => {
    // handle new game click event
  };

  return (
    <div className='panel'>
      <h2>Name</h2>
      <div className='panel_btns'>
        <button onClick={handleLogoutClick}>Logout</button>
        <button onClick={handleResetClick}>Reset Game</button>
        <button onClick={handleNewClick}>Create New Game</button>
      </div>

    </div>
  );
}

export default UserPanel;
