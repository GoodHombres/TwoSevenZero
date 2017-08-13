import { combineReducers } from 'redux';
import navigationReducer from './navigation';
import playerReducer from './player';

const appReducer = combineReducers({
  player: playerReducer,
  nav: navigationReducer,
});

export default appReducer;
