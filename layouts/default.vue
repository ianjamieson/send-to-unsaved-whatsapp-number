<script setup lang="ts">
useHead({
    title: 'Enter your phone number',
    titleTemplate: '%s | Send to Unsaved WhatsApp Number',
})

</script>

<template>
    <header>
        header
    </header>
    <main>
        <slot></slot>
    </main>
    <footer>
        footer
    </footer>
</template>

<style scoped>
header {
    height: 4rem;
    background: #ccc;
}
main {
    min-height: calc(100vh - 8rem);
}
footer {
    height: 4rem;
    background: #ccc;
}
</style>