import data from './../fixtures/electoral-map.json';
import {
  RESET_MAP,
  WIN_DISTRICT,
  INCREASE_SCORE,
  COMPLETE_DISTRICT,
  INCREASE_OPPONENT_SCORE,
} from './../constants/electoral-map';

const initialState = data;

function electoralMapReducer(state = initialState, action) {
  let electoralState;
  let districts;

  switch (action.type) {
    case RESET_MAP:
      return { ...initialState };
      case COMPLETE_DISTRICT:
        // Map States
          electoralState = state.states.map((s) => {
          // If state key is the same as state id
          if (s.key === action.stateId) {
            // Map districts
            districts = s.level.districts.map((d) => {
              // If district id matches current district id
              if (d.key === action.districtId) {
                // Set won to true
                return { ...d, completed: true };
              } else {
                // Otherwise return district
                return d;
              }
            });
            // Return state with updated level
            return { ...s, level: { ...s.level, districts } }
          } else {
            // Otherwise return state
            return s;
          }
        });
        // Return state
        return { ...state, states: electoralState };
      case WIN_DISTRICT:
        // Map States
        electoralState = state.states.map((s) => {
          // If state key is the same as state id
          if (s.key === action.stateId) {
            // Map districts
            districts = s.level.districts.map((d) => {
              // If district id matches current district id
              if (d.key === action.districtId) {
                // Set won to true
                return { ...d, won: true };
              } else {
                // Otherwise return district
                return d;
              }
            });
            // Return state with updated level
            return { ...s, level: { ...s.level, districts } }
          } else {
            // Otherwise return state
            return s;
          }
        });
        // Return state
        return { ...state, states: electoralState };
      case INCREASE_SCORE:
        // Map States
        electoralState = state.states.map((s) => {
          // If state key is the same as state id
          if (s.key === action.stateId) {
            // Return state with updated player score
            return { ...s, playerScore: (s.playerScore + action.payload) }
          } else {
            // Otherwise return state
            return s;
          }
        });
        // Return state
        return { ...state, states: electoralState };
    case INCREASE_OPPONENT_SCORE:
        // Map States
        electoralState = state.states.map((s) => {
          // If state key is the same as state id
          if (s.key === action.stateId) {
            // Return state with updated opponent score
            return { ...s, opponentScore: (s.opponentScore + action.payload) }
          } else {
            // Otherwise return state
            return s;
          }
        });
        // Return state
        return { ...state, states: electoralState };
    default:
      return state;
  }
}

export default electoralMapReducer;
