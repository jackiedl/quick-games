import React from "react";

function Letters(props){

  return(
    <div className={props.indicator ? "tt-letter indicator " + props.accuracy + props.completed: "tt-letter " + props.accuracy + props.completed}>
      {props.value}
    </div>
  )
}

export default Letters;