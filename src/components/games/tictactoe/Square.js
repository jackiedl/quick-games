import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faO } from '@fortawesome/free-solid-svg-icons';

function Square(props){ 
  const [playerIcon, setPlayerIcon] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const reset = () => {
    setPlayerIcon("");
  }

  const handleClick = () => {
    if (playerIcon === "" && !gameOver){
      props.squareOnClick(props.value);
      if (props.playerX){
        setPlayerIcon("X");
      }else{
        setPlayerIcon("O");
      }
    }
  }

  if (props.gameOver && !gameOver){
    setGameOver(true);
  }

  if (props.reset && gameOver){
    reset();
    setGameOver(false);
  }

  return(
    <button className="ttt-square" onClick={handleClick}>
      {playerIcon === "X" ?  <FontAwesomeIcon icon={faX} size="2xl" fixedWidth/> :
       playerIcon === "O" ?  <FontAwesomeIcon icon={faO} size="2xl" fixedWidth/> :                     
      ""
      }
    </button>
  )
}

export default Square;