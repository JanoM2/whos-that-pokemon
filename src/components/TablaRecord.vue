<template>
    <section class="tabla-records">
        <h3 class="title">Tabla de Puntuaciones</h3>

        <div class="content-container">
            <article class="names-container">
                <h4>Nombres</h4>
                <ol>
                    <li :class="[`names-${idx + 1}`]" v-for="(name, idx) in names[0]" :key="idx">
                        {{ name.namePlayer }}
                    </li>
                </ol>
            </article>

            <article class="points-container">
                <h4>Puntos</h4>
                <ol>
                    <ul :class="[`points-${idx + 1}`]" v-for="(name, idx) in names[0]" :key="idx">
                        {{ name.counter }}
                    </ul>
                </ol>
            </article>
        </div>
    </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    methods: {
        ...mapActions("scoreboard", ["getNames"]),
    },
    computed: {
        ...mapState('scoreboard', ['names'])
    },
    async created() {
        await this.getNames()
    },
}
</script>



<style>
.tabla-records {
    left: 50%;
    margin: auto;
    z-index: 999;
    width: 300px;
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

h3 {
    margin: 0px;
    padding: 10px;
    color: #66e558;
    background: linear-gradient(0deg,
            rgba(74, 74, 79, 1) 2%,
            rgba(61, 61, 66, 1) 19%);
    border-radius: 5px 5px 0px 0px;
}

h4 {
    margin-left: 20px;
}

.content-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

ol {
    margin: 5px;
    display: flex;
    flex-direction: column;
}

li {
    width: auto;
    margin: 5px;
    transition: 0.6s;
    padding-left: 40px;
}

ul[class*="points"] {
    width: 50px;
    display: flex;
    margin: 5px auto;
}

li:hover {
    color: white;
    cursor: pointer;
    transition: 0.6s;
}

.tabla-records.is-active {
    left: 50%;
    top: 20vh;
    position: fixed;
    transform: translateX(-50%);
}
</style>