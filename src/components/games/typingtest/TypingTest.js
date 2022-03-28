import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import MenuModal from "../reusable/MenuModal";
import Words from './Words';
import useKeyPress from "./utils/useKeyPress";
import { generate } from "./utils/words";

import "../../../stylesheets/games/typingtest/TypingTest.css";

const initialWords =  new Array(30).fill().map(_ => generate())

function TypingTest() {
  const nodeRef = React.useRef(null);
  const [currentKeysPressed, setCurrentKeysPressed] = useState("");
  const [currentWord, setCurrentWord] = useState(initialWords[0])
  const [wordsToMatch, setWordsToMatch] = useState(initialWords.slice(1));
  const [outgoingWords, setOutgoingWords] = useState([]);
  const [timer, setTimer] = useState(60);
  const [timeElapse, setTimeElapse] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [gameStart, setGameStart] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (timer === 0){
      setGameStart(false);
      setShowMessage(true);
    }
    if (gameStart){
      const interval = setInterval(() => {
        setTimer(timer - 1);
        setTimeElapse(timeElapse + 1);
      }, 1000);
      return () => {clearInterval(interval)}
    }
    return;
  }, [ gameStart, timer, timeElapse ])

  const displayCurrentWord = () => {
    return(
      <Words key={currentWord} 
            word={currentKeysPressed.length > currentWord.length ? currentWord+currentKeysPressed.slice(currentWord.length) : currentWord} 
            isCurrent={true}
            currentWord={currentWord}
            keyPressed={currentKeysPressed}
            keyPressedIndex={currentKeysPressed.length}
            completed={false}/>)
  }

  const displayOutgoingWords = () => {
    return(
      outgoingWords.map((value, index) => (
        <Words key={value + index} 
              word={value} 
              isCurrent={false}
              currentWord={currentWord}
              keyPressed={currentKeysPressed}
              keyPressedIndex={null}
              completed={true}/>
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
              keyPressedIndex={null}
              completed={false}/>
      ))
    )
  }

  const resetGame = () => {
    let newWords =  new Array(30).fill().map(_ => generate());
    let updateCurrentWord = newWords[0];
    let updateWordsToMatch = newWords.slice(1);
    let updateOutgoingWords = [];

    setCharacterCount(0);
    setTimeElapse(0);
    setTimer(60);
    setCurrentKeysPressed("");
    setCurrentWord(updateCurrentWord);
    setWordsToMatch(updateWordsToMatch);
    setOutgoingWords(updateOutgoingWords);
    setShowMessage(false);
  }

  useKeyPress(key => {
    let updateKeyPress = currentKeysPressed;
    let updateCurrentWord = currentWord;
    let updateWordsToMatch = wordsToMatch;
    let updateOutgoingWords = outgoingWords;

    if (!gameStart && key === updateCurrentWord[0]){
      setGameStart(true);
    }

    if (key === " " && updateCurrentWord === updateKeyPress){
      setCharacterCount(characterCount + currentWord.length);
      updateKeyPress = "";
      updateCurrentWord = updateWordsToMatch[0];
      if (updateOutgoingWords.length < 20){
        updateWordsToMatch = updateWordsToMatch.slice(1);
        updateOutgoingWords.push(currentWord);
      }else{
        updateWordsToMatch = updateWordsToMatch.slice(1);
        updateWordsToMatch = updateWordsToMatch.concat( new Array(10).fill().map(_ => generate()))
        updateOutgoingWords = updateOutgoingWords.slice(10);
        updateOutgoingWords.push(currentWord);
      }
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
        <div className="tt-game-menu-container">
          <div className="tt-timer"> Time Left: {timer} sec</div>
          <div> WPM: {timeElapse !== 0 ? Math.round((((characterCount / 5) / timeElapse) * 60)) : 0} </div>
        </div>
        <div className="tt-words-container">
          {displayOutgoingWords()}
          {displayCurrentWord()}
          {displayIncomingWords()}
        </div>
      </div>
      <CSSTransition in={ showMessage } 
                      nodeRef={nodeRef}
                      timeout={ 200 } 
                      classNames="my-node"
                      unmountOnExit
                      onExited={() => setShowMessage(false)}>
        <MenuModal restartGame={resetGame} 
                    wordspermin={Math.round((((characterCount / 5) / timeElapse) * 60))}
                    game={"typingtest"}/>
      </CSSTransition>
    </div>
  );
}

export default TypingTest;