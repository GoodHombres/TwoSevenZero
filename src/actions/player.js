import {
  SET_NAME,
  SET_PARTY,
} from './../constants/player';

/**
 * setName - Sets the player's name
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
 * setParty - Sets the player's party
 *
 * @param {string} party
 */
export function setParty(party) {
  return {
    type: SET_PARTY,
    payload: party,
  };
}
