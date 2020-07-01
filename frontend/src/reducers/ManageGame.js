import { combineReducers } from 'redux';
import difficulties from './difficulties';
import scores from './scores'

const rootReducer = combineReducers({
    difficulties: difficulties,
    scores:scores
  });

export default rootReducer