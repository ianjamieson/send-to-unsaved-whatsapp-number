<script setup lang="ts">
useHead({
    title: 'Enter your phone number',
    titleTemplate: '%s | Send to Unsaved WhatsApp Number',
})

</script>

<template>
    <div class="overflow-x-hidden min-h-screen">
        <div class="bg-gradient-to-br from-green-600 to-green-700 relative h-screen w-screen flex items-center justify-center">
            <!-- <slot /> -->
            <!-- <div class="absolute inset-0 flex flex-col justify-center items-center w-full md:max-w-lg mx-auto"> -->
            <div class="w-full max-w-lg">
                <main class="p-6">
                    <slot />
                </main>
            </div>
        </div>
    </div>
</template>