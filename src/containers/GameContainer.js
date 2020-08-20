import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchDifficulties} from '../actions/gameActions';
import GameDifficulties from '../components/game/GameDifficulties';
import {LoopCircleLoading} from 'react-loadingg';

class GameContainer extends Component {
  state = {
    loaded: false,
  };
  componentDidMount() {
    this.props.fetchDifficulties().then(() => this.setState({loaded: true}));
  }

  render() {
    if (this.state.loaded !== true) {
      return (
        <>
          <h1>The Typing Game</h1>
          <h2>Game loading</h2>
          <LoopCircleLoading size="large" />
        </>
      );
    } else {
      return (
        <>
          <h1>The Typing Game</h1>
          <GameDifficulties difficulties={this.props.difficulties} />
        </>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    difficulties: state.difficulties.difficulties,
  };
};

export default connect(mapStateToProps, {fetchDifficulties})(GameContainer);
