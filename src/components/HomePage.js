import React from 'react';
import { Spring } from 'react-spring/renderprops';
import typingGif from '../gif/typing.gif';

const gifStyle = {
  border: '5px solid white',
};

const HomePage = () => {
  return (
    <Spring from={{ opacity: -5 }} to={{ opacity: 1 }}>
      {props => (
        <div style={props}>
          <div>
            <h1>Welcome to The Typing Game!</h1>
            <h3>Instructions:</h3>

            <p>Select which difficulty you'd like to play on. </p>
            <p>
              Easy is 4 letter words, Medium is 5-6 letter words, Hard is 7
              letter words.
            </p>
            <p>
              After the game is over, you'll be asked for a display name for
              your score to be seen on the score board. Search for a name and
              filter through difficulties with the drop down menu.
            </p>
            <p>Enjoy!</p>
            <img style={gifStyle} src={typingGif} alt='Gif Loading...' />
          </div>
        </div>
      )}
    </Spring>
  );
};

export default HomePage;
