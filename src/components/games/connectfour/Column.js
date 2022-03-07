import React from "react";

import Box from "./Box.js";

function Column(props){
  const flipColumn = (arr) => {
    return arr.map((e, i, a) => a[(a.length-1) -i]);
  }

  const handleClick = () => {
    props.onClick(props.index);
  }
  
  return (
    <div className={"cf-column" + props.index} onClick={handleClick}>
      {flipColumn(props.board[props.index]).map((value, i) => 
        <Box key={props.index + i} value={value} />)}
    </div>
  )
}

export default Column;