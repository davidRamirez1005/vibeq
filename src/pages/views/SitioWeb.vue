<script setup>
import { ref, nextTick } from 'vue';
import MensajeDeTexto from "../SitioWeb/MensajeDeTexto.vue"
import ChatUsuario from "../SitioWeb/ChatUsuario.vue"

const questions = [
    {pregunta: "¿Que comercializas?", opt: ["Productos", "Servicios"], icon: "fa-solid fa-tags tw-text-xl"},
    {pregunta: "¿Cuál es el nombre de tu negocio?", icon: "fa-solid fa-briefcase tw-text-xl"},
    {pregunta: "¿Tienes una ubicación física? Si es así, ¿cuál es la dirección?", icon: "fa-solid fa-location-dot tw-text-xl"},
    {pregunta: "¿Tienes perfiles en redes sociales? ¿Cuáles?", icon: "fa-solid fa-icons tw-text-xl"},
    {pregunta: "¿Que colores quieres para tu sitio web?", icon: "fa-solid fa-paint-roller tw-text-xl", colors: true},
    {pregunta: "¿Tienes algun logo? Si es así, cargalo en el siguiente apartado", opt: ["Si", "No"], icon: "fa-solid fa-file-circle-question tw-text-xl"},
]

let currentQuestionIndex = ref(0)
let progressPercentage = ref(0)

// Styles for current question
let widthProgressBarChild = ref(`width: ${progressPercentage.value}%; height: 100%;`)
const leftBorder = "md:tw-w-full md:tw-h-20 md:tw-p-4 md:tw-border-l-[10px] tw-border-l-indigo-600 tw-content-center"

let buttonNextQuestionActive = ref(false)

function showNextQuestionButton() {
    buttonNextQuestionActive.value = true;
}

function handleInputChange() {
    showNextQuestionButton();
}

function hideNextQuestionButton() {
    buttonNextQuestionActive.value = false;
}

function nextQuestion() {
    if (currentQuestionIndex.value < questions.length - 1) {
        currentQuestionIndex.value++;
        progressPercentage.value += Math.round(100 / questions.length);
        widthProgressBarChild.value = `width: ${progressPercentage.value}%; height: 100%; transition: 1.2s ease`;
        let input = document.querySelector('#inputTextAnswer');
        if (input) input.value = '';
        nextTick(() => {
            hideNextQuestionButton();
        });
    } else {
        progressPercentage.value = 100;
        widthProgressBarChild.value = `width: ${progressPercentage.value}%; height: 100%; transition: 1.2s ease`;
        let upperSectionForm = document.querySelector('#upperSectionForm');
        if (upperSectionForm) upperSectionForm.style.display = 'none';
    }
}
</script>

<template>
    <section class="tw-grid-cols-[1fr_4fr] tw-grid tw-bg-white  md:tw-rounded-3xl">
        <aside class=" md:tw-z-2 md:tw-rounded-s-2xl">
            <div class="md:tw-p-4 md:tw-text-white">
                <p class=" md:tw-text-sm md:tw-font-bold md:tw-mb-5">Rellena el formulario para generar tu pagina web con IA
                    en minutos!</p>
                <h2 class="md:tw-font-bold md:tw-text-xl">Progreso <span id="progressPercentage">{{ progressPercentage }}</span>%</h2>
                <div id="progressBarBg" class="md:tw-w-full md:tw-rounded-md md:tw-h-5 tw-bg-slate-600">
                    <div :style="widthProgressBarChild" id="progressBarChild" class="tw-bg-orange-500 md:tw-rounded-md">
                    </div>
                </div>
            </div>
            <hr class="md:tw-h-1 tw-bg-orange-500 md:tw-border-none">
            <div id="listOfQuestions" class="tw-h-[570px]">
                <ul class="md:tw-flex md:tw-flex-col md:tw-space-y-5 md:tw-mt-5 tw-overflow-y-scroll tw-h-full questions">
                    <li v-for="(question, index) in questions" 
                        :key="index"
                        :class="[
                            'md:tw-w-full md:tw-h-[70px] md:tw-p-4 tw-flex tw-space-x-3 tw-items-center',
                            index === currentQuestionIndex ? leftBorder : ''
                        ]">
                        <i :class="question.icon"></i>
                        <p>{{ question.pregunta }}</p>
                    </li>
                </ul>
            </div>
        </aside>
        <main class="md:tw-rounded-2xl">
            <div id="upperSectionForm" class="tw-relative tw-px-[20px] lg:tw-px-20 md:tw-py-10 lg:tw-px-30  tw-bg-[#f5f5f5] md:tw-rounded-e-3xl">
                <h1 class="tw-text-black tw-text-2xl"><span id="currentQuestion">{{ questions[currentQuestionIndex].pregunta }}</span></h1>
                <div v-if="questions[currentQuestionIndex].opt" id="currentAnswers" class="md:tw-flex tw-space-x-20  lg:tw-space-x-40 md:tw-h-full">
                    <div v-for="opt in questions[currentQuestionIndex].opt" class="md:tw-flex md:tw-space-x-2 md:tw-items-center">
                        <label for="products" class="md:tw-text-xl md:tw-m-0 md:tw-text-black">{{ opt }}</label>
                        <input @click="showNextQuestionButton" type="radio" name="choice" id="products" class="md:tw-size-5 squared-radio">
                    </div>
                </div>
                <div v-else-if="questions[currentQuestionIndex].colors" id="currentAnswers" class="tw-mt-2 md:tw-h-1/5 tw-flex tw-space-x-5">
                    <input @input="handleInputChange" type="color" id="colorPrimary" value="#000000" class="tw-size-20 tw-bg-none tw-border-none tw-p-0">
                    <input @input="handleInputChange" type="color" id="colorSecundary" value="#000000" class="tw-size-20 tw-bg-none tw-border-none tw-p-0">
                    <input @input="handleInputChange" type="color" id="colorTerciary" value="#000000" class="tw-size-20 tw-bg-none tw-border-none tw-p-0">
                </div>
                <div v-else id="currentAnswers" class="tw-mt-2 md:tw-h-1/5">
                    <input @input="handleInputChange" id="inputTextAnswer" type="text" placeholder="Ingresa tu respuesta aqui">
                </div>
                <button v-if="buttonNextQuestionActive" id="nextQuestionButton" @click="nextQuestion" class="tw-absolute tw-right-8tw tw-bottom-10 lg:tw-right-20 lg:tw-bottom-10">
                    Next question
                </button>
            </div>
            <div class="md:tw-text-black md:tw-p-3 tw-overflow-y: scroll messages">
                <MensajeDeTexto></MensajeDeTexto>
                <ChatUsuario></ChatUsuario>


            </div>
        </main>
    </section>
</template>


<style scoped>

.questions {
   
    overflow-y: scroll;
}

.questions::-webkit-scrollbar {
  width: 8px;
}

.questions::-webkit-scrollbar-track {
  background: #cccc;
  border-radius: 10px;
}

.questions::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
  transition: background 0.3s ease-in-out;
}

.questions::-webkit-scrollbar-thumb:hover {
  background: #555;
}


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

.messages {
    max-height: 510px;
    overflow-y: scroll;
}

.messages::-webkit-scrollbar {
  width: 8px;
}


</style>
