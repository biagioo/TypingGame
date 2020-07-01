import React, { Component } from 'react'

class ScoreCard extends Component{
    
    renderScores = () =>{
        const userInput = this.props.userSelection
        const scores = this.props.scores
        const scoreKeys = Object.keys(this.props.scores)
        if (userInput === scoreKeys[0]){
            return(
                scores.Easy.map(score=>{
                    return(
                    <div key={score.id}>     
                        <h3>Display Name: {score.display_name}</h3>
                        <p>Score: {score.number}</p>
                    </div> 
                    )
                })
            )
        } else  if (userInput === scoreKeys[1]){
            return(
                scores.Medium.map(score=>{
                    return(
                    <div key={score.id}>     
                        <h3>Display Name: {score.display_name}</h3>
                        <p>Score: {score.number}</p>
                    </div> 
                    )
                })
            )
        } else {
            return(
                scores.Hard.map(score=>{
                    return(
                    <div key={score.id}>     
                        <h3>Display Name: {score.display_name}</h3>
                        <p>Score: {score.number}</p>
                    </div> 
                    )
                })
            )
        }
    }

    render(){
        if (this.props.userSelection === ""){
            return(
                <div>Hey! Select a Score List to See!</div>
            )
        } else {
            return(
                <div>{this.renderScores()}</div>
            )
        }
    }
}


export default ScoreCard