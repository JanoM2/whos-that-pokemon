import recordApi from "@/api/recordApi";
import Swal from "sweetalert2";

export const getNames = async ({ commit }) => {
  const { data } = await recordApi.get("/record.json"),
    arrNames = [];

  Object.values(data).forEach((obj) => {
    arrNames.push(obj);
  });

  commit("setNames", arrNames);

  return arrNames;
};

export const createNames = async ({ state, commit }, entry) => {
  let [namePlayer, counter] = entry;

  let validator = state.names[0].some((el) => {
    return el.namePlayer === namePlayer;
  });

  if (!validator) {
    recordApi.post(`/record.json`, { namePlayer, counter });
  } else {
    Swal.fire({
      title: "El nombre ya Existe!",
      text: `${namePlayer} ya está en uso`,
    });
  }
};
