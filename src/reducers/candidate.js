import {
  SET_NAME,
  SET_PARTY,
} from './../constants/candidate';

const initialState = {
  name: 'Erick',
  party: 'democratic',
  elections: [],
};

/**
 * candidateReducer - Candidate reducer
 *
 * @param {Object} state
 * @param {Object} action
 */
function candidateReducer(state = initialState, action) {
  switch (action.type) {
    // Set candidate name
    case SET_NAME:
      return { ...state, name: action.payload };
    // Set candidate party
    case SET_PARTY:
      return { ...state, party: action.payload };
    default:
      return state;
  }
}

export default candidateReducer;
