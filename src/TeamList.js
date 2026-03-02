import React from 'react';
import TeamCard from './TeamCard';

function TeamList({ teams }) {
  return (
    <div className="team-list">
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
