import React from 'react'

const ScoreCard = props =>{
   <div>
       {props.scores.map(score =>
           <h5>{score.displayname}</h5>
       )}
   </div>
}

export default ScoreCard