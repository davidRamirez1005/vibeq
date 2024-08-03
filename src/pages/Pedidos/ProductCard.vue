<template>
  <div class="tw-border tw-rounded-lg tw-p-4 tw-shadow-md tw-bg-slate-100">
    <div class="tw-flex tw-justify-between tw-items-center">
      <div>
        <p class="tw-font-medium tw-text-black">Order #{{ order.id }}</p>
        <p class="tw-font-normal tw-text-gray-500">{{ order.date }}</p>
      </div>
      <img :src="order.avatar" alt="Avatar" class="tw-w-10 tw-h-10 tw-rounded-full">
    </div>
    <div class="mt-4">
      <div v-for="item in order.items" :key="item.name"
           class="tw-flex tw-flex-col tw-justify-between tw-items-start tw-mb-4">
        <div class="tw-flex tw-items-center">
          <img :src="item.image" alt="Item image" class="tw-w-10 tw-h-10 tw-mr-2">
          <div>
            <p class="tw-font-normal tw-text-black">{{ item.name }}</p>
            <p class="tw-font-normal tw-text-gray-500">{{ item.description }}</p>
          </div>
        </div>
        <div class="tw-flex tw-justify-between tw-w-full">
          <p class="tw-font-normal tw-text-black">${{ item.price }}</p>
          <p class="tw-text-black">Qty: {{ item.quantity }}</p>
        </div>
      </div>
    </div>
    <div class="tw-mt-4 tw-flex tw-justify-between tw-items-center">
      <p class="tw-text-gray-500">{{ order.items.length }} Items</p>
      <div class="tw-flex tw-gap-2">
        <button @click="showModal = true" class="tw-bg-blue-500 tw-text-white tw-px-4 tw-py-2 tw-rounded">
          +
        </button>
        <button v-if="selectedStatus"
                :style="{ color: selectedStatus.color, backgroundColor: selectedStatus.bgColor }"
                class="tw-px-4 tw-py-2 tw-rounded">
          {{ selectedStatus.label }}
        </button>
      </div>
    </div>

    <OrderStatusModal
      :orderStatuses="orderStatuses"
      :showModal="showModal"
      @close="showModal = false"
      @status-selected="handleStatusSelected"
    />
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import OrderStatusModal from './OrderStatusModal.vue';

const props = defineProps({
    order: {
    type: Object,
    required: true
    },
    orderStatuses: {
        type: Array,
        required: true
    }
});

const showModal = ref(false);
const selectedStatus = ref(null);

const emit = defineEmits(['set-status']);

const handleStatusSelected = (status) => {
    selectedStatus.value = status;
    emit('set-status', status, props.order);
};

</script>
