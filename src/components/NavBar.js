import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '6px',
  margin: '6px 6px 6px',
  background: 'lightseagreen',
  textDecoration: 'none',
  color: 'white'
}

const NavBar = () => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
      <NavLink 
        style={link} 
        to="/"
      >
        Home
      </NavLink>
      <NavLink 
        style={link} 
        to="/game"
      >
        Game
      </NavLink>
      <NavLink 
        style={link} 
        to="/scores"
      >
        Scores
      </NavLink>
    </div>
  );
}

export default NavBar;
