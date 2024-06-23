<script setup lang="ts">
import { usePhoneStore } from '~/stores/PhoneStore';

const phone = ref('');
const phoneStore = usePhoneStore();

const send = () => {
    phoneStore.add({
        phone: phone.value,
        date: new Date().toISOString()
    })
    navigateTo(`https://wa.me/${phone.value}`, { external: true })
}
</script>

<template>
    <div>
        <label for="">Phone number:</label>
        <input type="text" v-model="phone">
        <button @click="send">Send</button>
    </div>
</template>

<style scoped>
</style>