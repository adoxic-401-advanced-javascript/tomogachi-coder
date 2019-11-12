import { createStore } from 'redux';

const initialState = {
  coffee: 0,
  snacks: 0,
  naps: 0,
  studies: 0,
  start: true,
  timeLeft: 10,
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'DRINK_COFFEE':
      return { ...state, coffee: state.coffee + 1 };
    case 'EAT_SNACK':
      return { ...state, snacks: state.snacks + 1 };
    case 'TAKE_NAP':
      return { ...state, naps: state.naps + 1 };
    case 'STUDY':
      return { ...state, studies: state.studies + 1 };
    case 'START':
      return { ...state, start: false };
    case 'RESET': 
      return { ...initialState };
    case 'DEC_TIME':
      return { ...state, timeLeft: state.timeLeft - 1 };
    default:
      return state;
  }
}



const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__()
);

export default store;
