import {
  SET_NAME,
  SET_PARTY,
} from './../constants/player';

const initialState = {
  name: null,
  party: null,
};

/**
 * playerReducer - Player reducer
 *
 * @param {Object} state
 * @param {Object} action
 */
function playerReducer(state = initialState, action) {
  switch (action.type) {
    // Set player name
    case SET_NAME:
      return { ...state, name: action.payload };
    // Set player party
    case SET_PARTY:
      return { ...state, party: action.payload };
    default:
      return state;
  }
}

export default playerReducer;
