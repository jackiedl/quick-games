import React, { useState } from 'react';

import "../../../stylesheets/games/reactiontime/ReactionTime.css";

import ReactionTimeMenu from './ReactionTimeMenu';
import ReactionTimeGame from './ReactionTimeGame';

function ReactionTime() {
  const [gameStart, setGameStart] = useState(false);
  
  const startGame = () => {
    setGameStart(true);
  }

  return (
    <div className="game rt">
      <div className="board-container rt" onClick={startGame}>
        {!gameStart ? <ReactionTimeMenu/> :
                      <ReactionTimeGame />}
      </div>
    </div>
  );
}

export default ReactionTime;
