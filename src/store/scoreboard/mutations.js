export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries];
  state.isLoading = false;
};

export const updateEntry = (state, entry) => {
  const idx = state.entries.map((el) => el.id).indexOf(entry.id);
  state.entries[idx] = entry;
};

export const addName = (state, entry) => {
  console.log("addName");
  // state.entries.unshift(entry);
  // state.entries = [entry, ...state.entries];
};

export const deleteEntry = (state, id) => {
  state.entries = state.entries.filter((el) => el.id !== id);
};

export const clearEntries = (state) => {
  state.entries = [];
};
