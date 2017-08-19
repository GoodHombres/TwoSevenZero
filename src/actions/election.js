import {
  SET_VOTE_PERCENTAGE,
  SET_STATE_ELECTION,
  SET_OPPONENT_VOTE_PERCENTAGE,
} from './../constants/election';

/**
 * setVotePercentage - Sets the vote percentage for the candidate
 *
 * @param {number} percentage
 * @param {number} stateId
 */
export function setVotePercentage(percentage, stateId) {
  return {
    type: SET_VOTE_PERCENTAGE,
    payload: percentage,
    state: stateId,
  };
}

/**
 * setOpponentVotePercentage - Sets the vote percentage
 * for the opposing candidate
 *
 * @param {number} percentage
 * @param {number} stateId
 */
export function setOpponentVotePercentage(percentage, stateId) {
  return {
    type: SET_OPPONENT_VOTE_PERCENTAGE,
    payload: percentage,
    state: stateId,
  };
}

/**
 * setStateElection - Sets the election results for the state
 *
 * @param {Object} card
 * @param {number} stateId
 * @param {number} cardId
 */
export function setStateElection(card, stateId, cardId) {
  return {
    type: SET_STATE_ELECTION,
    payload: card,
    state: stateId,
    card: cardId,
  };
}
