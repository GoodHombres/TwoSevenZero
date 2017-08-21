import {
  RESET_MAP,
  WIN_DISTRICT,
  INCREASE_SCORE,
  COMPLETE_DISTRICT,
  INCREASE_OPPONENT_SCORE,
} from './../constants/electoral-map';

/**
 * completeDistrict - Sets district as complete
 *
 * @param {number} stateId
 * @param {number} districtId
 */
export function completeDistrict(stateId, districtId) {
  return {
    type: COMPLETE_DISTRICT,
    stateId,
    districtId,
  };
}

/**
 * increaseScore - Increases candidate's score in a state by points given
 *
 * @param {number} stateId
 * @param {number} points
 */
export function increaseScore(stateId, points) {
  return {
    type: INCREASE_SCORE,
    payload: points,
    stateId,
  };
}

/**
 * increaseOpponentScore - Increases opponens score in a state by points given
 *
 * @param {number} stateId
 * @param {number} points
 */
export function increaseOpponentScore(stateId, points) {
  return {
    type: INCREASE_OPPONENT_SCORE,
    payload: points,
    stateId,
  };
}

/**
 * resetMap - Resets electoral map
 *
 */
export function resetMap() {
  return {
    type: RESET_MAP,
  };
}

/**
 * winDistrict - Sets district as won for the candidate
 *
 * @param {number} stateId
 * @param {number} districtId
 */
export function winDistrict(stateId, districtId) {
  return {
    type: WIN_DISTRICT,
    stateId,
    districtId,
  };
}
