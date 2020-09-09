import React, {Component} from 'react';

const displayNameStyle = {
  color: 'white',
  backgroundColor: 'DodgerBlue',
  padding: '10px',
  fontFamily: 'Arial',
};

const scoreStyle = {
  color: 'crimson',
  backgroundColor: 'lightcyan',
  padding: '10px',
  fontFamily: 'Arial',
};

class ScoreCard extends Component {
  render() {
    const {score} = this.props;
    return (
      <div key={score.id}>
        <h3 style={displayNameStyle}>Display Name: {score.display_name}</h3>
        <p style={scoreStyle}>Score: {score.number}</p>
        <p>Difficulty: {score.difficulty_level}</p>
      </div>
    );
  }
}

export default ScoreCard;
