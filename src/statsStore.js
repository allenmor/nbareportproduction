// src/store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  stats: []
};



// Action creator
export const addStats = () => ({ type: 'statsAdded' });

// Reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'statsAdded':
        return { ...state, stats: action.payload };
    default:
      return state;
  }
};

// Store
const statsStore = createStore(counterReducer);
export default statsStore;