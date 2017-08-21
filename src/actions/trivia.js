import { RESET_TRIVIA, REMOVE_TRIVIA } from './../constants/trivia';

/**
 * resetTrivia - Resets trivia
 *
 */
export function resetTrivia() {
  return {
    type: RESET_TRIVIA,
  };
}

/**
 * removeTrivia - Removes item from trivia list
 *
 * @param {string} difficulty
 * @param {number} index
 */
export function removeTrivia(difficulty, index) {
  return {
    type: REMOVE_TRIVIA,
    payload: index,
    difficulty,
  }
}
