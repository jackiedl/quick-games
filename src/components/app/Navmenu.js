import React from 'react';

import NavmenuCard from './NavmenuCard';
import '../../stylesheets/app/Navmenu.css';

function Navmenu(props) {
  return (
    <div className={`${props.menuOpen ? "header-menu open" : "header-menu"}`}>
      <div className='header-menu-game-container'>
        <NavmenuCard redirect={"/reactiontime"} gameName={"Reaction Time"} bgColor={"reactiontime"}/>
        <NavmenuCard redirect={"/tictactoe"} gameName={"Tic Tac Toe"} bgColor={"tictactoe"}/>
        <NavmenuCard redirect={"/"} gameName={"Connect Four"} bgColor={"connectfour"}/>
        <NavmenuCard redirect={"/"} gameName={"Typing Test"} bgColor={"typingtest"}/>
      </div>
    </div>
  );
}

export default Navmenu;