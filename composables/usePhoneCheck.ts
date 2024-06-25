export const usePhoneCheck = (initialPhone: string) => {

    const phone = ref(initialPhone)
    const withoutWhitespace = computed(() => phone.value.replace(/\s/g, ''))


    const isValid = computed(() => /^\+[0-9]{1,3}[0-9]{3,14}$/.test(withoutWhitespace.value));

    const dialCode = computed(() => {
        // todo - match 1 / 3 digiits
        return withoutWhitespace.value.match(/(?<two>^\+[0-9]{2})/).groups
    });

    return {
        withoutWhitespace,
        dialCode,
        isValid,
    }

}