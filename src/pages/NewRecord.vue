<template>
  <RouterLink :to="{ name: 'home' }" class="fade-in record showGame">
    ¿Queres volver al juego?
  </RouterLink>

  <TablaRecord></TablaRecord>

  <div>
    <h1>Agregar puntuacion</h1>
    <span class="focus-input100" data-placeholder="&#xe82a;"></span>

    <div class="div-container">
      <h1>Tu record es: {{ counter }}</h1>
      <h3>Puedes usar hasta 4 digitos</h3>

      <div class="div-container-form">
        <span class="name">Tu nombre:</span>
        <input v-model="modelValue" type="text" name="name" maxlength="4" placeholder="Escribe 4 letras o numeros...">
      </div>
      <button @click="send(modelValue, namePlayer)" class="btnnewrecord">Agregar Nombre</button>

    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { ref } from 'vue';
import { useStore, mapActions, } from 'vuex';
import { RouterLink } from 'vue-router';
import TablaRecord from "@/components/TablaRecord.vue";


export default {
  components: { TablaRecord },
  props: {
    nombres: { type: String, required: true },
    counter: { type: Number, required: true },
    namePlayer: { type: String, required: true },
  },
  methods: {
    ...mapActions('scoreboard', ["createNames"]),

    send(modelValue, namePlayer) {
      if (!modelValue) {
        Swal.fire({
          title: 'Error!',
          text: `No Ingresaste Nada`,
        })
      } else if (modelValue) {

        namePlayer = modelValue;
        let arr = [namePlayer, this.counter]

        Swal.fire({
          title: 'Record Guardado con Exito!',
          text: `Nombre: ${namePlayer} - Record: ${this.counter}`,
        })

        this.createNames(arr);
      }
    }
  },
  setup(props) {
    const store = useStore();
    let counter = localStorage.getItem("Contador")

    const modelValue = ref(),
      namePlayer = ref('');

    return {
      counter, modelValue, namePlayer
    }
  }
};
</script>

<style scoped>
.div-container {
  margin: 20px auto;
  width: 300px;
  padding: 20px;
  display: flex;
  border-radius: 10px;
  border: 1px solid #000;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(0deg,
      rgba(18, 144, 6, 1) 19%,
      rgba(24, 171, 8, 1) 46%,
      rgba(28, 197, 10, 1) 73%);
}

h1 {
  margin-bottom: 20px;
}

h3 {
  font-weight: lighter;
}

.btnnewrecord {
  padding: 10px;
  cursor: pointer;
  transition: 0.6s;
  border-radius: 10px;
  background-color: #fff;
}

.btnnewrecord:hover {
  background-color: rgb(177, 177, 177);
}

.div-container-form {
  display: flex;
  align-items: center;
}


.name {
  width: 100px;
  height: 20px;
  padding: 5px;
  margin: 0 10px;
  font-weight: bold;
  background-color: #fff;
}

input {
  height: 20px;
  padding: 10px;
  transition: 0.6s;
  margin: 20px auto;
  border-radius: 10px;
}

input:focus::placeholder {
  color: transparent;
}

input:hover,
input:focus {
  background-color: #d4d4d4;
}
</style>
