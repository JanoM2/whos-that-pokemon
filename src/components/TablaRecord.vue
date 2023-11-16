<template>
    <div class="tabla-records">
        <h4>Tabla de Puntuaciones</h4>
        <ol>
            <li :class="[`nombre-${idx + 1}`]" v-for="(nombre, idx) in nombres" :key="idx" @click="consola">
                {{ nombre }} {{ counter }}
            </li>
        </ol>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions("scoreboard", ["getNames"]),
        names() {
            let result = getNames()
            console.log(result)
        }
    },
    setup() {
        return {
            nombres: ["Jano", "Jere", "Juan", 2221, "XRL8"],
        }
    }
}
</script>

<style>
.tabla-records {
    left: 50%;
    margin: auto;
    z-index: 999;
    width: 200px;
    display: flex;
    transition: 1s;
    border-radius: 5%;
    position: absolute;
    flex-direction: column;
    transform: translate(-50%, -300%);
    border: 3px solid var(--secondary-color);
    background: linear-gradient(0deg,
            rgba(18, 144, 6, 1) 19%,
            rgba(24, 171, 8, 1) 46%,
            rgba(28, 197, 10, 1) 73%);
}

h4 {
    margin: 0px;
    padding: 10px;
    color: #66e558;
    background: linear-gradient(0deg,
            rgba(74, 74, 79, 1) 2%,
            rgba(61, 61, 66, 1) 19%);
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
    left: 50%;
    top: 40vh;
    position: fixed;
    transform: translateX(-50%);
}
</style>