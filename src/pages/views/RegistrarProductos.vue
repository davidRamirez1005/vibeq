<template>
    <div class="tw-grid tw-gap-4 tw-grid-cols-1 sm:tw-grid-cols-2">
      <div class="tw-bg-[#27293D] tw-rounded-md tw-p-4">
        <div>
          <base-input
            label="Titulo del producto"
            placeholder="Camiseta Nike"
            v-model="productTitle"
          ></base-input>
        </div>
        <div class="tw-bg-[#1E1E29] tw-flex tw-flex-col tw-items-center tw-justify-center tw-rounded-md tw-p-5 tw-mt-5 tw-gap-3">
          <div class="tw-flex tw-items-center tw-gap-2">
            <button class="tw-bg-[#27293D] hover:tw-bg-pink-500 tw-rounded-md tw-text-white tw-outline-0 tw-transition-all tw-duration-500 p-2">
              Generar con IA
            </button>
            <label for="fileInput" class="tw-text-[#405F7F] hover:tw-text-gray-400 tw-cursor-pointer tw-pt-[8px]">
              Select existing
            </label>
            <input type="file" id="fileInput" class="tw-hidden" @change="handleFileChange" multiple />
          </div>
          <p class="tw-text-gray-500">Accepts images, videos, or 3D models</p>
        </div>
        <div class="tw-flex tw-gap-5 tw-pt-5">
          <base-input
            label="Precio"
            placeholder="$ 0.00"
            v-model="productPrice"
          ></base-input>
          <base-input
            label="Precio comparación"
            placeholder="$ 0.00"
            v-model="productComparisonPrice"
          ></base-input>
        </div>
      </div>
      <div class="tw-bg-[#27293D] tw-rounded-md tw-p-4">
        <div class="tw-bg-[#1E1E29] tw-flex tw-flex-col tw-items-start tw-rounded-md tw-gap-3 tw-p-5">
          <div class="tw-flex tw-flex-col gap-1">
            <h3>Genera producto con IA</h3>
            <p class="tw-text-sm tw-text-[#405F7F]">Automatiza</p>
          </div>
          <button class="tw-bg-yellow-500 hover:tw-bg-white tw-text-yellow-900 tw-font-bold tw-rounded-md tw-transition-all tw-duration-500 tw-px-2 tw-py-1">
            GENERAR
          </button>
        </div>
        <div class="tw-flex tw-flex-col tw-items-start tw-rounded-md tw-gap-3 tw-mt-3">
          <h3>Estado</h3>
          <select id="countries" class="tw-bg-[#1E1E29] tw-outline-0 tw-rounded-md tw-p-2">
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
            <input type="checkbox" v-model="salesChannels.tiendaOnline" class="cyberpunk-checkbox" />
            <span>Tienda online</span>
          </div>
          <div class="tw-flex tw-items-center tw-gap-1">
            <input type="checkbox" v-model="salesChannels.tienda" class="cyberpunk-checkbox" />
            <span>Tienda</span>
          </div>
          <div class="tw-flex tw-items-center tw-gap-1">
            <input type="checkbox" v-model="salesChannels.puntoDeVenta" class="cyberpunk-checkbox" />
            <span>Punto de venta</span>
          </div>
          <div class="tw-flex tw-items-center tw-gap-2 tw-mt-2">
            <h3>Mercado</h3>
          </div>
          <div class="tw-flex tw-items-center tw-gap-1">
            <input type="checkbox" v-model="market" class="cyberpunk-checkbox" />
            <span>Colombia</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        productTitle: '',
        productDescription: '',
        selectedFiles: [],
        productPrice: 0,
        productComparisonPrice: 0,
        productStatus: 'Activada',
        salesChannels: {
          tiendaOnline: false,
          tienda: false,
          puntoDeVenta: false,
        },
        market: 'Colombia',
        perro: 'Lili'
      };
    },
    methods: {
      handleFileChange(event) {
        const selectedFiles = event.target.files;
        this.files = Array.from(selectedFiles);
        console.log(this.files);
      },
    }
  };
  </script>
  
  <style scoped>
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
  