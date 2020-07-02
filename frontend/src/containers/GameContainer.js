import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchDifficulties} from '../actions/gameActions'
import GameDifficulties from '../components/game/GameDifficulties'
class GameContainer extends Component{
    
    componentDidMount(){
        this.props.fetchDifficulties()
    }

    render(){
        return (
            <div>
                <h1>The Typing Game</h1>
                <GameDifficulties difficulties={this.props.difficulties}/>
            </div>
        )
    }

}
const mapStateToProps = state => {
    return {
      difficulties: state.difficulties.difficulties,
    }
  }

export default connect(mapStateToProps,{fetchDifficulties})(GameContainer)

