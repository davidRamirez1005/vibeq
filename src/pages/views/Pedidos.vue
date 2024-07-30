<template>
    <div class="tw-grid tw-grid-cols-3 tw-gap-4">
        <ProductCard v-for="order in orders" :key="order.id" :order="order" />
    </div>
</template>

<script>
import ProductCard from "../Pedidos/ProductCard";

const orders = [
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
        ],
        "status": "completed"
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
        ],
        "status": "rejected"
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
        ],
        "status": "completed"
    }
];

export default {
    components: {
        ProductCard,
    },
    data() {
        return {
            orders: orders,
        };
    },
};
</script>

<style scoped></style>
