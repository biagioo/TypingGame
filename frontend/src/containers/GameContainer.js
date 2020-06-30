import React, { Component } from 'react'
// import Game from '../components/Game'
// import GameInput from '../components/GameInput'
import { connect } from 'react-redux'
import {fetchDifficulties} from '../actions/gameActions'
import GameDifficulties from '../components/GameDifficulties'
class GameContainer extends Component{
    
    componentDidMount(){
        this.props.fetchDifficulties()
    }

    render(){
        // console.log(this.props.difficutlties)
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
      difficulties: state.difficulties,
    }
  }

export default connect(mapStateToProps,{fetchDifficulties})(GameContainer)




// should import Game component
// should have state
// should import GameInput