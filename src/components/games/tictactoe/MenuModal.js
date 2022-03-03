import React from "react";

function MenuModal(props){

  return(
    <div className="ttt-modal">
      <div className="ttt-modal-content">
        <div className="ttt-modal-header">
          <h1 className="ttt-modal-title">
            {props.tieGame ? "Tie Game!" :
            props.playerX && !props.gameOver ? "Player 1 turn" : 
            !props.playerX && !props.gameOver ? "Player 2 turn" : 
            props.playerX && props.gameOver ? "Player 1 wins!" : "Player 2 wins!"}
          </h1>
        </div>
        <div className="ttt-modal-body">
          <button className="play-btn" onClick={props.restartGame}>Play Again</button>
        </div>
      </div>
    </div>
  )
}

export default MenuModal;