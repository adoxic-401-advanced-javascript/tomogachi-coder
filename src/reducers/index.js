import { combineReducers } from 'redux';
import mood from './moodReducer';
import history from './saveReducer';

export default combineReducers({
  mood,
  history
});



