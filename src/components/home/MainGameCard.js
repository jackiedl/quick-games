import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons';

function MainGameCard(props) {
  return (
    <div className="main-game-card primary">
      <div className="main-game-icon-container">
        <div className="main-game-icon">
          <FontAwesomeIcon icon={faBolt} size="2xl" fixedWidth/> 
          <p>{props.gameName}</p>
        </div>
      </div>
      <div className="main-game-desc-container">
        <div className="main-game-desc">
          <p>{props.gameDesc}</p>
          <button className="play-btn">Play</button>
        </div>
        
      </div>
    </div>
  );
}

export default MainGameCard;