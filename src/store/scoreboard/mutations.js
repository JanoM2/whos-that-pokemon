export const setNames = (state, arrNames) => {
  for (let i = 0; i < 9; i++) {
    arrNames.sort((a, b) => b.counter - a.counter);
    if (arrNames.length > 10) arrNames.pop();
    state.names.push(arrNames);
  }
};
