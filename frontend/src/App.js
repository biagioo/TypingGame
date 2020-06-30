import React from 'react';
import GameContainer from './containers/GameContainer'
import './App.css';
import NavBar from './components/NavBar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/game" render={()=> <GameContainer />} />
        <Route exact path="/" render={() => <div>Home</div>} />     
      </div>
    </Router>
  );
}

export default App;
