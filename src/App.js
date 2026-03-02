import './App.css';
import Header from './Header';
import TeamList from './TeamList';
import data from './CollegeBasketballTeams.json';

function App() {
  return (
    <div className="App">
      <Header />
      <TeamList teams={data.teams} />
    </div>
  );
}

export default App;
