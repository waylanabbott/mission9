import React from 'react';

function TeamCard({ school, name, city, state }) {
  return (
    <div className="team-card">
      <h2>{school}</h2>
      <p className="mascot">{name}</p>
      <p className="location">{city}, {state}</p>
    </div>
  );
}

export default TeamCard;
