import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchDifficulties} from '../actions/gameActions'
import GameDifficulties from '../components/GameDifficulties'
class GameContainer extends Component{
    
    componentDidMount(){
        this.props.fetchDifficulties()
    }

    render(){
        return (
            <div>
                Game Container
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

