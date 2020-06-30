import React, { Component } from 'react'

class GameInput extends Component{
    
    state={
        text:''
    }

    handleOnChange = event =>{
        this.setState({ text: event.target.value})
    }

    handleOnSubmit = event =>{
        event.preventDefault()
        console.log(this.state.text)
        // see if state matches the word being displayed
        // might not need submit, maybe just check if matches from handleOnChange
    }

    render(){
        return (
            <div>
                Game Input
                <form onSubmit={this.handleOnSubmit}>
                    <input 
                    onChange={this.handleOnChange} 
                    value={this.state.text}
                    type='text' />
                    <button typer='submit'>Submit</button>
                </form>
            </div>

        )
    }

}

export default GameInput

// needs controll form 