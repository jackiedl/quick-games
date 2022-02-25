import React, { useEffect, useState } from 'react';
import '../../stylesheets/home/OtherGameCard.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { faTableCells } from '@fortawesome/free-solid-svg-icons';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';

function OtherGameCard(props) {
  const [bgGame] = useState(props.bgGame);

  return (
    <div className="other-game-card primary">
      <div className={"other-game-icon-container " + bgGame}>
        <div className="other-game-icon">
          {bgGame === "tictactoe" ? <FontAwesomeIcon icon={faHashtag} size="2xl" fixedWidth/> : 
          bgGame === "connectfour" ? <FontAwesomeIcon icon={faTableCells} size="2xl" fixedWidth/> : 
                                  <FontAwesomeIcon icon={faKeyboard} size="2xl" fixedWidth/> } 
          <p>{props.gameName}</p>
        </div>
      </div>
      <div className="other-game-desc-container">
        <div className="other-game-desc">
          <p>{props.gameDesc}</p>
          <button className="play-btn">Play</button>
        </div>
      </div>
    </div>
  );
}

export default OtherGameCard;