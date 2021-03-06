import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDifficulties } from '../actions/gameActions';
import GameDifficulties from '../components/game/GameDifficulties';
import { LoopCircleLoading } from 'react-loadingg';
import { Spring } from 'react-spring/renderprops';

class GameContainer extends Component {
  state = {
    loaded: false,
  };
  componentDidMount() {
    this.props.fetchDifficulties().then(() => this.setState({ loaded: true }));
  }

  render() {
    if (this.state.loaded !== true) {
      return (
        <Spring from={{ opacity: -5 }} to={{ opacity: 1 }}>
          {props => (
            <div style={props}>
              <LoopCircleLoading size='large' color='black' />
              <h1>The Typing Game</h1>
              <h2>Game loading...</h2>
            </div>
          )}
        </Spring>
      );
    } else {
      return (
        <Spring from={{ opacity: -5 }} to={{ opacity: 1 }}>
          {props => (
            <div style={props}>
              <h1>The Typing Game</h1>
              <Spring from={{ opacity: -5 }} to={{ opacity: 1 }}>
                {props => (
                  <div style={props}>
                    <GameDifficulties difficulties={this.props.difficulties} />
                  </div>
                )}
              </Spring>
            </div>
          )}
        </Spring>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    difficulties: state.difficulties.difficulties,
  };
};

export default connect(mapStateToProps, { fetchDifficulties })(GameContainer);
