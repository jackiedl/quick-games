import React, { useState } from 'react';

import useKeyPress from "./utils/useKeyPress";
import { generate } from "./utils/words";

import "../../../stylesheets/games/typingtest/TypingTest.css";

const initialWords = generate();

function TypingTest() {

  const [currentKeysPressed, setCurrentKeysPressed] = useState("");
  const [currentWord, setCurrentWord] = useState(initialWords[0])
  const [wordsToMatch, setWordsToMatch] = useState(initialWords);
  const [outgoingWords, setOutgoingWords] = useState([]);

  useKeyPress(key => {
    let updateKeyPress = currentKeysPressed;
    let updateCurrentWord = currentWord;
    let updateWordsToMatch = wordsToMatch;
    let updateOutgoingWords = outgoingWords;

    if (key === " " && updateCurrentWord === updateKeyPress){
        updateKeyPress = "";
        updateCurrentWord = updateWordsToMatch[1];
        updateWordsToMatch = updateWordsToMatch.slice(1);
        updateOutgoingWords.push(currentWord);
    }
    else{
      if (key === "Backspace"){
        updateKeyPress = updateKeyPress.slice(0, -1);
      }else{
        updateKeyPress += key;
      }
    }
    setCurrentKeysPressed(updateKeyPress);
    setCurrentWord(updateCurrentWord);
    setWordsToMatch(updateWordsToMatch);
    setOutgoingWords(updateOutgoingWords);
  });

  return (
    <div className="tt-game-container">
      <div className="tt-game-menu-container"></div>
      <div>
        {initialWords.join(" ")}
      </div>
      <div>
        {currentKeysPressed}
      </div>
    </div>
  );
}

export default TypingTest;