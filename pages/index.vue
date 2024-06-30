<script setup lang="ts">
// import { usePhoneStore } from '~/stores/PhoneStore';

// const phoneStore = usePhoneStore();

useHead({
    title: 'Send to Unsaved WhatsApp Number',
    meta: [
        {
            name: 'description',
            content: 'Send a message directly to a phone number on WhatsApp without having to save it as a contact on your phone'
        }
    ]
});


</script>
<template>

    <h1 class="font-extrabold text-white text-3xl sm:text-4xl md:text-5xl md:leading-tight">
        Send to Unsaved WhatsApp Number
    </h1>
    <p class="font-secondary text-white opacity-70 md:text-lg lg:text-xl">
        Copy and paste the phone number you wish to contact in the field below. Make sure you include a country code.
    </p>

    <Send/>

    <!-- <div>
        <button @click="phoneStore.clear()">Clear all records</button>
        <div v-for="record in phoneStore.records" :key="record.phone">
            <p>{{ record.phone }}</p>
            <p>{{ record.date }}</p>
        </div>
    </div> -->

    <PoweredByNovaMantis class="fixed right-3 bottom-6"/>
</template>