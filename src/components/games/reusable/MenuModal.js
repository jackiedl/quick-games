import React from "react";

import "../../../stylesheets/games/reusable/MenuModal.css";

function MenuModal(props){

  return(
    <div className="menu-modal">
      <div className="menu-modal-content">
        <div className="menu-modal-header">
          <h1 className="menu-modal-title">
            {props.tieGame ? "Tie Game!" :
            props.player1 && !props.gameOver ? "Player 1 turn" : 
            !props.player1 && !props.gameOver ? "Player 2 turn" : 
            props.player1 && props.gameOver ? "Player 1 wins!" : "Player 2 wins!"}
          </h1>
        </div>
        <div className="menu-modal-body">
          <button className="play-btn" onClick={props.restartGame}>Play Again</button>
        </div>
      </div>
    </div>
  )
}

export default MenuModal;