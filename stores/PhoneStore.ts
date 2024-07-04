export interface PhoneRecords {
    name?: string;
    phone: string;
    date: string;
}

export const usePhoneStore = defineStore('PhoneStore', () => {
    const settingsStore = useSettingsStore();

    const records = ref<PhoneRecords[]>([]);

    const add = (record: PhoneRecords) => {
        if (!settingsStore.can('saveToHistory')) {
            return;
        }

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