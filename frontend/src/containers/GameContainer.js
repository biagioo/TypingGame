import React, { Component } from 'react'
import Game from '../components/Game'
import GameInput from '../components/GameInput'
import { connect } from 'react-redux'
import {fetchWords} from '../actions/gameActions'

class GameContainer extends Component{
    
    componentDidMount(){
        this.props.fetchWords()
    }

    render(){
        console.log(this.props.words)
        return (
            <div>
                Game Container
                <Game />
                <GameInput />
            </div>

        )
    }

}
const mapStateToProps = state => {
    return {
      words: state.words,
    }
  }

export default connect(mapStateToProps,{fetchWords})(GameContainer)




// should import Game component
// should have state
// should import GameInput