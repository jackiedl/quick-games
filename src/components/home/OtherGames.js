import React from 'react';
import '../../stylesheets/home/OtherGames.css';
import OtherGameCard from './OtherGameCard';

function OtherGames() {
  return (
    <div className="other-wrapper">
      <div className="other-section">
        <div className="other-card-wrapper">
          <OtherGameCard bgGame={"tictactoe"} gameName={"TicTacToe"} gameDesc={"Get three in any row to win"}/>
          <OtherGameCard bgGame={"connectfour"} gameName={"Connect Four"} gameDesc={"Get four in any row to win"}/>
          <OtherGameCard bgGame={"typingtest"} gameName={"Typing Test"} gameDesc={"Test your typing speed"}/>
        </div>
      </div>
    </div>
  );
}

export default OtherGames;