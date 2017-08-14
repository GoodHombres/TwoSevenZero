import { NavigationActions } from 'react-navigation';
import { Navigation } from './../views/AppNavigation/Navigation';

import { SET_ROOT } from './../constants/navigation';

// Make start our initial route
const initialRoute = Navigation.router.getActionForPathAndParams('Start');

// Set initial state
const initialState = Navigation.router.getStateForAction(initialRoute);

function navigationReducer(state = initialState, action) {
  switch (action.type) {
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

export default navigationReducer;
