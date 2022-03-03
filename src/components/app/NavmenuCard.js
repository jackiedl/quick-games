import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faTableCells } from '@fortawesome/free-solid-svg-icons';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';

function NavmenuCard(props) {
  const [bgColor] = useState(props.bgColor);

  return (
    <Link to={props.redirect} className="nav-link">
      <div className={"nav-menu-container " + bgColor}>
        <div className="nav-menu-icon">
        {props.gameName === "Reaction Time" ? <FontAwesomeIcon icon={faBolt} size="2xl" fixedWidth/> : 
          props.gameName === "Tic Tac Toe" ? <FontAwesomeIcon icon={faHashtag} size="2xl" fixedWidth/> :
          props.gameName === "Connect Four" ? <FontAwesomeIcon icon={faTableCells} size="2xl" fixedWidth/> : 
          props.gameName === "Typing Test" ? <FontAwesomeIcon icon={faKeyboard} size="2xl" fixedWidth/> : ""}
        </div>
        <div className="nav-menu-game">
          <p>{props.gameName}</p>
        </div>
      </div>
    </Link>

  );
}

export default NavmenuCard;