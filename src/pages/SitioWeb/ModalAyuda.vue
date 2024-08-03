
<template>
    <dialog ref="dialog">
      <div class="header">
        <h2>Asistente ChatBot</h2>
        <font-awesome-icon icon="fa-solid fa-circle-xmark" @click="close" />
      </div>
      <div class="chat">
        <!-- Contenido del chat -->
      </div>
      <div class="input-container">
        <input type="text" placeholder="Escribe tu mensaje..." v-model="message" />
        <button class=" tw-bg-orange-500 tw-text-white tw-p-20" @click="sendMessage">Enviar</button>
      </div>
    </dialog>
</template>
  
<script setup>
  import { ref } from 'vue';
  
  const dialog = ref(null);
  const message = ref('');
  
  const open = () => {
    dialog.value.showModal();
  };
  
  const close = () => {
    dialog.value.close();
  };
  
  const sendMessage = () => {
    // Lógica para enviar el mensaje
    console.log('Mensaje enviado:', message.value);
    message.value = ''; // Limpiar el input después de enviar
  };
  
  // Exponemos el método open para que pueda ser llamado desde el componente padre
  defineExpose({ open });
</script>
  
<style scoped>
  dialog {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
  }

  .input-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px
  }

  .input-container button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  dialog::backdrop {
    background-color: rgba(0,0,0,0.6);
  }
  
</style>