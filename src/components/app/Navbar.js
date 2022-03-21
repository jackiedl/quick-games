import React, { useState } from 'react';
import { Outlet } from "react-router-dom";

import '../../stylesheets/app/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faGamepad, faXmark } from '@fortawesome/free-solid-svg-icons';

import Navmenu from "./Navmenu";

function Navbar() {
  const [menuOpen, onMenuOpen] = useState(false);

  
  const onBtnClick = () => {
    if (!menuOpen){
      onMenuOpen(true)
    }else{
      onMenuOpen(false)
    }
  }

  return (
    <div>
      <header id="header">
        <div id="header-nav" className="header-nav">
          <button id="header-btn" onClick={onBtnClick}>
            {!menuOpen ? 
            <FontAwesomeIcon icon={faBars} size="2xl" fixedWidth /> : 
            <FontAwesomeIcon icon={faXmark} size="2xl" fixedWidth /> }
          </button>
          <a className="header-logo-nav" href="/">
            <FontAwesomeIcon icon={faGamepad} size="2xl" fixedWidth />
            <p>Quick Games</p>
          </a>
        </div>
        <Navmenu menuOpen={menuOpen}/> 
    </header>
    <Outlet />
    </div>
  );
}

export default Navbar;