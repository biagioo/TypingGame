import React, { Component } from 'react'

class Game extends Component{
    
    renderGameWord=()=>{
        console.log(this.props.difficulty)
    }

    render(){
        console.log("here")
        return (
            <div>
                Game 
            </div>

        )
    }

}

export default Game

// needs to get words from API √
// needs difficulty selector  √
// 
