import React, { Component } from 'react'

class ScoreCard extends Component{
    

    render(){
        if (this.props.userSelection === "select"){
            return(
                <div>Can you beat the Highest score?</div>
            )
        } else {
            return(this.props.scores.map(score =>{
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
}


export default ScoreCard