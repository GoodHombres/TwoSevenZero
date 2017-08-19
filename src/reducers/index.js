import { combineReducers } from 'redux';
import profileNavigationReducer from './profileNavigation';
import mainNavigationReducer from './mainNavigation';
import electoralMapReducer from './electoral-map';
import navigationReducer from './navigation';
import candidateReducer from './candidate';
import electionReducer from './election';
import tabBarReducer from './tabBar';
import triviaReducer from './trivia';

const appReducer = combineReducers({
  profileNav: profileNavigationReducer,
  mainNav: mainNavigationReducer,
  election: electoralMapReducer,
  candidate: candidateReducer,
  nav: navigationReducer,
  trivia: triviaReducer,
  tabBar: tabBarReducer,
});

export default appReducer;
