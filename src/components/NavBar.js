import React from 'react';
import {NavLink} from 'react-router-dom';
import {Spring} from 'react-spring/renderprops';

const link = {
  width: '100px',
  padding: '6px',
  margin: '6px 6px 6px',
  background: 'lightseagreen',
  textDecoration: 'none',
  color: 'white',
};

const NavBar = () => {
  return (
    <Spring from={{marginTop: -500}} to={{marginTop: 0}} config={{delay: 1000}}>
      {(props) => (
        <div style={props}>
          <div
            style={{
              borderBottom: '2px solid black',
              paddingBottom: '10px',
              marginBottom: '12px',
            }}
          >
            <NavLink style={link} to="/">
              Home
            </NavLink>
            <NavLink style={link} to="/game">
              Game
            </NavLink>
            <NavLink style={link} to="/scores">
              Scores
            </NavLink>
          </div>
        </div>
      )}
    </Spring>
  );
};

export default NavBar;
