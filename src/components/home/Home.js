import React from 'react';
import '../../stylesheets/home/Home.css';

import MainGame from './MainGame';
import OtherGames from "./OtherGames";

function Home() {
  return (
    <div className="home-wrapper">
      <MainGame />
      <OtherGames />
    </div>
  );
}

export default Home;