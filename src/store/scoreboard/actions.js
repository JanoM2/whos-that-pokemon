import recordApi from "@/api/recordApi";

export const getNames = async ({ commit }) => {
  const data = await recordApi.get("/record.json");

  console.log(data);

  // if (!data) {
  //   commit("lorem", []);
  //   return;
  // }

  // const entries = [];
  // for (let id of Object.keys(data)) {
  //   entries.push({ id, ...data[id] });
  // }

  commit("setEntries", entries);

  return data;
};

export const createNames = async ({ commit }, entry) => {
  // const { date, picture, text } = entry,
  //   dataToSave = { date, picture, text };
  console.log("createNames");

  // const { data } = await recordApi.post(`/record.json`, dataToSave);
  // dataToSave.id = data.name;

  commit("addName");

  // return data.name;
  // console.log(data);
};
