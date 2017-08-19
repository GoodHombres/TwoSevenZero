import data from './../fixtures/electoral-map.json';

const initialState = data;

function electoralMapReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default electoralMapReducer;
