import React, {Component} from 'react'
import Game from './Game'


class GameDifficulties extends Component{
    
    state = {
        difficulty_id:''
    }
    
    renderDifficulties = () =>{
        return( this.props.difficulties.map(diff =>{
            return <option key={diff.id} value={diff.id}>{diff.level}</option>
        }))

    }

    handleChange = event =>{
        this.setState({ difficulty_id:event.target.value})
    }
    
    handleOnSubmit = event =>{
        event.preventDefault()
       console.log("fix me plz")
       //
    }
     
    render(){
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Choose Game Difficulty
                        <select onChange={this.handleChange}>
                        <option value={null}>Select Difficulty</option>
                        {this.renderDifficulties()}
                        </select> 
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <Game difficulty_id={this.state.difficulty_id}/>
            </div>
        )
    }
}

export default GameDifficulties