<template>
    <div>
        <div>
            <br>
            <div class="row">
                <div class="col-1 boton-filtro">
                    <DrawerFiltro />
                </div>
                <div class="col-11">
                    <h1 class="">Estado del pedido</h1>
                    <br>
                    <CheckboxInput :estados="orderStatuses"  @status-filtered="filterOrders" />
                </div>
            </div>
            <hr>
        </div>
        <div class="tw-grid tw-gap-4 tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4">
            <ProductCard 
                v-for="order in filteredOrders" 
                :key="order.id" 
                :order="order" 
                :orderStatuses="orderStatuses" 
                @set-status="updateOrderStatus"
            />
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ProductCard from "../Pedidos/ProductCard";
import DrawerFiltro from "../Pedidos/DrawerFiltro";
import CheckboxInput from '../../components/Inputs/CheckboxInput.vue';

const orderStatuses = ref([
  { label: 'Pendiente', color: '#eab308', bgColor: '#fefcbf' },
  { label: 'En Proceso', color: '#0284c7', bgColor: '#bfdbfe' },
  { label: 'Completado', color: '#16a34a', bgColor: '#d1fae5' },
  { label: 'Rechazado', color: '#dc2626', bgColor: '#fef2f2' } 
]);

const orders = ref([
    {
        "id": 351,
        "date": "05 Feb 2023, 08:28 PM",
        "avatar": "https://picsum.photos/50",
        "items": [
            {
                "name": "Vegetable Mixups",
                "description": "Vegetable Fritters with Egg",
                "price": 5.30,
                "quantity": 1,
                "image": "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg"
            },
            {
                "name": "Chinese Takeout Dish",
                "description": "Fresh Prawn mix salad",
                "price": 5.30,
                "quantity": 1,
                "image": "https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
        ]
    },
    {
        "id": 350,
        "date": "05 Feb 2023, 08:28 PM",
        "avatar": "https://picsum.photos/50",
        "items": [
            {
                "name": "Baked Pasted Dishes",
                "description": "Vegetable Fritters with Egg",
                "price": 2.48,
                "quantity": 1,
                "image": "https://images.pexels.com/photos/4109083/pexels-photo-4109083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
                "name": "Chinese Takeout Dish",
                "description": "Fresh Prawn mix salad",
                "price": 5.30,
                "quantity": 1,
                "image": "https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
        ]
    },
    {
        "id": 349,
        "date": "05 Feb 2023, 08:28 PM",
        "avatar": "https://picsum.photos/50",
        "items": [
            {
                "name": "Vegetable Mixups",
                "description": "Vegetable Fritters with Egg",
                "price": 5.30,
                "quantity": 1,
                "image": "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg"
            },
            {
                "name": "Chinese Takeout Dish",
                "description": "Fresh Prawn mix salad",
                "price": 5.30,
                "quantity": 1,
                "image": "https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
        ]
    }
]);

const selectedStatus = ref(null);

const filterOrders = (status) => {
    selectedStatus.value = status;
};

const filteredOrders = computed(() => {
    if (!selectedStatus.value) {
        return orders.value;
    }
    return orders.value.filter(order => {
        return order.status && order.status.label === selectedStatus.value;
    });
});

const updateOrderStatus = (status, order) => {
    console.log(order.id);
    
    const updatedOrder = orders.value.find(o => o.id === order.id);
    if (updatedOrder) {
        updatedOrder.status = status;
    }
};

</script>

<style scoped>
.boton-filtro{
    margin-top: 2rem;
}
</style>
