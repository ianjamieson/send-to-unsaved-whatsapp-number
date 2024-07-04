<script setup lang="ts">
import { usePhoneStore } from '~/stores/PhoneStore';

const phoneStore = usePhoneStore();

const createDate = (date: string) => {
    const formattedDate = new Date(date)
    return `${formattedDate.getDate()}/${formattedDate.getMonth() + 1}/${formattedDate.getFullYear()} at ${formattedDate.getHours()}:${formattedDate.getMinutes()}`
}
const recordsByDate = computed(() => {
    return [...phoneStore.records].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
})

</script>
<template>
    <div v-if="recordsByDate.length > 0" class="flex flex-col">
        <div class="bg-black bg-opacity-20 shadow-lg max-h-96 overflow-y-auto rounded-lg">
            <div class="divide-y">
                <div v-for="record in recordsByDate" :key="record.phone">
                    <div class="flex space-x-3 px-4 py-3 justify-center items-center text-white">
                        <div>
                            <p>{{ record.phone }}</p>
                        </div>
                        <div>
                            <p>{{ createDate(record.date) }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-right pt-4">
            <button
                class="bg-yellow-50 p-2 rounded-lg"
                @click="phoneStore.clear()"
            >Clear History</button>
        </div>
    </div>
</template>