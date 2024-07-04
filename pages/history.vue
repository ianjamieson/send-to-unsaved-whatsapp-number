<script setup lang="ts">
useHead({
    title: 'Message History',
    meta: [
        {
            name: 'description',
            content: 'Keep a history of all the unsaved numbers you have sent messages to on WhatsApp without having to save the number as a contact on your phone.'
        }
    ]
});
</script>
<template>
    <div class="space-y-8 text-center">
        <h1 class="font-extrabold text-white text-3xl sm:text-4xl md:text-5xl md:leading-tight">
            WhatsApp Unsaved Number History
        </h1>
        <p class="font-secondary text-white opacity-70 md:text-lg lg:text-xl"/>
        <History/>
        <hr>
        <div>
            <NuxtLink to="/">
                <Button>Send to new number</Button>
            </NuxtLink>
        </div>
    </div>


</template>