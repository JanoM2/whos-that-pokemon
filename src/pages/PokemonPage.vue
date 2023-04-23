<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <Records :nombres="nombres" />
    <h1>¿Quien es este Pokémon?</h1>

    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer($event)" />
    <Contador :counter="counter" />

    <div v-if="message" class="fade-in">
      <h2>{{ message }}</h2>
      <button class="button-refresh" @click="newGame"></button>
    </div>

    <button v-if="showBttn" class="fade-in" id="record">
      <!-- @click="nose.push{paginaFormularioRecord}
      llevar a pagina para agregar record" -->
      ¿Quieres anotar tu record?
    </button>
  </div>
</template>

<script>
import Records from "../pages/Records.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";
import Contador from "@/components/Contador.vue";
import getPokemonOptions from "@/pages/helpers/getPokemonOptions.js";

export default {
  name: "PokemonPage",
  components: { Records, PokemonOptions, PokemonPicture, Contador },
  data() {
    return {
      counter: 0,
      pokemon: null,
      pokemonArr: [],
      showPokemon: false,
      showBttn: false,
      message: "",
      nombres: ["Jano", "Jere", "Juan", 2221, "XRL8"],
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
        this.counter = 0; // contador a 0 si es incorrecto
        this.disabledBtn(); // estilos a los botones si es incorrecto
        this.showPokemon = false; // no mostrar el pokemon
        this.message = `Incorrecto, ese era ${this.pokemon.name.toUpperCase()}`;
        this.showBttn = true;
      }
    },
    newGame() {
      this.mixPokemonArray();
      this.showPokemon = false;
      this.message = null;
      this.pokemon = null;
    },
    correctBtn() {
      document
        .querySelectorAll("li")
        .forEach((el) => el.classList.add("inactive"));
      event.target.classList.remove("inactive");
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
h2 {
  width: 60%;
  margin: 20px auto;
}

#record {
  height: 10%;
  border: none;
  margin: 20px;
  padding: 10px;
  cursor: pointer;
  transition: 0.6s;
  font-weight: bolder;
  border-radius: 10px;
  justify-content: center;
  background-color: var(--primary-color);
  box-shadow: 5px 5px 5px var(--secondary-color);
}

#record:hover {
  color: white;
  transition: 0.6s;
  border: 1px solid black 1s;
  box-shadow: 5px 5px 5px white;
}

.button-refresh {
  padding: 40px;
  cursor: pointer;
  border-radius: 30%;
  background-image: url("https://guess-the-pokemon-game.netlify.app/img/restart-icon.3e38e928.svg");
}
</style>
