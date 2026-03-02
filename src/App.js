// App.js - Main component that ties everything together
import './App.css'; // Import our custom styles
import Header from './Header'; // Import the Header component
import TeamList from './TeamList'; // Import the TeamList component
import data from './CollegeBasketballTeams.json'; // Import the JSON data file directly

// App function - the root component of our application
function App() {
  return (
    <div className="App">
      {/* Render the heading section at the top of the page */}
      <Header />

      {/* Pass the teams array from our JSON data to the TeamList component */}
      <TeamList teams={data.teams} />
    </div>
  );
}

export default App;
