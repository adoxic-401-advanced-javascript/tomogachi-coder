const initialState = {
  start: true,
  timeLeft: 10,
};


export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'RESET': 
      return { ...initialState };
    case 'DEC_TIME':
      return { ...state, timeLeft: state.timeLeft - 1 };
    case 'START':
      return { ...state, start: false };
    default:
      return state;
  }
}
