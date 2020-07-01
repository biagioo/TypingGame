import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchScores} from '../actions/scoreActions'
// import ScoreCard from '../components/scores/ScoreCard'

class ScoresContainer extends Component{

    
    componentDidMount(){
        this.props.fetchScores()
    }

    handleOnSubmit = event =>{

    }

    renderScores = () =>{
        return(this.props.scores.map(score =>{
            return <option key={score.id} value={score.id}></option>
        }))
    }

    render(){
        console.log(this.props.scores)
        if (this.props.scores.easy === []){
            return (<h3>Loading Scores...</h3>)
        } else {
            return(
                <div>
                    <h3>Scores</h3>
                    {/* <form onSubmit={this.handleOnSubmit}>
                    <label>Choose Which Scores You'd like to see
                    <select >
                    {this.renderScores()}
                    </select> 
                    </label>
                    <input type="submit" value="Select" />
                    </form> */}
                </div>
            )
        }
    }
}

const mapStateToProps = state =>{
    return{
        scores: [state.scores]
    }
}

export default connect(mapStateToProps, {fetchScores})(ScoresContainer)