import { NavigationActions } from 'react-navigation';
import { Navigation } from './../views/ProfilePage/Navigation';

import {
  POP,
  BACK,
  PUSH,
  SET_ROOT,
} from './../constants/profileNavigation';

// Make profile our initial route
const initialRoute = Navigation.router.getActionForPathAndParams('Profile');

// Set initial state
const initialState = Navigation.router.getStateForAction(initialRoute);

function profileNavigationReducer(state = initialState, action) {
  switch (action.type) {
    // Pushes a new page
    case PUSH:
      return Navigation.router.getStateForAction(
        NavigationActions.navigate({
          routeName: action.payload,
          params: action.params,
        }),
        state
      );
    // Pops current page taking us back
    case POP:
    case BACK:
      return Navigation.router.getStateForAction(
        NavigationActions.back(),
        state,
      );
    // Clears stack taking us to root page
    case SET_ROOT:
      return Navigation.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: action.payload }),
          ],
        }),
        state,
      );
    default:
      return state;
  }
}

export default profileNavigationReducer;
