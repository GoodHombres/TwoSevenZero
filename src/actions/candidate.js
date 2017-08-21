import {
  SET_NAME,
  SET_PARTY,
  RESET_CANDIDACY,
  INCREASE_ELECTORAL_VOTES,
  INCREASE_OPPONENT_ELECTORAL_VOTES,
} from './../constants/candidate';

/**
 * resetCandidacy - Resets candidacy
 *
 */
export function resetCandidacy() {
  return {
    type: RESET_CANDIDACY,
  };
}

/**
 * setName - Sets the candidate's name
 *
 * @param {string} name
 */
export function setName(name) {
  return {
    type: SET_NAME,
    payload: name,
  };
}

/**
 * setParty - Sets the candidate's party
 *
 * @param {string} party
 */
export function setParty(party) {
  return {
    type: SET_PARTY,
    payload: party,
  };
}

/**
 * increaseElectoralVotes - Increases candidate's electoral votes
 *
 * @param {number} delegates
 */
export function increaseElectoralVotes(delegates) {
  return {
    type: INCREASE_ELECTORAL_VOTES,
    payload: delegates,
  };
}

/**
 * increaseOpponentElectoralVotes - Increases opponent's electoral votes
 *  by number of delegates
 *
 * @param {number} delegates
 */
export function increaseOpponentElectoralVotes(delegates) {
  return {
    type: INCREASE_OPPONENT_ELECTORAL_VOTES,
    payload: delegates,
  };
}
