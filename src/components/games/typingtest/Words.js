import React from "react";

import Letters from "./Letters";

function Words(props){
 
  const indicator = (index, currentIndex) => {
    if (props.isCurrent && index === currentIndex)
      return true;
    return false;
  }

  const accuracy = (index, value) => {
    if (props.isCurrent)
      if (index < props.currentWord.length)
        if (props.keyPressed[index] === value)
          return "correct";
        else
          if (props.keyPressedIndex <= index)
            return "";
        else
            return "incorrect";  
      else
        return "incorrect";
    return "";
  }

  return(
    <div className="tt-word">
        {props.word.split("").map((value, index) => 
          <Letters key={props.word+value+index} 
                  value={value} 
                  accuracy={accuracy(index, value)}
                  indicator={indicator(index, props.keyPressedIndex)}
                  completed={props.completed ? " finished" : ""}/>
        )}
    </div>
  )
}

export default Words;