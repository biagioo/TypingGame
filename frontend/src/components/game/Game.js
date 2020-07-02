import React, { Component } from 'react'
import PostScore from '../scores/PostScore'
import HighestScore from './HighestScore'

class Game extends Component{

    state={
        timerOn: false,
        isGameCompleted: false,
        timerTime: 5,
        score: 0,
        words:[],
        currentWord:'',
        highestScore: false,
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
        if (this.state.timerTime === 5){
            return (this.startTimer(), this.setState(prevState =>({ currentWord:prevState.words[prevState.score] })))
        } 
    }
    
    startTimer = () => {
        this.setState({
            ...this.state,
          timerOn: true
        })
        this.timer = setInterval(() => {
          const newTime = this.state.timerTime - 1
          if (newTime >= 0) {
            this.setState({
              timerTime: newTime
            }, ()=>{
                if (this.state.score === 42) {
                    this.setState({isGameCompleted: true, highestScore:true, timerOn:false})
                    clearInterval(this.timer)
                }
            })
          } else {
            clearInterval(this.timer)
            this.setState({ timerOn: false, isGameCompleted: true })
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
        const newScore = this.state.score + 1
        if (this.state.userInput === this.state.currentWord) {
            this.setState({score: newScore, currentWord: this.state.words[newScore], timerTime: 5, userInput:''})    
        }
        
    }

    checkScore = () =>{
        if (this.state.score === 2) {
            this.setState({isGameCompleted: true, highestScore:true, timerOn:false})
        }
    }

    

    render(){
        if (this.state.isGameCompleted === false){
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
        } else if (this.state.highestScore === true) {
            return(
                <HighestScore 
                score={this.state.score}
                difficulty_id={this.props.difficulty_id}
                />
            )
        } else {
            return (
                <div>
                    <PostScore 
                    difficulty_id={this.props.difficulty_id}
                    score={this.state.score}
                    />
                </div>
            )
        }
    }

}

export default Game