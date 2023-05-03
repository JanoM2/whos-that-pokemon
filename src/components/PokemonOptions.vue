<template>
  <div class="options-container">
    <ul>
      <li
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        @mouseleave="stopSpeech"
        @mouseover="speechNames"
        @click="$emit('selection', pokemon.id)"
      >
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
  methods: {
    speechNames(e) {
      const msg = new SpeechSynthesisUtterance();
      msg.lang = "en-US";
      if (e.target.matches("li:nth-child(1)")) {
        msg.text = this.pokemons[0].name;
        window.speechSynthesis.speak(msg);
      } else if (e.target.matches("li:nth-child(2)")) {
        msg.text = this.pokemons[1].name;
        window.speechSynthesis.speak(msg);
      } else if (e.target.matches("li:nth-child(3)")) {
        msg.text = this.pokemons[2].name;
        window.speechSynthesis.speak(msg);
      } else {
        msg.text = this.pokemons[3].name;
        window.speechSynthesis.speak(msg);
      }
    },
    stopSpeech() {
      window.speechSynthesis.cancel();
    },
  },
};
</script>

<style scoped>
/* Pokemon Options */
ul {
  flex-direction: column;
  list-style-type: none;
  margin-top: 50px;
  display: flex;
  padding: 0;
}

li {
  width: 250px;
  padding: 10px;
  color: gray;
  cursor: pointer;
  font-size: 1.5rem;
  margin-bottom: 10px;
  border-radius: 70px;
  border: 3px solid rgba(21, 146, 7);
}

li:hover {
  transition: 0.6s;
  color: #fff;
  background-color: rgba(21, 146, 7, 0.79);
}

.options-container {
  display: flex;
  justify-content: center;
}

.correct {
  background-color: rgba(21, 146, 7, 0.79);
  pointer-events: none;
  transition: 0.6s;
  color: white;
}

.correct:hover {
  background-color: rgba(21, 146, 7, 0.79);
}

.inactive {
  pointer-events: none;
}

li[disabled] {
  border: 3px solid rgba(207, 24, 24, 0.5);
  background-color: rgba(0, 0, 0, 0.5);
  pointer-events: none;
  transition: 0.6s;
  cursor: default;
  color: white;
}
li[disabled]:hover {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
