<script setup lang="ts">
// import { usePhoneStore } from '~/stores/PhoneStore';

// const phoneStore = usePhoneStore();


</script>
<template>

    <h1 class="font-extrabold text-white text-3xl sm:text-4xl md:text-5xl md:leading-tight">
        Send to Unsaved WhatsApp Number
    </h1>
    <p class="font-secondary text-slate-50 md:text-lg lg:text-xl">Use the form below to paste your phone number.</p>

    <Send></Send>

    <!-- <div>
        <button @click="phoneStore.clear()">Clear all records</button>
        <div v-for="record in phoneStore.records" :key="record.phone">
            <p>{{ record.phone }}</p>
            <p>{{ record.date }}</p>
        </div>
    </div> -->
</template>