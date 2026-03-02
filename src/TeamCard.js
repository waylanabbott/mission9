// TeamCard.js - Component #2: Displays a single team's information as a card
import React from 'react';

// TeamCard receives individual team props and renders them in a styled card
// Props: school (school name), name (mascot), city, state
function TeamCard({ school, name, city, state }) {
  return (
    <div className="team-card">
      {/* Display the school name as the card heading */}
      <h2>{school}</h2>

      {/* Display the team mascot name */}
      <p className="mascot">{name}</p>

      {/* Display the location as City, State */}
      <p className="location">{city}, {state}</p>
    </div>
  );
}

export default TeamCard;
