import React, {Component} from 'react'

class GameDifficulties extends Component{
    renderDifficulties = () =>{
        return( this.props.difficulties.map(diff =>{
            return <option key={diff.id} value={diff.id}>{diff.level}</option>
         }))

     }
     handleChange = event =>{
         console.log(event.target.value)

     }
     
    render(){
        console.log(this.props.difficulties)

        
        return(
            <div>
                Select dropdown
                <select onChange={this.handleChange}>
                {this.renderDifficulties()}
                </select> 
            </div>
        )
    }
}

export default GameDifficulties