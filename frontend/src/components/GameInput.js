import React, { Component } from 'react'

class GameInput extends Component{
    
    state={
        text:''
    }

    handleOnChange = event =>{
        this.setState({ text: event.target.value})
    }

    render(){
        return (
            <div>
                Game Input
                <form >
                    <input 
                    placeholder="Start Typing..."
                    onChange={this.handleOnChange} 
                    value={this.state.text}
                    type='text' />
                </form>
            </div>

        )
    }

}

export default GameInput
