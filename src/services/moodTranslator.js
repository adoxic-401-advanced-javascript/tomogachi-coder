export const isTired = state => state.coffee < 1 && state.naps < 1;
export const isHyper = state => state.coffee > 3;
export const isEducated = state => state.studies > 2;
export const isHungry = state => state.snacks < 1;


export const getFace = state => {
  if(isTired(state) && isHungry(state)) return '🤬';
  if(isHyper(state) && isHungry(state)) return '🤮';
  if(isTired(state)) return '😴';
  if(isHyper(state)) return '🙀';
  if(isEducated(state)) return '🤯';
  if(isHungry(state)) return '😡';
  
  return '😀';
};

export default getFace;
