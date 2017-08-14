import { combineReducers } from 'redux';
import profileNavigationReducer from './profileNavigation';
import mainNavigationReducer from './mainNavigation';
import navigationReducer from './navigation';
import tabBarReducer from './tabBar';
import playerReducer from './player';

const appReducer = combineReducers({
  profileNav: profileNavigationReducer,
  mainNav: mainNavigationReducer,
  nav: navigationReducer,
  tabBar: tabBarReducer,
  player: playerReducer,
});

export default appReducer;
