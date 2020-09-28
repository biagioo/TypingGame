import React, {Component} from 'react';
import PostScore from '../scores/PostScore';
import HighestScore from './HighestScore';
import {Spring} from 'react-spring/renderprops';

class Game extends Component {
  state = {
    timerOn: false,
    isGameCompleted: false,
    timerTime: 5,
    score: 0,
    words: [],
    currentWord: '',
    inputDisable: true,
    highestScore: false,
    userInput: '',
  };

  componentDidMount = () => {
    const id = this.props.difficulty_id;
    fetch(`https://typing-game-api.herokuapp.com/difficulties/${id}/words`)
      .then((resp) => resp.json())
      .then((data) => {
        const words = data.map((word) => word.element);
        this.setState({
          ...this.state,
          words: words,
        });
      });
  };

  startGame = () => {
    if (this.state.timerTime === 5) {
      this.startTimer();
    }
  };

  startTimer = () => {
    this.setState((prevState) => ({
      ...this.state,
      timerOn: true,
      inputDisable: false,
      currentWord: prevState.words[prevState.score],
    }));

    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 1;
      if (newTime >= 0) {
        this.setState(
          {
            timerTime: newTime,
          },
          this.gameBeaten()
        );
      } else {
        this.gameOver();
      }
    }, 1000);
  };

  gameBeaten = () => {
    if (this.state.score === 21) {
      this.setState({
        isGameCompleted: true,
        highestScore: true,
        timerOn: false,
      });
      clearInterval(this.timer);
    }
  };

  gameOver = () => {
    clearInterval(this.timer);
    this.setState({timerOn: false, isGameCompleted: true});
    alert('Game Over!');
  };

  handleOnChange = (event) => {
    this.setState({userInput: event.target.value}, () => {
      this.checkInput();
    });
  };

  checkInput = () => {
    const newScore = this.state.score + 1;
    if (this.state.userInput === this.state.currentWord) {
      this.setState({
        score: newScore,
        currentWord: this.state.words[newScore],
        timerTime: 5,
        userInput: '',
      });
    }
  };

  render() {
    if (this.state.isGameCompleted === false) {
      const gameWordStyle = {
        padding: '10px 20px',
        background: 'lightsteelblue',
        border: '5px solid black',
        fontSize: '22px',
        color: 'black',
      };
      return (
        <Spring from={{opacity: -5}} to={{opacity: 1}}>
          {(props) => (
            <div style={props}>
              <h3>Click Start Game and Start Typing!</h3>
              <span style={gameWordStyle}>{this.state.currentWord}</span>
              <p style={{color: 'red'}}>Timer: {this.state.timerTime}</p>
              <input
                disabled={this.state.inputDisable}
                placeholder="..."
                onChange={this.handleOnChange}
                value={this.state.userInput}
                type="text"
              />
              <p>Current Score {this.state.score}</p>
              <button onClick={this.startGame}>Start Game</button>
            </div>
          )}
        </Spring>
      );
    } else if (this.state.highestScore === true) {
      return (
        <HighestScore
          score={this.state.score}
          difficulty_id={this.props.difficulty_id}
        />
      );
    } else {
      return (
        <Spring from={{opacity: -5}} to={{opacity: 1}}>
          {(props) => (
            <div style={props}>
              <PostScore
                difficulty_id={this.props.difficulty_id}
                score={this.state.score}
              />
            </div>
          )}
        </Spring>
      );
    }
  }
}

export default Game;
