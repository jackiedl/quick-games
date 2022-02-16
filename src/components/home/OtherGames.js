import React from 'react';
import '../../stylesheets/home/OtherGames.css';
import OtherGameCard from './OtherGameCard';

function OtherGames() {
  return (
    <div className="other-wrapper">
      <div className="other-section">
        <div className="other-card-wrapper">
          <OtherGameCard />
          <OtherGameCard />
          <OtherGameCard />
        </div>
      </div>
    </div>
  );
}

export default OtherGames;