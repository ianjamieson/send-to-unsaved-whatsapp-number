export const useSettingsStore = defineStore('SettingsStore', () => {
    const pasteFromClipboard = ref<boolean>(true);
    const saveToHistory = ref<boolean>(false);

    const all = {
        pasteFromClipboard,
        saveToHistory
    };

    const can = (setting: string) => {
        return !!all[setting].value;
    }

    return {
        can,
        ...all
    };
}, {
    persist: true
});