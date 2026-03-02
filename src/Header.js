// Header.js - Component #1: Heading section that introduces the user to the site
import React from 'react';

// Header displays the page title and a short description
function Header() {
  return (
    <header className="header">
      {/* Main title for the page */}
      <h1>NCAA College Basketball Teams</h1>

      {/* Brief description telling the user what this site shows */}
      <p>
        Welcome! Browse through all the college basketball teams competing in
        March Madness. Each card below shows the school name, mascot, and
        location.
      </p>
    </header>
  );
}

export default Header;
