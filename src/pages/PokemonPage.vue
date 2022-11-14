<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>

  <div v-else>
    <h1>¿Quien es este Pokémon?</h1>

    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer($event)" />
    <Contador :counter="counter" />

    <div v-if="message" class="fade-in">
      <h2>{{ message }}</h2>
      <button @click="newGame"></button>
    </div>
  </div>
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";
import Contador from "@/components/Contador.vue";
import getPokemonOptions from "@/pages/helpers/getPokemonOptions.js";

export default {
  name: "PokemonPage",
  components: { PokemonOptions, PokemonPicture, Contador },
  data() {
    return {
      counter: 0,
      pokemon: null,
      pokemonArr: [],
      showPokemon: false,
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
        event.target.classList.add("correct"); // agregar estilos si es correcto
        this.message = `Correcto, era ${this.pokemon.name.toUpperCase()}`; // escribir mensaje
        this.modifyCounter(this.counter); // mensajes personalizados por aciertos seguidos
      } else {
        this.counter = 0; // contador a 0 si es incorrecto
        this.disabledBtn(); // estilos a los botones si es incorrecto
        this.showPokemon = false; // no mostrar el pokemon
        this.message = `Incorrecto, ese era ${this.pokemon.name.toUpperCase()}`;
      }
    },
    newGame() {
      this.mixPokemonArray();
      this.showPokemon = false;
      this.message = null;
      this.pokemon = null;
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

button {
  padding: 40px;
  cursor: pointer;
  border-radius: 30%;
  background-image: url("https://guess-the-pokemon-game.netlify.app/img/restart-icon.3e38e928.svg");
}
</style>
