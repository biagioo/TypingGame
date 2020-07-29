import React from 'react';
import PostScore from '../scores/PostScore';

const HighestScore = (props) => {
  return (
    <div>
      WOW! You Reached the Highest Score! Good Job!
      <PostScore difficulty_id={props.difficulty_id} score={props.score} />
    </div>
  );
};

export default HighestScore;
