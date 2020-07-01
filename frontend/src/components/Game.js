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
    componentDidMount = () =>{
        const id = this.props.difficulty_id
        fetch(`http://localhost:3000/difficulties/${id}/words`)
        .then(resp => resp.json())
        .then(data =>{
            this.setState({
                ...this.state,
                currentWords:data
            })
        })
        // make a fetch request using the difficulty_id
    }
    
    renderGameWords=()=>{
        // const difficulty = this.props.difficulties.filter(diff => diff.id == this.props.difficulty_id)
        // const words = difficulty[0].words
        
        console.log(this.state)
        
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

//          what is makes up the game?
//  - selected difficulty of words
//  - controlled input 
//  - timer
//  - score
//  - check that the input matches the word before the timer hits 0 
//     -if it does, a new word is shown, the timer resets, a point is added to the users score
//     -if it doesnt, "game over " is displayed, 
//     the game stops,
//     the score is saved and the user is shown a link to the scores for the difficulty
//      