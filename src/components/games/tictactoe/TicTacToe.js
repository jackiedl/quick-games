import React, { useState } from "react";
import { CSSTransition } from 'react-transition-group';

import Square from "./Square.js"
import MenuModal from "./MenuModal.js";

import "../../../stylesheets/games/tictactoe/TicTacToe.css";

function TicTacToe(){
  const nodeRef = React.useRef(null)
  const [playerX, setPlayerX] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [gameOver, setGameOver] = useState(false);
  const [tieGame, setTieGame] = useState(false);
  const [reset, setReset] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const squareOnClick = (i) => {
    if (reset){
      setReset(false);
    }
    const boardOnClick = board.slice();
    boardOnClick[i] = playerX ? "X" : "O";
    if (calculateWinner(boardOnClick)){
      setGameOver(true);
      setShowMessage(true);
      return;
    }
    if (checkTie(boardOnClick)){
      setGameOver(true);
      setTieGame(true);
      setShowMessage(true);
      return;
    }
  
    setPlayerX(playerX ? false : true);
    setBoard(boardOnClick);
  }

  const restartGame = () => {
    setReset(true);
    setGameOver(false);
    setTieGame(false);
    setBoard(Array(9).fill(null));
    setPlayerX(true);
    setShowMessage(false);
  }

  const renderSquare = (i) =>{
    return <Square value={i} 
                  playerX={playerX}
                  gameOver={gameOver}
                  reset={reset}
                  squareOnClick={squareOnClick}/>;
  }

  return(
    <div className="ttt-game-container">
      <div className="ttt-board-container">
        <div className="ttt-status">
          <p>{tieGame ? "Tie Game!" :
              playerX && !gameOver ? "Player 1 turn" : 
              !playerX && !gameOver ? "Player 2 turn" : 
              playerX && gameOver ? "Player 1 wins!" : "Player 2 wins!"}
          </p>
        </div>
        <div className="ttt-board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="ttt-board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="ttt-board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <CSSTransition in={ showMessage } 
                      nodeRef={nodeRef}
                      timeout={ 200 } 
                      classNames="my-node"
                      unmountOnExit
                      onExited={() => setShowMessage(false)}>
          <MenuModal restartGame={restartGame} 
                    tieGame={tieGame}
                    playerX={playerX}
                    gameOver={gameOver}/>
        </CSSTransition>
      </div>
    </div>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function checkTie(squares){
  for (let i = 0; i < 9; i++){
    if (!squares[i]){
      return false;
    }
  }
  return true;
}

export default TicTacToe;