<script setup lang="ts">
useHead({
    title: 'Enter your phone number',
    titleTemplate: '%s | Send to Unsaved WhatsApp Number',
})

</script>

<template>
    <div class="overflow-x-hidden min-h-screen">
        <div class="bg-gradient-to-br from-green-600 to-green-700 relative h-screen w-screen">
            <div class="absolute inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center">
                <main>
                    <div class="space-y-8">
                        <slot />
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>