import { createStore } from "vuex";
import scoreboard from "../store/scoreboard";

const store = createStore({
  modules: {
    scoreboard,
  },
});

export default store;
