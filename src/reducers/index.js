import { combineReducers } from 'redux';
import profileNavigationReducer from './profileNavigation';
import mainNavigationReducer from './mainNavigation';
import electoralMapReducer from './electoral-map';
import navigationReducer from './navigation';
import candidateReducer from './candidate';
import electionReducer from './election';
import tabBarReducer from './tabBar';

const appReducer = combineReducers({
  profileNav: profileNavigationReducer,
  mainNav: mainNavigationReducer,
  election: electoralMapReducer,
  candidate: candidateReducer,
  nav: navigationReducer,
  tabBar: tabBarReducer,
});

export default appReducer;
