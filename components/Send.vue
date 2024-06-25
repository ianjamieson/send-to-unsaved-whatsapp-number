<script setup lang="ts">
import { countries } from '~/data/countries';
import { usePhoneStore } from '~/stores/PhoneStore';

const phone = ref('');
const country = ref<typeof countries[number]>();
const phoneIsValid = ref(false);
const phoneStore = usePhoneStore();

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

    // find country
    country.value = countries.find(country => country.dial_code === phoneCheck.dialCode.value?.two) ?? null


})

// check clipboard for phone number
onMounted(() => {
    if (navigator.clipboard) {
        setInterval(() => {
            if (!document.hasFocus()) {
                return
            }
            navigator.clipboard.readText().then(text => {
                const phoneCheck = usePhoneCheck(text)

                if (phoneCheck.isValid.value && phone.value === '') {
                    phone.value = text
                }
            })
        }, 1000)
    }
})

</script>

<template>
    <div>
        <div class="flex justify-center">
            <label for="phone_number" class="hidden">Phone number:</label>
            <!-- <select ref="country" class="w-[75px] rounded-l-lg text-center">
                <option v-for="country in countries"
                    :key="country.code"
                    :value="country.dial_code">
                    {{ country.flag }} {{ country.dial_code }}
                </option>
            </select> -->
            <div class="relative">
                <div class="absolute left-1 top-1/2 -mt-4 text-3xl">
                    {{ country?.flag }}
                </div>
                <input type="text" v-model="phone" placeholder="Phone number" name="phone_number"
                class="pl-10 rounded-l-lg border bg-white py-3 px-4 text-2xl focus:outline-none focus:ring-2 focus:ring-green-200">
            </div>

            <button
                :disabled="!phoneIsValid"
                @click="send"
                class="rounded-r-lg bg-green-400 p-3 px-4 text-xl font-semibold text-green-900
                disabled:opacity-50 disabled:cursor-not-allowed"
            >Send</button>
        </div>
        <!-- <div class="text-sm bg-green-300">
            Pasted from clipboard: {{ phone }}
        </div> -->
        <div v-if="!phoneIsValid && phone.length > 3">
            Please enter a valid phone number
        </div>
    </div>
</template>