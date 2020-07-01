import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import GameInput from './GameInput'

class Game extends Component{

    state={
        timerOn: false,
        timerTime: 5,
        score: 0,
        words:[],
        currentWord:'',
        userInput:''
    }

    componentDidMount = () =>{
        const id = this.props.difficulty_id
        fetch(`http://localhost:3000/difficulties/${id}/words`)
        .then(resp => resp.json())
        .then(data =>{
            const words = data.map(word=> word.element)
            this.setState({
                ...this.state,
                words:words
            })
        })
    }

    startGame=()=>{
        // holds functions that need to be fired when game starts
        if (this.state.timerTime === 5){
            console.log("start")
            // let word = this.state.words.pop()

            return (this.startTimer(), this.setState(prevState =>({ currentWord:prevState.words[prevState.score] })))
        } 
    }
    
    startTimer = () => {
        this.setState({
            ...this.state,
          timerOn: true,
          timerTime: this.state.timerTime,
        })
        this.timer = setInterval(() => {
          const newTime = this.state.timerTime - 1
          if (newTime >= 0) {
            this.setState({
              timerTime: newTime
            })
          } else {
            clearInterval(this.timer)
            this.setState({ timerOn: false })
            alert("Game Over!")
          }
        }, 1000);
      };

    handleOnChange = event =>{
        this.setState({ userInput: event.target.value}, () =>{
            this.checkInput()
        } )

    }


    checkInput = () =>{
        console.log(this.state.userInput)
        const newScore = this.state.score + 1
        if (this.state.userInput === this.state.currentWord) {
            this.setState({score: newScore, currentWord: this.state.words[newScore], timerTime: 5, userInput:''})
            
        } else  {
            console.log("else")
        }
    }

    render(){
        // console.log(this.state.userInput)
        return (
            <div>
                Game
                <p>{this.state.currentWord}</p>
                <p>timer {this.state.timerTime}</p>

                    <input 
                    placeholder="Start Typing..."
                    onChange={this.handleOnChange} 
                    value={this.state.userInput}
                    type='text' />
                <p>Current Score {this.state.score}</p>
                <button onClick={this.startGame}>Start Game</button>
            </div>

        )
    }

}

export default Game

//          what is makes up the game?
//  - selected difficulty of words
//  - controlled input 
//  - timer √
//  - score
//  - check that the input matches the word before the timer hits 0 
//     -if it does, a new word is shown, the timer resets, a point is added to the users score
//     -if it doesnt, "game over " is displayed, 
//     the game stops,
//     the score is saved and the user is shown a link to the scores for the difficulty
//      