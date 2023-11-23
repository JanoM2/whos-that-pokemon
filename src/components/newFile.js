import { mapActions } from "vuex";

export default (await import("vue")).defineComponent({
  methods: {
    ...mapActions("scoreboard", ["getNames"]),
  },
  async created() {
    // const getNamesAndDigits = async () => {
    let arr = await this.getNames(),
      counter = [],
      digits = [],
      names = [];

    Object.values(arr).forEach((obj) => {
      names.push(obj);
    });
    console.log(names);

    // console.log(...names)
    // }
    /*
setup() {
const names = ref([]);
 
// Usar una función de flecha para asegurar que 'this' se refiere a la instancia del componente
const getAndSetNames = async () => {
// Acceder a las propiedades de la instancia usando 'this'
let arr = await this.getNames();
 
Object.values(arr).forEach(obj => {
names.value.push(obj);
});
 
console.log(...names.value);
};
 
// Llamar a la función cuando el componente está montado
onMounted(() => {
getAndSetNames();
});
 
return {
names: names.value
};
}

*/
  },
  setup() {
    return {
      nombres: ["Jano", "Jere", "Juan", 2221, "XRL8"],
      // ...names
    };
  },
});
