export const getCoffee = state => state.mood.coffee;
export const getSnacks = state => state.mood.snacks;
export const getNaps = state => state.mood.naps;
export const getStudies = state => state.mood.studies;
export const getStart = state => state.mood.start;

export const isTired = state => state.mood.coffee < 1 && state.mood.naps < 1;
export const isHyper = state => state.mood.coffee > 3;
export const isEducated = state => state.mood.studies > 2;
export const isHungry = state => state.mood.snacks < 1;

export const getFace = state => {
  if(isTired(state) && isHungry(state)) return '🤬';
  if(isHyper(state) && isHungry(state)) return '🤮';
  if(isTired(state)) return '😴';
  if(isHyper(state)) return '🙀';
  if(isEducated(state)) return '🤯';
  if(isHungry(state)) return '😡';
  
  return '😀';
};

