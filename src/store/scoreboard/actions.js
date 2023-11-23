import recordApi from "@/api/recordApi";

export const getNames = async ({ commit }) => {
  const { data } = await recordApi.get("/record.json"),
    arrNames = [];

  Object.values(data).forEach((obj) => {
    arrNames.push(obj);
  });

  commit("setNames", arrNames);

  return arrNames;
};

export const createNames = async ({ commit }, entry) => {
  let [namePlayer, counter] = entry;

  const { data } = await recordApi.post(`/record.json`, {
    namePlayer,
    counter,
  });
};
