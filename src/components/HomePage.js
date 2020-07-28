import React from 'react'
import typingGif from '../gif/typing.gif'

const HomePage = () =>{

    return(
        <div>
            <h1>Welcome to The Typing Game!</h1>
            <h3>Instructions:</h3>
           
            <p>Select which difficulty you'd like to play on. </p>
            <p>Easy is 4 letter words, Medium is 5-6 letter words, Hard is 7 letter words. </p>
            <p>After the game is over, you'll be asked for a display name for your score to be seen on the score board. </p>
            <p>The score board only shows the top 3 scores for each difficulty.</p>
            <p>Enjoy!</p>
            <img style={{border: '5px solid white',}}src={typingGif} alt="GIf Loading..." />

        </div>
    )
}

export default HomePage