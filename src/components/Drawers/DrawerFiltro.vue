<template>
    <div>
        <!-- drawer init and show -->
        <div class="tw-text-center">
            <button ref="showButton" class="tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-ring-blue-100 tw-font-medium tw-rounded-lg tw-text-sm tw-px-3 tw-py-2.5 tw-mb-2 dark:tw-bg-blue-600 dark:hover:tw-bg-blue-700 focus:tw-outline-none dark:focus:tw-ring-blue-800" type="button">
                <i class="fas fa-filter"></i> 
            </button>
        </div>
        
        <!-- drawer component -->
        <div ref="drawerContainer" class="tw-fixed tw-inset-0 tw-z-40 tw-flex tw-items-start tw-justify-end tw-bg-black tw-bg-opacity-50 tw-hidden" @click="handleOutsideClick" style="z-index: 9999;">
            <div ref="drawer" id="drawer-contact" class="tw-relative tw-h-screen tw-p-4 tw-overflow-y-auto tw-transition-transform tw-translate-x-full tw-bg-white tw-w-80 dark:tw-bg-gray-800" tabindex="-1" aria-labelledby="drawer-contact-label" @click.stop>
                <h5 id="drawer-label" class="tw-inline-flex tw-items-center tw-mb-6 tw-text-base tw-font-semibold tw-text-gray-500 tw-uppercase dark:tw-text-gray-400">
                    <i class="fas fa-filter" style=""></i> Filtros
                </h5>
                <button ref="hideButton" type="button" aria-controls="drawer-contact" class="tw-text-gray-400 tw-bg-transparent hover:tw-bg-gray-200 hover:tw-text-gray-900 tw-rounded-lg tw-text-sm tw-w-8 tw-h-8 tw-absolute tw-top-2.5 tw-end-2.5 tw-inline-flex tw-items-center tw-justify-center dark:hover:tw-bg-gray-600 dark:hover:tw-text-white">
                    <svg class="tw-w-3 tw-h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="tw-sr-only"></span>
                </button>
                <form class="tw-mb-6">
                    <div class="tw-mb-6">
                        <label for="options" class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">cliente</label>
                        <select id="options" class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500" required>
                            <option value="" disabled selected>Seleccione una opción</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                    <div class="tw-mb-6">
                        <label for="options" class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Producto</label>
                        <select id="options" class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500" required>
                            <option value="" disabled selected>Seleccione una opción</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                    <hr>
                    <br>
                    <div class="tw-mb-6">
                        <label for="start-date" class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Fecha inicio</label>
                        <input type="date" id="start-date" class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500" required />
                    </div>
                    <div class="tw-mb-6">
                        <label for="end-date" class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Fecha final</label>
                        <input type="date" id="end-date" class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500" required />
                    </div>
                    <button type="submit" class="tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 tw-w-full focus:tw-ring-4 focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-mb-2 dark:tw-bg-blue-600 dark:hover:tw-bg-blue-700 focus:tw-outline-none dark:focus:tw-ring-blue-800 tw-block">Buscar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const drawer = ref(null);
const drawerContainer = ref(null);
const showButton = ref(null);
const hideButton = ref(null);

const showDrawer = () => {
    drawer.value.classList.remove('tw-translate-x-full');
    drawerContainer.value.classList.remove('tw-hidden');
};

const hideDrawer = () => {
    drawer.value.classList.add('tw-translate-x-full');
    drawerContainer.value.classList.add('tw-hidden');
};

const handleOutsideClick = (event) => {
    if (!drawer.value.contains(event.target)) {
        hideDrawer();
    }
};

onMounted(() => {
    showButton.value.addEventListener('click', showDrawer);
    hideButton.value.addEventListener('click', hideDrawer);
});
</script>

<style scoped>
.tw-hidden {
    display: none;
}
</style>