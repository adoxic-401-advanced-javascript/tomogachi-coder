const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'SAVE':
      return [...state, action.payload];
    default:
      return state;
  }
}
