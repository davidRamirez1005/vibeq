<template>
    <div>
        <br>
        <div class="row">
            <div class="col-1 boton-filtro">
                <DrawerFiltro />
            </div>
            <div class="col-11">
                <h1 class="">Estado del pedido</h1>
                <br>
                <CheckboxInput :estados="estados" />
            </div>
        </div>
        <hr>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import CheckboxInput from '../../components/Inputs/CheckboxInput.vue';
import DrawerFiltro from '../Pedidos/DrawerFiltro.vue';

const estados = ref([
    { label: 'Pendientes', color: 'yellow' },
    { label: 'En Proceso', color: 'blue' },
    { label: 'Completados', color: 'green' },
    { label: 'Rechazados', color: 'red' },
]);
</script>

<style scoped>
.boton-filtro{
    margin-top: 2rem;
}
</style>