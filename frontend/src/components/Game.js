import React, { Component } from 'react'
import { connect } from 'react-redux'
import GameInput from './GameInput'
class Game extends Component{

    state={
        time: 5,
        isPlaying: false,
        score:0
    }
    
    renderGameWords=()=>{
        const difficulty = this.props.difficulties.filter(diff => diff.id == this.props.difficulty_id)
        const words = difficulty[0].words
        
        console.log(words)
    }
    
    // renderCountdown=()=>{
    //     const time = this.state.time
    //     const isPlaying = this.state.isPlaying
        
    // }

    render(){
        return (
            <div>
                Game

                <button onClick={this.renderGameWords}>render words</button>
                <p>words should be rendered here</p>
                <GameInput />
                <p>current score is rendered here updating whenever the user types the correct word or time runs out</p>
            </div>

        )
    }

}
const mapStateToProps = state =>{
    return{
        difficulties: state.difficulties
    }
}
export default connect(mapStateToProps)(Game)

