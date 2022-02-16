import React from 'react';

import '../../stylesheets/app/Navmenu.css';

function Navmenu(props) {
  return (
    <div className={`${props.menuOpen ? "header-menu open" : "header-menu"}`}>
      <h1>Modal</h1>
    </div>
  );
}

export default Navmenu;