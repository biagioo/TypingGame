import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchScores} from '../actions/scoreActions'
import ScoreCard from '../components/scores/ScoreCard'

class ScoresContainer extends Component{
    
    state={
        userSelection:'',
        selectedScores:[]
    }
    
    componentDidMount(){
        this.props.fetchScores()
    }

    handleOnSubmit = event =>{
        event.preventDefault()
        let value = event.target.querySelector("select").value
        const selectedScores = this.props.scores[value]
        this.setState({userSelection:value, selectedScores})
    }

    renderDropDown = () =>{
        const keys = Object.keys(this.props.scores)
        return(keys.map((name,idx)=>{
            return <option value={name}key={idx}>{name}</option>
        }))
    }

   

    render(){
            return(
                <div>
                    <h3>Scores</h3>
                    <form onSubmit={this.handleOnSubmit}>
                        <label>Select a Difficulty to view the top Three Scores:
                        <select >
                        <option value='select'>Select Scores</option>    
                        {this.renderDropDown()}
                        </select> 
                        </label>
                        <input type="submit" value="Select" />
                    </form>
                    <div>
                       <ScoreCard scores={this.state.selectedScores} userSelection={this.state.userSelection}/>
                    </div>
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