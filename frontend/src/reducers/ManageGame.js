import { combineReducers } from 'redux';
import difficulties from './difficulties';

const rootReducer = combineReducers({
    difficulties: difficulties
  });

export default rootReducer