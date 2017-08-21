import {
  SET_NAME,
  SET_PARTY,
  RESET_CANDIDACY,
  INCREASE_ELECTORAL_VOTES,
  INCREASE_OPPONENT_ELECTORAL_VOTES,
} from './../constants/candidate';

const initialState = {
  name: null,
  party: null,
  electoralVotes: 0,
  opponentElectoralVotes: 0,
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
    case INCREASE_ELECTORAL_VOTES:
      return { ...state, electoralVotes: (state.electoralVotes + action.payload) };
    case INCREASE_OPPONENT_ELECTORAL_VOTES:
      return { ...state, opponentElectoralVotes: (state.opponentElectoralVotes + action.payload) };
    case RESET_CANDIDACY:
      return { ...initialState };
    default:
      return state;
  }
}

export default candidateReducer;
