import React from 'react';
import { Link } from "react-router-dom";
import '../../stylesheets/home/MainGame.css';

import MainGameCard from './MainGameCard';

// This component is a container for the MainGameCard 
// We need another component for this in case we want to add
// more MainGameCards 

function MainGame() {
  return (
    <div className="main-wrapper">
      <div className="main-section">
        <Link to="/typingtest">
          <MainGameCard />
        </Link>
        
      </div>
    </div>
  );
}

export default MainGame;