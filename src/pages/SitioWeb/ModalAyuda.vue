<template>
    <dialog ref="dialog">
      <div class="tw-flex tw-justify-between tw-items-center tw-p-4">
        <h2 class="tw-text-black tw-text-xl">Asistente ChatBot</h2>
        <div @click="close">        
            <i 
          class="fa-solid fa-circle-xmark tw-text-orange-500 tw-text-2xl tw-cursor-pointer " 
          
            ></i>
        </div>

      </div>
      <div class="chat tw-p-4">
        <ChatBot message="Hola! ¿En qué puedo ayudarte hoy?"></ChatBot>
      </div>
      <div class="input-container tw-p-4 tw-flex">
        <input 
          type="text" 
          placeholder="Escribe tu mensaje..." 
          v-model="message" 
          class="tw-flex-grow tw-mr-2 tw-p-2 tw-border tw-rounded"
        />
        <button 
          class="tw-bg-orange-500 tw-text-white tw-px-4 tw-py-2 tw-rounded" 
          @click="sendMessage"
        >Enviar
        </button>
      </div>
    </dialog>
</template>
  
<script setup>
  import { ref } from 'vue';
  import ChatBot from './ChatBot.vue';
  
  const dialog = ref(null);
  const message = ref('');
  
  const open = () => {
    dialog.value.showModal();
  };
  
  function close() {
    console.log("close")
    dialog.value.close();
  };
  
  const sendMessage = () => {
    if (message.value.trim()) {
      console.log('Mensaje enviado:', message.value);
      message.value = '';
    }
  };
  
  defineExpose({ open });
</script>
  
<style scoped>
  dialog {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    width: 800px;
  }
  
  .input-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .input-container button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.6);
  }
  
  .chat {
    height: 400px;
    overflow-y: auto;
  }
</style>
  