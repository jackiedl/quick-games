import React from 'react';

import "../../../stylesheets/games/typingtest/TypingTestBoard.css";

function TypingTestBoard(props) {

  return (
    <div className="tt-board">
      <p className="tt-text">
        {props.text.split(" ").map((word, w_idx) => {
          let highlight = false;
          let currentWord = false;

          // this means that the word is completed, so turn it green
          if (props.completedWords.length > w_idx) {
            highlight = true;
          }

          if (props.completedWords.length === w_idx) {
            currentWord = true;
          }

          return (
            <span className={`tt-word ${highlight && "green"} ${currentWord && "underline"}`} key={w_idx} >
              {word.split("").map((letter, l_idx) => {
                const isCurrentWord = w_idx === props.completedWords.length;
                const isWronglyTyped = letter !== props.inputValue[l_idx];
                const shouldBeHighlighted = l_idx < props.inputValue.length;
                // incorrect letters turn red, correct letters turn green
                return (
                  <span className={`tt-letter ${isCurrentWord && shouldBeHighlighted ? isWronglyTyped ? "red": "green" : "" }`} key={l_idx}>
                    {letter}
                  </span>
                );
              })}
            </span>);
          })}
        </p>
        <input 
          className="tt-input"
          type="text"
          onChange={props.handleChange}
          value={props.inputValue}
          // autoFocus={started ? 'true' : 'false'}
          autoFocus={true}
        />
    </div>
  );
}

export default TypingTestBoard;