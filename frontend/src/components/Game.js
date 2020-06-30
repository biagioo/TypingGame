import React, { Component } from 'react'

class Game extends Component{
    
    renderGameWord=()=>{
        console.log(this.props.difficulty)
    }

    render(){
        return (
            <div>
                Game 
                {this.renderGameWord()}
            </div>

        )
    }

}

export default Game

// needs to get words from API √
// needs difficulty selector  √
// 
