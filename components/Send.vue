<script setup lang="ts">
import type { countries } from '~/data/countries';
import { usePhoneStore } from '~/stores/PhoneStore';

const phone = ref('');
const country = ref<typeof countries[number]>();
const phoneIsValid = ref(false);
const phoneStore = usePhoneStore();

const settings = ref({
    pasteFromClipboard: true
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
            <button
                :disabled="!phoneIsValid"
                class="rounded-r-lg bg-green-400 p-3 px-4 text-xl font-semibold text-green-900
                disabled:opacity-50 disabled:cursor-not-allowed flex-none"
                @click="send"
            >Send</button>
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
            <label for="pasteFromClipboard" class="flex items-center">
                <input
                    id="pasteFromClipboard"
                    v-model="settings.pasteFromClipboard"
                    type="checkbox"
                    class="mr-2"
                >
                <span class="text-white opacity-70">Automatically Paste from clipboard</span>
            </label>
        </div>
    </div>

    <div class="flex items-center">
        <div class="flex items-center">
            <!-- <label for="phone_number" class="hidden">Phone number:</label> -->
            <!-- <select ref="country" class="w-[75px] rounded-l-lg text-center">
                <option v-for="country in countries"
                    :key="country.code"
                    :value="country.dial_code">
                    {{ country.flag }} {{ country.dial_code }}
                </option>
            </select> -->


        </div>

    </div>

</template>