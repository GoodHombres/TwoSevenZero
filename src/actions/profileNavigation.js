import {
  POP,
  PUSH,
  SET_ROOT,
} from './../constants/profileNavigation';

export function setRoot(route) {
  return {
    type: SET_ROOT,
    payload: route,
  };
}

export function push(route, params = {}) {
  return {
    type: PUSH,
    payload: route,
    params: params,
  };
}

export function pop() {
  return {
    type: POP,
  };
}
