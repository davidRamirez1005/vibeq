
<script setup>
import { ref } from 'vue';
import MensajeDeTexto from "../SitioWeb/MensajeDeTexto.vue"


const questions = [
    {pregunta: "¿Que comercializas?", opt: ["Productos", "Servicios"], current: true},
    {pregunta: "¿Cuál es el nombre de tu negocio?", current: false},
    {pregunta: "¿Tienes una ubicación física? Si es así, ¿cuál es la dirección?", current: false},
    {pregunta: "¿Tienes perfiles en redes sociales? ¿Cuáles?", current: false},
    {pregunta: "¿Prefieres algún estilo o paleta de colores en particular para tu sitio web?", current: false},
]

let currentQuestionIndex = ref(1)

let progressPercentage = ref(0)

// Styles for current question
let widthProgressBarChild = ref(`width: ${progressPercentage.value}%; height: 100%`)
const leftBorder = ref("md:tw-border-l-[10px] tw-border-l-indigo-600")

function startForm() {
    currentQuestionIndex.value = 0
    currentQuestion.value = questions[0].pregunta
    widthProgressBarChild.value = `width: 0%; height: 100%`
    leftBorder.value = "md:tw-border-l-[10px] tw-border-l-indigo-600"
    progressPercentage.value = 0
}

</script>

<template>
    <section class="tw-grid-cols-[1fr_4fr] tw-grid tw-bg-white  md:tw-rounded-3xl">
        <aside class=" md:tw-z-2 md:tw-rounded-s-2xl">
            <div class="md:tw-p-4 md:tw-text-white">
                <p class=" md:tw-text-sm md:tw-font-bold md:tw-mb-5">Rellena el formulario para generar tu pagina web con IA
                    en minutos!</p>
                <h2 class="md:tw-font-bold md:tw-text-xl">Progreso <span id="progressPercentage">{{ progressPercentage
                }}</span>%</h2>
                <div id="progressBarBg" class="md:tw-w-full md:tw-rounded-md md:tw-h-5 tw-bg-slate-600">
                    <div :style="widthProgressBarChild" id="progressBarChild" class="tw-bg-orange-500 md:tw-rounded-md">
                    </div>
                </div>
            </div>
            <hr class="md:tw-h-1 tw-bg-orange-500 md:tw-border-none">
            <div id="listOfQuestions">
                <ul class="md:tw-flex md:tw-flex-col md:tw-space-y-5 md:tw-mt-5">
                    <li v-for="question in questions" class="md:tw-w-full md:tw-h-20  md:tw-p-4">{{ question.pregunta
                    }}</li>
                </ul>
            </div>
        </aside>
        <main class="md:tw-rounded-2xl">
            <div class="tw-ps-[20px] lg:tw-px-20 md:tw-py-10 lg:tw-px-30  tw-bg-[#f5f5f5] md:tw-rounded-e-3xl">
                <h1 class="md:tw-text-black md:tw-text-3xl"><span id="currentQuestion">{{ questions[currentQuestionIndex].pregunta }}</span></h1>
                <div v-if="questions[currentQuestionIndex].opt" id="currentAnswers" class="md:tw-flex tw-space-x-20  lg:tw-space-x-40 md:tw-h-full">
                    <div v-for="opt in questions[currentQuestionIndex].opt" class="md:tw-flex md:tw-space-x-2 md:tw-items-center">
                        <label for="products" class="md:tw-text-xl md:tw-m-0 md:tw-text-black">{{ opt }}</label>
                        <input type="radio" name="choice" id="products" class="md:tw-size-5 squared-radio">
                    </div>
                </div>
                <div v-else id="currentAnswers" class="tw-mt-10 md:tw-h-full">
                    <input type="text" placeholder="Ingresa tu respuesta aqui">
                </div>

            </div>
            <div id="messages" class="md:tw-text-black md:tw-p-3">
                <MensajeDeTexto></MensajeDeTexto>
            </div>
        </main>
    </section>
</template>

<style scoped>
.squared-radio {
    appearance: none;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #555;
    margin-right: 5px;
    position: relative;
    top: 5px;
    background-color: transparent;
    margin-bottom: 10px;
}

.squared-radio:checked:after {
    content: '\2714';
    font-size: 25px;
    position: absolute;
    top: -10px;
    color: #27293d;
}

aside {
    height: calc(100vh - 190px);
    background-color: #27293d;
}

main {
    display: grid;
    grid-template-rows: 2fr 5fr;
}
</style>
