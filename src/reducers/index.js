import { combineReducers } from 'redux';
import playerReducer from './player';

const appReducer = combineReducers({
  player: playerReducer,
});

export default appReducer;
