<script setup lang="ts">
import { usePhoneStore } from '~/stores/PhoneStore';

const phoneStore = usePhoneStore();


</script>
<template>

    <h1>
        Send to Unsaved WhatsApp Number
    </h1>

    <Send></Send>

    <div class="records">
        <button @click="phoneStore.clear()">Clear all records</button>
        <div v-for="record in phoneStore.records" :key="record.phone">
            <p>{{ record.phone }}</p>
            <p>{{ record.date }}</p>
        </div>
    </div>
</template>

<style scoped>
.records div {
    display: flex;
    gap: 4px;
}
</style>