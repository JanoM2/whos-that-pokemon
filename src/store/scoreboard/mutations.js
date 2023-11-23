export const setNames = (state, arrNames) => {
  for (let i = 0; i < 10; i++) {
    arrNames.sort((a, b) => b.counter - a.counter);
    state.names.push(arrNames);
  }
};
