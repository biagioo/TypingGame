import React, { Component } from 'react'
import Game from '../components/Game'
import GameInput from '../components/GameInput'

class GameContainer extends Component{
    

    render(){
        return (
            <div>
                Game Container
                <Game />
                <GameInput />
            </div>

        )
    }

}

export default GameContainer


// should import Game component
// should have state
// should import GameInput