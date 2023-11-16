import state from "./state";
import * as actions from "./actions";
import * as mutations from "./mutations";
import * as getters from "./getters";

const scoreboardModule = {
  namespaced: true,
  actions,
  mutations,
  getters,
  state,
};

export default scoreboardModule;

// este index es lo que se termina importando en el store
