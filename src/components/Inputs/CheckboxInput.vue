<template>
    <ul class="tw-items-center tw-w-4/5 tw-text-sm tw-font-medium tw-text-gray-900 tw-bg-white tw-border tw-border-gray-200 tw-rounded-lg sm:tw-flex dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-text-white">
        <li v-for="(estado, index) in estados" :key="index" class="tw-w-full tw-border-b tw-border-gray-200 sm:tw-border-b-0 sm:tw-border-r dark:tw-border-gray-600">
            <div class="tw-flex tw-items-center tw-ps-3" :style="{ borderRightColor: estado.color, borderRightStyle: 'solid', borderRightWidth: '4px' }">
                <input :id="`checkbox-list-${index}`" type="checkbox" value="" class="tw-w-4 tw-h-4 tw-text-blue-600 tw-bg-gray-100 tw-border-gray-300 tw-rounded focus:tw-ring-blue-500 dark:focus:tw-ring-blue-600 dark:tw-ring-offset-gray-700 dark:focus:tw-ring-offset-gray-700 focus:tw-ring-2 dark:tw-bg-gray-600 dark:tw-border-gray-500"
                @change="selectedStatus(estado.label)">
                <label :for="`checkbox-list-${index}`" class="tw-w-full tw-ms-2 tw-text-sm tw-font-medium">{{ estado.label }}</label>
            </div>
        </li>
    </ul>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    estados: {
        type: Array,
        required: true
    }
});

const emit = defineEmits(['status-filtered']);

const selectedStatus = (status) => {
    emit('status-filtered', status)
}

</script>

<style scoped>
label{
    padding-top: 0.65rem;
}
</style>