// TeamList.js - Component #3: Renders the full list of team cards
import React from 'react';
import TeamCard from './TeamCard'; // Import the TeamCard component

// TeamList takes in a "teams" array as a prop and maps over it
// to create a TeamCard for each team in the list
function TeamList({ teams }) {
  return (
    <div className="team-list">
      {/* Loop through each team and render a TeamCard */}
      {/* "key" uses team.tid so React can efficiently track each item */}
      {teams.map((team) => (
        <TeamCard
          key={team.tid}
          school={team.school}
          name={team.name}
          city={team.city}
          state={team.state}
        />
      ))}
    </div>
  );
}

export default TeamList;
