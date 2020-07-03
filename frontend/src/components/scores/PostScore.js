import React, { Component } from 'react'


class PostScore extends Component{

    state={
        display_name:'',
        submittedScore:false
    }
  
    handleChange = event =>{
        this.setState({ display_name:event.target.value})
    }
    
    handleSubmit = event =>{
        event.preventDefault()
        const url = 'http://localhost:3000/scores'
        let newScore = {
            display_name:this.state.display_name,
            difficulty_id:+this.props.difficulty_id,
            number:this.props.score
        }
        fetch(url, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newScore)
        })
        .then(resp =>resp.json())
        .then(data => this.setState({submittedScore:data}))
    }

    render(){
        if (this.state.submittedScore === false){
            return(
                <div>
                    <h3>Here is Your Final Score: </h3>
                    <h4>{this.props.score}</h4>
                    <span> Please enter a display name for your Score to be displayed on the Score Board:</span>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                        onChange={this.handleChange}
                        value={this.state.display_name}
                        type='text'/>
                        <input type='submit'/>
                    </form>
                </div>
            )
        } else {
            return(
                <>
                    <h3> Your Score was Submitted!</h3>
                    <p>Click the Scores link to see if you made the top 3!</p>
                </>
            )
        }
    }
}

export default PostScore