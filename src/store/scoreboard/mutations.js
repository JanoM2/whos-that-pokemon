export const setNames = (state, arrNames) => {
  for (let i = 0; i < 9; i++) {
    arrNames.sort((a, b) => b.counter - a.counter);
    state.names.push(arrNames);
  }
};
