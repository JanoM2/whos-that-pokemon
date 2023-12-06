<template>
  <RouterLink :to="{ name: 'home' }" @click="toggle" class="fade-in record showGame">
    ¿Queres volver al juego?
  </RouterLink>

  <TablaRecord></TablaRecord>
</template>

<script>
import { ref } from "vue"
import { mapActions } from 'vuex';
import { RouterLink } from "vue-router"
import TablaRecord from '@/components/TablaRecord.vue';

export default {
  components: { TablaRecord },
  methods: {
    ...mapActions("scoreboard", ["getNames"]),
  },
  mounted() {
    // si el url contiene 'record' mostrar tabla
    const rutaActual = ref(window.location.href).value;

    if (rutaActual.includes('record')) {
      document.querySelector(".tabla-records").classList.toggle("is-active");
    }
  },
  setup() {
    // al hacerle click al boton routerlink, esconde la tabla
    const toggle = () => {
      document.querySelector(".tabla-records").classList.toggle("active");
    }
    return {
      toggle,
    };
  },
};
</script>

<style></style>
