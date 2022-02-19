import React, { useState } from 'react';
import { Link } from "react-router-dom";

import '../../stylesheets/home/MainGame.css';

import MainGameCard from './MainGameCard';

// This component is a container for the MainGameCard 
// We need another component for this in case we want to add
// more MainGameCards 

function MainGame() {
  const [gameName] = useState("Reaction Time")
  const [gameDesc] = useState("Test your reaction time")
  return (
    <div className="main-wrapper">
      <div className="main-section">
        <Link to="/reactiontime">
          <MainGameCard gameName={gameName} gameDesc={gameDesc}/>
        </Link>
        
      </div>
    </div>
  );
}

export default MainGame;