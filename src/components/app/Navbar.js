import React, { useState } from 'react';
import { Outlet } from "react-router-dom";

import '../../stylesheets/app/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

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
          <a id="header-logo-nav" href="/">
            <svg id="header-logo" width="138" height="25">
              <rect width="138" height="25" fill="white"></rect>
            </svg>
          </a>
        </div>
        {menuOpen ? <Navmenu /> : <div></div>}
    </header>
    <Outlet />
    </div>
  );
}

export default Navbar;