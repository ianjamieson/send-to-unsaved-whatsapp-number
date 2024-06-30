import { countries } from '~/data/countries';

export const usePhoneCheck = (initialPhone: string) => {

    const phone = ref(initialPhone)
    const withoutWhitespace = computed(() => phone.value.replace(/\s/g, ''))


    const isValid = computed(() => /^\+[0-9]{1,3}[0-9]{8,14}$/.test(withoutWhitespace.value));

    const dialCode = computed(() => {
        return countries.find((country) => country.dial_code === withoutWhitespace.value.slice(0, country.dial_code.length)) ?? null;
    });

    return {
        withoutWhitespace,
        dialCode,
        isValid,
    }

}