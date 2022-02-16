import React from 'react';
import '../../stylesheets/home/MainGame.css';

import MainGameCard from './MainGameCard';

// This component is a container for the MainGameCard that will 
// We need another component for this purpose in case we want to
// more MainGameCards 

function MainGame() {
  return (
    <div className="main-wrapper">
      <div className="main-section">
        <MainGameCard />
      </div>
    </div>
  );
}

export default MainGame;