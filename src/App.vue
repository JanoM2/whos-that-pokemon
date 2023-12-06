<template>
  <MenuButton />

  <RouterView>
  </RouterView>
</template>

<script>
import { RouterView } from "vue-router";
import MenuButton from "@/components/MenuButton.vue";

export default {
  name: "app",
  components: { MenuButton },
  data() {

    return {
    };
  },
};
</script>

<style>
#hide {
  display: none;
}

#app {
  position: relative;
}

.record {
  top: 0;
  right: -20px;
  border: none;
  margin: 40px;
  z-index: 999;
  padding: 10px;
  color: #000;
  position: fixed;
  cursor: pointer;
  transition: 0.6s;
  font-weight: bolder;
  border-radius: 10px;
  text-decoration: none;
  background-color: var(--primary-color);
  box-shadow: 5px 5px 5px var(--secondary-color);
}

.record:hover {
  color: white;
  transition: 0.6s;
  box-shadow: 5px 5px 5px white;
}

@media (max-width: 901px) {
  .record {
    top: -30px;
    left: -30px;
    right: unset;
  }
}
</style>
