<script setup lang="ts">
import type { countries } from '~/data/countries';
import { usePhoneStore } from '~/stores/PhoneStore';

const phone = ref('');
const country = ref<typeof countries[number]>();
const phoneIsValid = ref(false);
const phoneStore = usePhoneStore();

const settings = ref({
    pasteFromClipboard: true,
    saveToHistory: true
})

const send = () => {
    const phoneCheck = usePhoneCheck(phone.value)
    phoneStore.add({
        phone: phone.value,
        date: new Date().toISOString()
    })
    navigateTo(`https://wa.me/${phoneCheck.withoutWhitespace.value}`, { external: true })
}

// validate phone
watch(phone, (value) => {
    const phoneCheck = usePhoneCheck(value);
    phoneIsValid.value = phoneCheck.isValid.value;
    country.value = phoneCheck.dialCode.value;
})

// check clipboard for phone number
onMounted(() => {
    if (navigator.clipboard) {
        setInterval(() => {
            if (!document.hasFocus() || !settings.value.pasteFromClipboard) {
                return
            }
            navigator.clipboard.readText().then(text => {
                const phoneCheck = usePhoneCheck(text)

                if (phoneCheck.isValid.value && phone.value === '') {
                    phone.value = text
                }
            })
        }, 250)
    }
})

</script>

<template>
    <div>
        <div class="flex justify-center">
            <div class="relative">
                <div class="absolute left-1 top-1/2 -mt-4 text-3xl">
                    {{ country?.flag }}
                </div>
                <input
                v-model="phone" type="text" placeholder="Phone number" name="phone_number"
                class="w-full pl-10 rounded-l-lg border bg-white py-3 px-4 text-xl focus:outline-none focus:ring-2 focus:ring-green-200">
            </div>
            <Button
                class="rounded-none !rounded-r-lg"
                :disabled="!phoneIsValid"
                @click="send"
            >Send</Button>
        </div>
        <div class="h-12 p-3 text-yellow-300">
            <template v-if="phone.length > 3">

                <template v-if="!country">
                    Please enter a valid country prefix, for example +44 for UK
                </template>

                <template v-else-if="!phoneIsValid">
                    Please enter a valid phone number
                </template>
            </template>
        </div>
        <div class="flex justify-center">
            <div class="space-y-3">
                <label for="pasteFromClipboard" class="flex items-center">
                    <input
                        id="pasteFromClipboard"
                        v-model="settings.pasteFromClipboard"
                        type="checkbox"
                        class="mr-2"
                    >
                    <span class="text-white opacity-70">Automatically Paste from clipboard</span>
                </label>
                <label for="saveToHistory" class="flex items-center">
                    <input
                        id="saveToHistory"
                        v-model="settings.saveToHistory"
                        type="checkbox"
                        class="mr-2"
                    >
                    <span class="text-white opacity-70">Save each phone number to history</span>
                </label>
            </div>
        </div>
    </div>

</template>