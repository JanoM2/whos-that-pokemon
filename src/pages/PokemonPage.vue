<template>
  <RouterLink :to="{ name: 'records' }" class="fade-in record showRecord">¿Queres ver los records?
  </RouterLink>

  <TablaRecord></TablaRecord>

  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div class="main" v-else>
    <h1>¿Quien es este Pokémon?</h1>

    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer($event)" />
    <Contador :counter="counter" />

    <div v-if="message" class="fade-in">
      <h2>{{ message }}</h2>
      <button class="button-refresh" @click="newGame">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
          <path d="M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z">
          </path>
        </svg>
      </button>
    </div>

    <RouterLink :to="{ name: 'newrecord' }" v-if="showBttn" class="fade-in record newRecord">
      ¿Queres anotar tu record?
    </RouterLink>

  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import Records from "@/pages/Records.vue";
import Contador from "@/components/Contador.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";
import getPokemonOptions from "@/pages/helpers/getPokemonOptions.js";
import TablaRecord from '@/components/TablaRecord.vue';

export default {
  name: "PokemonPage",
  components: { PokemonOptions, PokemonPicture, Contador, Records, TablaRecord },
  data() {

    return {
      counter: 0,
      pokemon: null,
      pokemonArr: [],
      showPokemon: false,
      showBttn: false,
      message: "",
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();

      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
    },
    modifyCounter() {

      this.counter === 5
        ? (this.message = `¡Correcto!, ¡¡Vas ${this.counter} seguidas!!`)
        : (this.message = this.message);
      if (this.counter === 10)
        return (this.message = `¡WOW! Eso es Correcto, ¡¡Vas ${this.counter} seguidas!!`);
      this.counter === 15
        ? (this.message = `¡PERO BUENO!, ¡¡Vas ${this.counter} seguidas!! Increible`)
        : (this.message = this.message);
      if (this.counter === 20)
        return (this.message = `😳 vas ${this.counter} seguidas... creo que salir a tomar algo de aire de vez en cuando te haria bien`);
      this.counter % 10 === 0
        ? (this.message = `🤯 vas ${this.counter} seguidas... Podrias ver otras series ademas de Pokémon, ¿Sabias?`)
        : (this.message = this.message);

    },
    checkAnswer(pokemonId) {
      if (pokemonId === this.pokemon.id) {
        this.counter++; // sumar contador si es correcto
        this.showPokemon = true; // mostrar el pokemon
        this.correctBtn(); // agregar estilos si es correcto
        this.message = `Correcto, era ${this.pokemon.name.toUpperCase()}`; // escribir mensaje
        this.modifyCounter(this.counter); // mensajes personalizados por aciertos seguidos
        this.showBttn = false;
      } else {
        // this.counter = 0; // contador a 0 si es incorrecto
        this.disabledBtn(); // estilos a los botones si es incorrecto
        this.showPokemon = false; // no mostrar el pokemon
        this.message = `Incorrecto, ese era ${this.pokemon.name.toUpperCase()}`;
        this.showBttn = true;
      }
    },
    newGame() {
      if (this.showPokemon === false) {
        this.counter = 0; // contador a 0 si es incorrecto
      }

      this.mixPokemonArray();
      this.showPokemon = false;
      this.message = null;
      this.pokemon = null;
      this.showBttn = false;
    },
    correctBtn() {
      document
        .querySelectorAll("li")
        .forEach((el) => el.classList.toggle("inactive"));
      event.target.classList.add("correct");
    },
    disabledBtn() {
      document
        .querySelectorAll("li")
        .forEach((el) => el.setAttribute("disabled", ""));
    },
  },
  mounted() {
    this.mixPokemonArray();
  },

};
</script>

<style scoped>
.newRecord {
  display: block;
  width: 300px;
  margin: 0 auto;
  position: static;
}

h2 {
  width: 60%;
  margin: 20px auto;
}

.record:hover {
  color: #fff;
}

.button-refresh {
  padding: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  border-radius: 30%;
  }

@media (max-width: 901px) {
  .showRecord {
    display: none;
  }
}
</style>
