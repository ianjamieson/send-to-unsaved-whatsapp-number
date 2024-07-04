<script setup lang="ts">
useHead({
    titleTemplate: '%s | WhatsApp Unsaved Number',
})

</script>

<template>
    <div class="overflow-x-hidden min-h-screen">
        <div class="bg-gradient-to-br from-green-600 to-green-700 relative h-screen w-screen flex items-center justify-center">
            <div class="w-full max-w-lg">
                <main class="p-6">
                    <slot />
                </main>
            </div>
        </div>
    </div>

    <PoweredByNovaMantis class="fixed right-3 bottom-6"/>
</template>