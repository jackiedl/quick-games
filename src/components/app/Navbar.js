import React from 'react';
import { Outlet } from "react-router-dom";

import '../../stylesheets/app/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div>
      <header id="header">
      <div id="header-nav">
        <button id="header-btn">
          <FontAwesomeIcon icon={faBars} size="2xl" />
        </button>
        <a id="header-logo-nav" href="/">
          <svg id="header-logo" width="138" height="25">
            <rect width="138" height="25" fill="black"></rect>
          </svg>
        </a>
      </div>
      <div id="header-menu"></div>
    </header>
    <Outlet />
    </div>
  );
}

export default Navbar;