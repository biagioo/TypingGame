import React, { Component } from 'react'


const displayNameStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  }


const scoreStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  }

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
                        <h3 style={displayNameStyle}>Display Name: {score.display_name}</h3>
                        <p style={scoreStyle}>Score: {score.number}</p>
                    </div> 
                    )
                })
            )
           
        }
    }
}


export default ScoreCard