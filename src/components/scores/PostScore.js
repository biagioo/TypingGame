import React, {Component} from 'react';
// import { withRouter } from "react-router"
import {connect} from 'react-redux';
import {postScore} from '../../actions/scoreActions';

class PostScore extends Component {
  state = {
    display_name: '',
    submittedScore: false,
  };

  handleChange = (event) => {
    this.setState({display_name: event.target.value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let newScore = {
      display_name: this.state.display_name,
      difficulty_id: +this.props.difficulty_id,
      number: this.props.score,
    };
    this.props
      .postScore(newScore)
      .then((data) => this.setState({submittedScore: data}));
    // .then(()=> setTimeout(()=>this.props.history.push('/scores'), 2000))
  };

  render() {
    if (this.state.submittedScore === false) {
      return (
        <div>
          <h3>Here is Your Final Score: </h3>
          <h4>{this.props.score}</h4>
          <span>
            {' '}
            Please enter a display name for your Score to be displayed on the
            Score Board:
          </span>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              value={this.state.display_name}
              type="text"
            />
            <input type="submit" />
          </form>
        </div>
      );
    } else {
      return (
        <>
          <h3> Your Score was Submitted!</h3>
          <p>Check the Scores Page to see you score on the score board!</p>
        </>
      );
    }
  }
}

export default connect(null, {postScore})(PostScore);
