import data from './../fixtures/trivia.json';
import { RESET_TRIVIA, REMOVE_TRIVIA } from './../constants/trivia';

const initialState = data;

function triviaReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_TRIVIA:
      return initialState;
    case REMOVE_TRIVIA:
      // Based on difficulty
      switch (action.difficulty) {
        // If easy
        case 'easy':
          // Filter out item from easy list
          const easy = state.easy.filter((trivia) => trivia.id !== action.payload);
          return { ...state, easy }
        // If medium
        case 'medium':
          // Filter out item from medium list
          const medium = state.medium.filter((trivia) => trivia.id !== action.payload);
          return { ...state, medium }
        // If hard
        case 'hard':
          // Filter out item from hard list
          const hard = state.hard.filter((trivia) => trivia.id !== action.payload);
          return { ...state, hard }
        default:
          return state;
      }
    default:
      return state;
  }
}

export default triviaReducer;
