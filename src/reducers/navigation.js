import { NavigationActions } from 'react-navigation';
import { Navigation } from './../containers/Navigation/Navigation';

import {
  POP,
  BACK,
  PUSH,
  SET_ROOT,
} from './../constants/navigation';

// Start with two routes: Main and Start screen on top
const firstAction = Navigation.router.getActionForPathAndParams('Main');
const tempNavState = Navigation.router.getStateForAction(firstAction);
const secondAction = Navigation.router.getActionForPathAndParams('Start');

const initialState = Navigation.router.getStateForAction(
  secondAction,
);

function navigationReducer(state = initialState, action) {
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

export default navigationReducer;
