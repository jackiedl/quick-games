import React from 'react';
import { Link } from "react-router-dom";

import '../../stylesheets/home/OtherGames.css';
import OtherGameCard from './OtherGameCard';

function OtherGames() {
  return (
    <div className="other-wrapper">
      <div className="other-section">
        <div className="other-card-wrapper">
          <Link to="/tictactoe">
            <OtherGameCard bgGame={"tictactoe"} gameName={"TicTacToe"} gameDesc={"Get three in a row to win"}/>
          </Link>
          <OtherGameCard bgGame={"connectfour"} gameName={"Connect Four"} gameDesc={"Get four in a row to win"}/>
          <OtherGameCard bgGame={"typingtest"} gameName={"Typing Test (Coming Soon)"} gameDesc={"Test your typing speed"}/>
        </div>
      </div>
    </div>
  );
}

export default OtherGames;