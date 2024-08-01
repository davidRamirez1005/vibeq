<template>
    <component :is="currentFormComponent" />
  </template>
  
  <script>
  import ProductosForm from './Forms/FormProducts.vue';
  import ServiciosForm from './Forms/FormServices.vue';
  
  export default {
    name: 'FormContainer',
    components: {
      ProductosForm,
      ServiciosForm
    },
    data() {
      return {
        currentFormComponent: null
      };
    },
    watch: {
      $route: 'updateCurrentFormComponent'
    },
    created() {
      this.updateCurrentFormComponent();
    },
    methods: {
      updateCurrentFormComponent() {
        const path = this.$route.path;
        if (path === '/registrar-productos') {
          this.currentFormComponent = 'ProductosForm';
        } else if (path === '/registrar-servicios') {
          this.currentFormComponent = 'ServiciosForm';
        } else {
          this.currentFormComponent = null;
        }
      }
    }
  };
  </script>
  