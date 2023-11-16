import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../pages/PokemonPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/records",
    name: "records",
    component: () =>
      import(/* webpackChunkName: "newRecord" */ "../pages/Records.vue"),
  },
  {
    path: "/newrecord",
    name: "newrecord",
    component: () =>
      import(/* webpackChunkName: "newRecord" */ "../pages/NewRecord.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
