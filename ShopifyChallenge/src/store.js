import { createStore } from 'redux';
let reducer = (state, action) => {
  if (action.type === 'queryMovie') {
    if (action.queryMovie === 'empty') {
      return { ...state, queryMovie: [] };
    }
    return { ...state, queryMovie: action.queryMovie };
  }
  if (action.type === 'queryDetails') {
    if (action.queryDetails === 'empty') {
      return { ...state, queryDetails: [] };
    }
    return { ...state, queryDetails: action.queryDetails };
  }
  if (action.type === 'nominate') {
    if (action.nominate === 'empty') {
      return { ...state, nominate: [] };
    }
    return { ...state, nominate: action.nominate };
  }

  return state;
};
let initialState = {
  queryMovie: [],
  queryDetails:[],
  nominate:[],
};
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
