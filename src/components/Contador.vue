<template>
  <div>Contador: {{ counter }}</div>
</template>

<script>
export default {
  props: { counter: { type: Number, required: true } },
  setup(props) {
    localStorage.setItem("Contador", props.counter);
    return {};
  },
};
</script>

<style scoped>
div {
  width: 20%;
  display: flex;
  margin: 0 auto;
  font-size: 2rem;
  justify-content: center;
}
</style>
