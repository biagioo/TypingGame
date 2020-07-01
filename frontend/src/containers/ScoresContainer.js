import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchScores} from '../actions/scoreActions'
// import ScoreCards from '../components/scores/ScoreCard'

class ScoresContainer extends Component{

    componentDidMount(){
        this.props.fetchScores()
    }

    fliterScores = () => {
        const easyScores = this.props.scores[0].filter(score => score.difficulty_id == 2)
        console.log(easyScores)
    }

    

    render(){
        console.log(this.props.scores)
        return(
            <div>
                <h3>Scores</h3>
                {/* <ScoreCards ea/> */}
                {/* <button onClick={this.fliterScores}>easy scores</button> */}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        scores: state.scores
    }
}

export default connect(mapStateToProps, {fetchScores})(ScoresContainer)