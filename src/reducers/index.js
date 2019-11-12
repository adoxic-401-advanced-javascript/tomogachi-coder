import { combineReducers } from 'redux';
import time from './timeReducer';
import mood from './moodReducer';

export default combineReducers({
  time,
  mood
});
