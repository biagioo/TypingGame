import React, {Component} from 'react'
import Game from './Game'


class GameDifficulties extends Component{
    
    state = {
        difficutly_id:'',
        difficutly:{}
    }
    
    renderDifficulties = () =>{
        return( this.props.difficulties.map(diff =>{
            return <option key={diff.id} value={diff.id}>{diff.level}</option>
        }))

    }

    handleChange = event =>{
        this.setState({ difficutly_id:event.target.value})
    }
    
    // handleClick = () =>{
    //     const difficulty = this.props.difficulties.filter(diff => diff.id == this.state.difficutly_id)
    //     const words = difficulty[0].words
    //     console.log("diff", difficulty)
    //     console.log("words",words)
    //     // if(words !== undefined){
    //     //   return <Game words={words} />
    //     // }
    //     // this isnt working because its not in render      
    // }

    handleOnSubmit = event =>{
        event.preventDefault()
       console.log("fix me plz")
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
            </div>
        )
    }
}

export default GameDifficulties