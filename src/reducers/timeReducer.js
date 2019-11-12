const initialState = {
  start: true,
  timeLeft: 10,
};


export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'DEC_TIME':
      return { ...state, timeLeft: state.timeLeft - 1 };
    default:
      return state;
  }
}
