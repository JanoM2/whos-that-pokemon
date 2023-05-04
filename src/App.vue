<template>
  <PokemonPage></PokemonPage>
</template>

<script>
import PokemonPage from "./pages/PokemonPage.vue";

export default {
  name: "app",
  components: { PokemonPage },
};
</script>

<style>
#app {
  position: relative;
}
</style>
