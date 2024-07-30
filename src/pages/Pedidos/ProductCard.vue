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
            <div>
                <button v-if="order.status === 'completed'"
                    class="tw-bg-green-100 tw-text-green-700 tw-px-2 tw-py-2 tw-rounded">COMPLETED</button>
                <button v-if="order.status === 'rejected'"
                    class="tw-bg-red-100 tw-text-red-700 tw-px-2 tw-py-2 tw-rounded">REJECTED</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        order: {
            type: Object,
            required: true,
        },
    },
};
</script>
