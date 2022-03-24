import React from "react";

import Letters from "./Letters";

function Words(props){
 
  const indicator = (word, index, currentIndex) => {
    if (word === props.word && index === currentIndex)
      return true;
    return false;
  }

  return(
    <div className="tt-word">
        {props.word.split("").map((value, index) => 
          <Letters key={props.word+value+index} 
                  value={value} 
                  accuracy={props.currentWord === props.word ? 
                            props.keyPressedIndex > index ? 
                            props.keyPressed[index] === value ? "correct" : "incorrect" :
                            props.keyPressed[index] === value ? "correct" : ""  : ""}
                  indicator={indicator(props.currentWord, index, props.keyPressedIndex)}/>
        )}
    </div>
  )
}

export default Words;