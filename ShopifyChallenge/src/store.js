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

  return state;
};
let initialState = {
  queryMovie: [],
  queryDetails:[],
};
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
