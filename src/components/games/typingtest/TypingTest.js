import React, { useState } from 'react';

import Words from './Words';

import useKeyPress from "./utils/useKeyPress";
import { generate } from "./utils/words";

import "../../../stylesheets/games/typingtest/TypingTest.css";

const initialWords = generate();

function TypingTest() {

  const [currentKeysPressed, setCurrentKeysPressed] = useState("");
  const [currentWord, setCurrentWord] = useState(initialWords[0])
  const [wordsToMatch, setWordsToMatch] = useState(initialWords.slice(1));
  const [outgoingWords, setOutgoingWords] = useState([]);

  const displayCurrentWord = () => {
    return(
      <Words key={currentWord} 
            word={currentKeysPressed.length > currentWord.length ? currentWord+currentKeysPressed.slice(currentWord.length) : currentWord} 
            isCurrent={true}
            currentWord={currentWord}
            keyPressed={currentKeysPressed}
            keyPressedIndex={currentKeysPressed.length >= currentWord.length ? (currentWord+currentKeysPressed.slice(currentWord.length)).length - 1 : currentKeysPressed.length}/>)
  }

  const displayOutgoingWords = () => {
    return(
      outgoingWords.map((value, index) => (
        <Words key={value + index} 
              word={value} 
              isCurrent={false}
              currentWord={currentWord}
              keyPressed={currentKeysPressed}
              keyPressedIndex={null}/>
      ))
    )
  }

  const displayIncomingWords = () => {
    return(
      wordsToMatch.map((value, index) => (
        <Words key={value + index} 
              word={value} 
              isCurrent={false}
              currentWord={currentWord}
              keyPressed={currentKeysPressed}
              keyPressedIndex={null}/>
      ))
    )
  }

  useKeyPress(key => {
    let updateKeyPress = currentKeysPressed;
    let updateCurrentWord = currentWord;
    let updateWordsToMatch = wordsToMatch;
    let updateOutgoingWords = outgoingWords;

    if (key === " " && updateCurrentWord === updateKeyPress){
        updateKeyPress = "";
        updateCurrentWord = updateWordsToMatch[0];
        updateWordsToMatch = updateWordsToMatch.slice(1);
        updateOutgoingWords.push(currentWord);
    }
    else{
      if (key === "Backspace"){
        if (updateKeyPress.length > 0){
          updateKeyPress = updateKeyPress.slice(0, -1);
        }
      }else{
        if (key !== " " && updateKeyPress.length < 30){
          updateKeyPress += key;
        }
      }
    }
    setCurrentKeysPressed(updateKeyPress);
    setCurrentWord(updateCurrentWord);
    setWordsToMatch(updateWordsToMatch);
    setOutgoingWords(updateOutgoingWords);
  });

  return (
    <div className="tt-game-container">
      <div className="tt-board-container">
        <div className="tt-game-menu-container"></div>
        <div className="tt-words-container">
          {displayOutgoingWords()}
          {displayCurrentWord()}
          {displayIncomingWords()}
        </div>
        <div>
          {currentKeysPressed}
        </div>
      </div>
    </div>
  );
}

export default TypingTest;