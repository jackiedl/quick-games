import React, { useState } from 'react';

import useKeyPress from './utils/useKeyPress';
import { generate } from "./utils/words";

import "../../../stylesheets/games/typingtest/TypingTest.css";

function TypingTest() {

  const initialWords = generate();

  const [leftPadding, setLeftPadding] = useState(
    new Array(20).fill(" ").join(""),
  );
  const [outgoingChars, setOutgoingChars] = useState("");
  const [currentChar, setCurrentChar] = useState(initialWords.charAt(0));
  const [incomingChars, setIncomingChars] = useState(initialWords.substring(1));


 useKeyPress(key => {
   let updatedOutgoingChars = outgoingChars;
   let updatedIncomingChars = incomingChars;

   if (key === currentChar){
     if (leftPadding.length > 0){
       setLeftPadding(leftPadding.substring(1));
     }
     updatedOutgoingChars += currentChar;
     setOutgoingChars(updatedOutgoingChars);

     setCurrentChar(incomingChars.charAt(0));

     updatedIncomingChars = incomingChars.substring(1);
     if (updatedIncomingChars.split(" ").length < 10){
       updatedIncomingChars += " " + generate();
     }
     setIncomingChars(updatedIncomingChars);
   }
 });

  return (
    <div className="tt-game-container">
      <div className="tt-game-menu-container">
        
      </div>
      <p className="tt-character">
        <span className="tt-character-out">
          {(leftPadding + outgoingChars).slice(-20)}
        </span>
        <span className="tt-character-current">
          {currentChar}
        </span>
        <span >
          {incomingChars.substring(0, 30)}
        </span>
      </p>
    </div>
  );
}

export default TypingTest;