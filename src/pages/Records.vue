<template>
  <div class="tabla-records">
    <h4>Tabla de Puntuaciones</h4>
    <ol>
      <li
        :class="[`nombre-${idx + 1}`]"
        v-for="(nombre, idx) in nombres"
        :key="idx"
        @click="consola"
      >
        {{ nombre }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: { nombres: { type: String, required: true } },
  setup() {
    return {
      consola: (event) => {
        console.log(event.target.innerText);
        // mostrar puntaje de la persona seleccionada
      },
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
}
.tabla-records {
  top: 0%;
  left: 0%;
  z-index: 999;
  margin: 10px;
  width: 200px;
  display: flex;
  transition: 1s;
  border-radius: 5%;
  position: fixed;
  flex-direction: column;
  border: 3px solid var(--secondary-color);
  background: linear-gradient(
    0deg,
    rgba(18, 144, 6, 1) 19%,
    rgba(24, 171, 8, 1) 46%,
    rgba(28, 197, 10, 1) 73%
  );
}

h4 {
  margin: 0px;
  padding: 10px;
  color: #66e558;
  background: linear-gradient(
    0deg,
    rgba(74, 74, 79, 1) 2%,
    rgba(61, 61, 66, 1) 19%
  );
  border-radius: 5px 5px 0px 0px;
}

ol {
  margin: 5px;
  display: flex;
  flex-direction: column;
}

li {
  width: 0;
  margin: 5px;
  transition: 0.6s;
  padding-left: 40px;
}

li:hover {
  color: white;
  cursor: pointer;
  transition: 0.6s;
}
.tabla-records.active {
  transform: translate(-50%, -100%);
}

@media (max-width: 900px) {
  .tabla-records {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -500%);
  }
}
</style>
