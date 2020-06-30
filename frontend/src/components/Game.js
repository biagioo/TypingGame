import React, { Component } from 'react'
// import { connect } from 'react-redux'
import GameInput from './GameInput'

class Game extends Component{

    state={
        time: 5,
        isPlaying: false,
        score:0,
        currentWords:[]
    }
    // componentDidMount(){
    //     make a fetch request using the difficulty_id
    // }
    
    renderGameWords=()=>{
        // const difficulty = this.props.difficulties.filter(diff => diff.id == this.props.difficulty_id)
        // const words = difficulty[0].words
        
        console.log(this.props)
        
        console.log("make fetch request in component did mount for words based off of user select input")
    }
    
    // renderCountdown=()=>{
    //     const time = this.state.time
    //     const isPlaying = this.state.isPlaying
        
    // }

    render(){
        return (
            <div>
                Game
                {this.renderGameWords()}
                <p>words should be rendered here</p>
                <GameInput />
                <p>current score is rendered here updating whenever the user types the correct word or time runs out</p>
            </div>

        )
    }

}
// const mapStateToProps = state =>{
//     return{
//         difficulties: state.difficulties
//     }
// }
export default Game

//          Game Flow
//  Start button calls a function that 
//  - renders words and store them into the local state
// 