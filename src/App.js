import React from 'react';
import GameContainer from './containers/GameContainer'
import ScoresContainer from './containers/ScoresContainer'
import HomePage from './components/HomePage'
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/game" render={()=> <GameContainer />} />
        <Route exact path="/scores" render={() => <ScoresContainer />} />
        <Route exact path="/" render={() => <HomePage />} />     
      </div>
    </Router>
  );
}

export default App;
