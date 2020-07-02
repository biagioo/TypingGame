import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchScores} from '../actions/scoreActions'
import ScoreCard from '../components/scores/ScoreCard'

class ScoresContainer extends Component{
    
    state={
        userSelection:''
    }
    
    componentDidMount(){
        this.props.fetchScores()
    }

    handleOnSubmit = event =>{
        event.preventDefault()
        let value = event.target.querySelector("select").value
        this.setState({userSelection:value})

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
                        <label>Choose Which Scores You'd like to see
                        <select >
                        <option value='select'>Select Scores</option>    
                        {this.renderDropDown()}
                        </select> 
                        </label>
                        <input type="submit" value="Select" />
                    </form>
                    <div>
                       <ScoreCard scores={this.props.scores} userSelection={this.state.userSelection}/>
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