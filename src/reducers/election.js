import data from './../fixtures/main.json';

import {
  SET_VOTE_PERCENTAGE,
  SET_STATE_ELECTION,
  SET_OPPONENT_VOTE_PERCENTAGE,
} from './../constants/election';

const initialState = data.states;

function electionReducer(states = initialState, action) {
  switch (action.type) {
    case SET_VOTE_PERCENTAGE:
      return states.map((state) => {
        // If this is the state we are updating
        return (state.key === action.state)
          // Set vote percentage
          ? { ...state, votePercentage: action.payload }
          // Otherwise return state
          : state;
      });
    case SET_OPPONENT_VOTE_PERCENTAGE:
      return states.map((state) => {
        // If this is the state we are updating
        return (state.key === action.state)
          // Set opponent's vote percentage
          ? { ...state, opponentVotePercentage: action.payload }
          // Otherwise return state
          : state;
      });
    case SET_STATE_ELECTION:
      return states.map((state) => {
        // If this is the state we are updating
        return (state.key === action.state)
          // Return state and map cards
          ? { ...state, cards: state.cards.map((card) => {
            // If this is the card we are updating
            return (card.key === action.card)
              // Update card
              ? { ...card, ...action.payload }
              // Otherwise return card
              : card;
          })}
          // Otherwise return state
          : state;
      });
    default:
      return states;
  }
}

export default electionReducer;
