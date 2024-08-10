<template>
    <div class="tw-grid tw-gap-4 tw-grid-cols-1 sm:tw-grid-cols-2">
      <div class="tw-bg-[#27293D] tw-rounded-md tw-p-4">
        <!-- PRODUCT TITLE -->
        <div>
          <label class="label-form">Titulo del producto</label>
          <input
            label="Titulo del producto"
            placeholder="Camiseta Nike"
            v-model="state.productTitle"
          />
        </div>
        <!-- TEXT EDITOR -->
        <div class="tw-mt-3">
          <label class="label-form">Descripción del producto</label>
          <div class="tw-bg-white">
            <div ref="editor" class="editor"></div>
          </div>
        </div>
        <div class="tw-mt-5">
          <label class="label-form">Fotos</label>
          <div class="tw-bg-[#1E1E29] tw-flex tw-flex-col tw-items-center tw-justify-center tw-rounded-md tw-p-5 tw-gap-3">
            <div class="tw-flex tw-items-center tw-gap-2">
              <button class="tw-bg-[#27293D] hover:tw-bg-gray-700 tw-rounded-md tw-text-white tw-outline-0 tw-transition-all tw-duration-500 p-2">
                Generar con IA
              </button>
              <label for="fileInput" class="hover:tw-text-yellow-500 tw-cursor-pointer tw-pt-[8px]">
                Seleccionar
              </label>
              <input type="file" id="fileInput" class="tw-hidden" @change="handleFileChange" multiple />
            </div>
            <p class="tw-text-gray-500">Accepts images, videos, or 3D models</p>
          </div>
        </div>
        <div class="tw-grid tw-grid-cols-2 tw-gap-5 tw-pt-5">
          <div>
            <label class="label-form">Precio</label>
            <input
              placeholder="$ 0.00"
              v-model="state.productPrice"
            />
          </div>
          <div>
            <label class="label-form">Comparación</label>
            <input
              placeholder="$ 0.00"
              v-model="state.productComparisonPrice"
            />
          </div>
        </div>
        <div class="tw-flex tw-items-center tw-gap-1 tw-mt-5">
          <input type="checkbox" v-model="state.tax" class="cyberpunk-checkbox" />
          <span>Cobrar impuestos por este producto</span>
        </div>
        <div class="tw-grid tw-grid-cols-2 tw-gap-5 tw-pt-4">
          <div>
            <label class="label-form">Costo producto</label>
            <input
              placeholder="$ 0.00"
              v-model="state.productCost"
            />
          </div>
          <div>
            <label class="label-form">Ganancia</label>
            <input
              disabled
              placeholder="$ --"
            />
          </div>
          <div>
            <label class="label-form">Margen</label>
            <input
              disabled
              placeholder="$ --"
            />
          </div>
        </div>
      </div>
      <div class="tw-bg-[#27293D] tw-rounded-md tw-p-4">
        <div class="tw-bg-[#1E1E29] tw-flex tw-flex-col tw-items-start tw-rounded-md tw-gap-3 tw-p-5">
          <div class="tw-flex tw-flex-col gap-1">
            <h3>Genera producto con IA</h3>
            <p class="tw-text-sm tw-text-[#405F7F]">Automatiza</p>
          </div>
          <button @click="handleSubmit" class="tw-bg-yellow-500 hover:tw-bg-white tw-text-yellow-900 tw-font-bold tw-rounded-md tw-transition-all tw-duration-500 tw-px-2 tw-py-1">
            GENERAR
          </button>
        </div>
        <div class="tw-flex tw-flex-col tw-items-start tw-rounded-md tw-gap-3 tw-mt-3">
          <h3>Estado</h3>
          <select class="tw-bg-[#1E1E29] tw-outline-0 tw-rounded-md tw-p-2" v-model="state.productStatus">
            <option value="activo">Activo</option>
            <option value="inactivo">Inactivo</option>
          </select>
        </div>
        <div class="tw-flex tw-flex-col tw-items-start tw-rounded-md tw-mt-3">
          <div class="tw-w-full tw-flex tw-justify-between tw-items-center">
            <h1 class="tw-text-md tw-text-yellow-500 tw-font-bold">Configuración de publicación</h1>
            <svg xmlns="http://www.w3.org/2000/svg" class="tw-cursor-pointer" width="25px" height="25px" viewBox="0 0 24 24">
              <path fill="#ffae00" d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-6 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4m12 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4" />
            </svg>
          </div>
          <div class="tw-flex tw-items-center tw-gap-2 tw-mt-1">
            <h3>Canales de venta</h3>
          </div>
          <div class="tw-flex tw-items-center tw-gap-1">
            <input type="checkbox" v-model="state.salesChannels.tiendaOnline" class="cyberpunk-checkbox" />
            <span>Tienda online</span>
          </div>
          <div class="tw-flex tw-items-center tw-gap-1">
            <input type="checkbox" v-model="state.salesChannels.tienda" class="cyberpunk-checkbox" />
            <span>Tienda</span>
          </div>
          <div class="tw-flex tw-items-center tw-gap-1">
            <input type="checkbox" v-model="state.salesChannels.puntoDeVenta" class="cyberpunk-checkbox" />
            <span>Punto de venta</span>
          </div>
          <div class="tw-flex tw-items-center tw-gap-2 tw-mt-2">
            <h3>Mercado</h3>
          </div>
          <div class="tw-flex tw-items-center tw-gap-1">
            <input type="checkbox" v-model="state.market" class="cyberpunk-checkbox" />
            <span>Colombia</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script setup>
  import { reactive, ref, onMounted } from 'vue';
  import Quill from 'quill';
  import 'quill/dist/quill.snow.css';
  
  const editor = ref(null);
  let quill;
  
  const state = reactive({
    productTitle: '',
    productDescription: '',
    selectedFiles: [],
    productPrice: 0,
    productCost: 0,
    profit: "",
    margin: "",
    productComparisonPrice: 0,
    tax: false,
    productStatus: 'Activo',
    salesChannels: {
      tiendaOnline: false,
      tienda: false,
      puntoDeVenta: false,
    },
    market: 'Colombia',
  });
  
  onMounted(() => {
    quill = new Quill(editor.value, {
      theme: 'snow',
      placeholder: 'Crea una descripción',
      modules: {
        toolbar: [
          [{ 'header': [1, 2, 3, false] }],
          [{ 'size': [false, 'large', 'huge'] }],
          ['bold', 'italic'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          ['image'],
          ['clean']
        ]
      }
    });
  });
  
  const handleSubmit = () => {
    state.productDescription = quill.root.innerHTML;
    console.log(state);
  };
  
  function handleFileChange(event) {
    const selectedFiles = event.target.files;
    state.selectedFiles = Array.from(selectedFiles);
  }
  </script>
  
  <style scoped>
  .editor {
    background-color: rgb(55, 65, 81);
    border-color: transparent;
  }
  
  .cyberpunk-checkbox {
    appearance: none;
    width: 14px;
    height: 14px;
    border: 2px solid #EAB308;
    border-radius: 50%;
    background-color: transparent;
    display: inline-block;
    position: relative;
    cursor: pointer;
  }
  
  .cyberpunk-checkbox:before {
    content: "";
    background-color: #EAB308;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 7px;
    height: 7px;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
  }
  
  .cyberpunk-checkbox:checked:before {
    transform: translate(-50%, -50%) scale(1);
  }
  </style>
  