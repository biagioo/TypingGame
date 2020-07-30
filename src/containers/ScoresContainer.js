import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllScores} from '../actions/scoreActions';
import ScoreCard from '../components/scores/ScoreCard';

class ScoresContainer extends Component {
  state = {
    userInput: '',
    selectedDifficulty: '',
    loading: true,
  };

  componentDidMount() {
    this.props.fetchAllScores().then(this.setState({loading: false}));
  }

  handleChange = (event) => {
    this.setState({selectedDifficulty: event.target.value});
  };

  handleInputChange = (event) => {
    this.setState({userInput: event.target.value});
  };

  filterScores = () => {
    // let re = new RegExp(`^${this.state.userInput}`, 'i')
    return this.props.scores.filter(
      (score) =>
        score.display_name
          .toLowerCase()
          .includes(this.state.userInput.toLowerCase()) &&
        score.difficulty_level.includes(this.state.selectedDifficulty)
    );
  };

  render() {
    return (
      <div>
        <h3>Scores</h3>
        {this.state.loading ? (
          <h1>loading...</h1>
        ) : (
          <>
            {' '}
            <label>Seach a display name:</label>
            <input type="text" onChange={this.handleInputChange} />
            <form onSubmit={this.handleOnSubmit}>
              <label>
                Select an option to change which scores are shown:
                <select onChange={this.handleChange}>
                  <option value="">All Scores</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </label>
            </form>
            <div>
              {this.filterScores().map((score) => (
                <ScoreCard key={score.id} score={score} />
              ))}
            </div>{' '}
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    scores: state.scores.All,
  };
};

export default connect(mapStateToProps, {fetchAllScores})(ScoresContainer);
