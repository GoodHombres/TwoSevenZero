import { GO_TO, NAVIGATE } from './../constants/tabBar';

/**
 * goTo - Goes to a view in the tab
 *
 * @param {string} view
 */
export function goTo(view) {
  return {
    type: GO_TO,
    payload: view,
  };
}

export function navigate(route) {
  return {
    type: NAVIGATE,
    routeName: route,
  };
}
