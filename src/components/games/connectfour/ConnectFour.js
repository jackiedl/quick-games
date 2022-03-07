import React, { useState } from "react";
import { CSSTransition } from 'react-transition-group';

import Column from "./Column.js"
import MenuModal from "../reusable/MenuModal";

import "../../../stylesheets/games/connectfour/ConnectFour.css";

function ConnectFour(){
  const nodeRef = React.useRef(null);
  const [playerRed, setPlayerRed] = useState(true);
  const [board, setBoard] = useState(Array(7).fill(Array(6).fill(null)));
  const [gameOver, setGameOver] = useState(false);
  const [tieGame, setTieGame] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  
  const columnClick = (i) => {
    if (gameOver) {return;}
    const fullBoard = board.slice();
    const boardOnClick = board[i].slice();

    const row = getEmptyRow(boardOnClick);
    if (row === -1){return;}
  
    boardOnClick[row] = playerRed ? "R" : "B";
    fullBoard[i] = boardOnClick;
    
    if (isWinner(fullBoard,i,row)){
      setGameOver(true);
      setShowMessage(true);
    }else{
      setPlayerRed(playerRed ? false : true);
    }
    if (checkTie(fullBoard)){
      setTieGame(true);
      setGameOver(true);
      setShowMessage(true);
    }
    setBoard(fullBoard);
  }

  const resetGame = () => {
    setBoard(Array(7).fill(Array(6).fill(null)));
    setGameOver(false);
    setPlayerRed(true);
    setTieGame(false);
    setShowMessage(false);
  }

  const renderColumn = (index) => {
    return (
      <Column index={index} board={board} onClick={columnClick} />
    )
  }

  return (
    <div className="cf-game-container">
      <div className="cf-game-board-container">
        <div className="cf-game-status">
          <p>{tieGame ? "Tie Game!" :
              playerRed && !gameOver ? "Player 1 turn" : 
              !playerRed && !gameOver ? "Player 2 turn" : 
              playerRed && gameOver ? "Player 1 wins!" : "Player 2 wins!"}
          </p>
        </div>
        <div className="cf-game-board">
          {renderColumn(0)}
          {renderColumn(1)}
          {renderColumn(2)}
          {renderColumn(3)}
          {renderColumn(4)}
          {renderColumn(5)}
          {renderColumn(6)}
        </div>
        <CSSTransition in={ showMessage } 
                      nodeRef={nodeRef}
                      timeout={ 200 } 
                      classNames="my-node"
                      unmountOnExit
                      onExited={() => setShowMessage(false)}>
          <MenuModal restartGame={resetGame} 
                    tieGame={tieGame}
                    player1={playerRed}
                    gameOver={gameOver}/>
        </CSSTransition>
      </div>
    </div>
  )
}

// Connect four game logic

function getEmptyRow(column){
  for (let row = 0; row < column.length; row++){
    if (column[row] === null){
      return row;
    }
  }
  return -1;
}

function isWinner(board){
  for (let c = 0; c < board.length; c++){
    for (let r = 0; r < board[0].length; r++){
      if (_winningSequence(board, c, r)){
        return true;
      }
    }
  }
  return false;
}

function checkTie(board){
  for (let c = 0; c < board.length; c++){
    for (let r = 0; r < board[0].length; r++){
      if (!board[c][r]){
        return false;
      }
    }
  }
  return true;
}

function _winningSequence(board, col, row){
  return (
    _fourConseq(board, col, row, 0, 1) ||
    _fourConseq(board, col, row, 1, 1) || 
    _fourConseq(board, col, row, 1, 0) ||
    _fourConseq(board, col, row, 1, -1) ||
    _fourConseq(board, col, row, 0, -1) ||
    _fourConseq(board, col, row, -1, -1) ||
    _fourConseq(board, col, row, -1, 0) ||
    _fourConseq(board, col, row, -1,1))
}

function _fourConseq(board, col, row, coldelta, rowdelta){
  const startCell = board[col][row];
  if (startCell === null){
    return false;
  }else{
    for (let i = 0; i < 4; i++){
      if (!_validColumnNumber(col+coldelta*i) || 
          !_validRowNumber(row+rowdelta*i) || 
          board[col+(coldelta*i)][row+(rowdelta*i)] !== startCell)
      {
        return false;
      }
    }
    return true;
  }
}

function _validColumnNumber(column){
  return (0 <= column && column < 7);
}
function _validRowNumber(row){
  return (0 <= row && row < 6);
}

export default ConnectFour;