<script setup lang="ts">
// import { usePhoneStore } from '~/stores/PhoneStore';

// const phoneStore = usePhoneStore();

useHead({
    title: 'Enter your phone number',
    meta: [
        {
            name: 'description',
            content: 'Send a message directly to a phone number on WhatsApp without having to save the number as a contact on your phone'
        }
    ]
});


</script>
<template>
    <div class="space-y-8 text-center">
        <h1 class="font-extrabold text-white text-3xl sm:text-4xl md:text-5xl md:leading-tight">
            WhatsApp Unsaved Number
        </h1>
        <p class="font-secondary text-white opacity-70 md:text-lg lg:text-xl">
            Enter phone a number you wish to contact in the field below. Make sure you include a country code.
        </p>
        <Send/>
        <!-- <div>
            <button @click="phoneStore.clear()">Clear all records</button>
            <div v-for="record in phoneStore.records" :key="record.phone">
                <p>{{ record.phone }}</p>
                <p>{{ record.date }}</p>
            </div>
        </div> -->
    </div>

    <PoweredByNovaMantis class="fixed right-3 bottom-6"/>
</template>