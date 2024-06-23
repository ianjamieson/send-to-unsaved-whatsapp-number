export interface PhoneRecords {
    name?: string;
    phone: string;
    date: string;
}

export const usePhoneStore = defineStore('PhoneStore', () => {
    const records = ref<PhoneRecords[]>([]);

    const add = (record: PhoneRecords) => {
        records.value.push(record);
    };

    const clear = () => {
        records.value = [];
    }

    return {
        records,
        add,
        clear
    };
}, {
    persist: true
});