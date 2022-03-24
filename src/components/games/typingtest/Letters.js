import React from "react";

function Letters(props){

  return(
    <div className={props.indicator ? "tt-letter-indicator " + props.accuracy: "tt-letter " + props.accuracy}>
      {props.value}
    </div>
  )
}

export default Letters;