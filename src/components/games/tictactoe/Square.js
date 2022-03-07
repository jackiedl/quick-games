import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faO } from '@fortawesome/free-solid-svg-icons';

function Square(props){ 

  const handleClick = () => {
    props.squareOnClick(props.index);
  }

  return(
    <button className="ttt-square" onClick={handleClick}>
       {props.board[props.index] === "X" ? <FontAwesomeIcon className="red-circle" icon={faX} size="2xl" /> :
      props.board[props.index] === "O" ? <FontAwesomeIcon className="black-circle" icon={faO} size="2xl"/> : ""}
    </button>
  )
}

export default Square;