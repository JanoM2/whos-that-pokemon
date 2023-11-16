<template>
  <RouterLink :to="{ name: 'home' }" @click="toggle" class="fade-in record showGame">
    ¿Queres volver al juego?
  </RouterLink>
</template>

<script>
import { ref } from 'vue';
import { mapActions } from 'vuex';
import { RouterLink } from "vue-router"

export default {
  components: {},
  props: { nombres: { type: String, required: true } },
  methods: {
    ...mapActions("scoreboard", ["getNames"]),
    names() {
      let result = getNames()
      console.log(result)
    }
  },
  setup() {
    // si el url contiene 'record' mostrar tabla
    const rutaActual = ref(window.location.href).value;
    if (rutaActual.includes('record')) {
      document.querySelector(".tabla-records").classList.add("active");
    }

    // al hacerle click al boton routerlink, esconde la tabla
    const toggle = () => {
      document.querySelector(".tabla-records").classList.remove("active");
    }

    return {
      nombres: ["Jano", "Jere", "Juan", 2221, "XRL8"],
      toggle,
    };
  },
};
</script>

<style></style>
