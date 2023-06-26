import { createStore } from 'redux';

// Define the initial state
const initialState = {
  data: [],
  player: null,
  stats: []
};


// Define the reducer function
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_DATA':
      return { ...state, data: state.data.concat(action.payload) };
    case 'ADD_ESPN_DATA':
      return { ...state, espnData: action.payload };
    case 'ADD_PLAYER':
      return { ...state, player: action.payload };
    case 'ADD_STATS':
      return {...state, stats: action.payload}
    default:
      return state;
  }
}

// Create the store
const store = createStore(reducer);

// Export the store
export default store;
