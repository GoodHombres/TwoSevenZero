import { NavigationActions } from 'react-navigation';
import { Navigation } from './../views/TabBar/Navigation';
import { GO_TO, NAVIGATE } from './../constants/tabBar';

const initialRoute = Navigation.router.getActionForPathAndParams('Main');
const initialState = Navigation.router.getStateForAction(initialRoute);

function tabBarReducer(state = initialState, action) {
  switch (action.type) {
    case NAVIGATE:
      return Navigation.router.getStateForAction(action, state);
    case GO_TO:
      return { ...state, index: 0 };
    default:
      return state;
  }
}

export default tabBarReducer;
