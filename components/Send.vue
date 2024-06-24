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
    <div class="flex justify-center">
        <label for="phone_number" class="hidden">Phone number:</label>

        <input type="text" v-model="phone" placeholder="Phone number" name="phone_number"
        class="rounded-l-lg border bg-white py-3 px-4 text-2xl focus:outline-none focus:ring-2 focus:ring-green-200">
        <button @click="send" class="rounded-r-lg bg-green-400 p-3 px-4 text-xl font-semibold text-green-900">Send</button>
    </div>
</template>