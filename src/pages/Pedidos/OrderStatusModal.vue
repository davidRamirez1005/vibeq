<template>
  <div v-if="showModal" class="tw-fixed tw-inset-0 tw-flex tw-items-center tw-justify-center tw-bg-gray-800 tw-bg-opacity-50">
    <div class="tw-bg-white tw-p-6 tw-rounded-lg tw-shadow-lg tw-w-full tw-max-w-sm tw-relative">
      <button @click="closeModal" class="tw-absolute tw-top-3 tw-right-3 tw-text-gray-500 tw-hover:text-gray-700">
        &times;
      </button>
      <h2 class="tw-text-xl tw-text-black tw-font-semibold tw-mb-4">Estados del Pedido</h2>
      <ul class="tw-flex tw-flex-wrap tw-gap-2">
        <li v-for="status in orderStatuses" :key="status.label" class="tw-mb-2">
          <button :style="{ color: status.color, backgroundColor: status.bgColor }"
            class="tw-px-2 tw-py-2 tw-rounded"
            @click="selectStatus(status)">
            {{ status.label }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>

import { defineProps, defineEmits } from "vue";

	const props = defineProps({
	orderStatuses: {
		type: Array,
		required: true
	},
	showModal: {
		type: Boolean,
		required: true
	}
	});

	const emit =defineEmits(['close', 'status-selected']) 
  
    const closeModal = () => {
      	emit('close');
    };

    const selectStatus = (status) => {
		emit('status-selected', status);
        closeModal();
    };

</script>

<style scoped>
    
</style>
