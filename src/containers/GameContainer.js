import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchDifficulties} from '../actions/gameActions';
import GameDifficulties from '../components/game/GameDifficulties';

class GameContainer extends Component {
  state = {
    loading: true,
  };
  componentDidMount() {
    this.props.fetchDifficulties().then(this.setState({loading: false}));
  }

  render() {
    return (
      <div>
        <h1>The Typing Game</h1>
        {this.state.loading ? (
          <h1>Loading...</h1>
        ) : (
          <GameDifficulties difficulties={this.props.difficulties} />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    difficulties: state.difficulties.difficulties,
  };
};

export default connect(mapStateToProps, {fetchDifficulties})(GameContainer);
