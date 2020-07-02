import React, {Component} from 'react'
import Game from './Game'


class GameDifficulties extends Component{
    
    state = {
        difficulty_id:'',
        displayGame:false
    }
    
    renderDifficulties = () =>{
        return( this.props.difficulties.map(diff =>{
            return <option key={diff.id} value={diff.id}>{diff.level}</option>
        }))

    }
    
    handleOnSubmit = event =>{
        event.preventDefault()
        let value = event.target.querySelector("select").value
       if (value !== "Select Difficulty" )
       this.setState({
           difficulty_id:event.target.querySelector("select").value,
           displayGame:true
       })   
    }
     
    render(){
        let render
        if (this.state.displayGame === false){
            render = 
                <form onSubmit={this.handleOnSubmit}>
                <label>Choose Game Difficulty
                <select onChange={this.handleChange}>
                <option value={null}>Select Difficulty</option>
                {this.renderDifficulties()}
                </select> 
                </label>
                <input type="submit" value="Select" />
                </form>
        } else {
            render=<Game difficulty_id={this.state.difficulty_id}/>
        }
        return(
        <div>{render}</div>
        )
    }
}

export default GameDifficulties