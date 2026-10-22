[7/10/26 11:42 AM] Lyheang:<script setup lang="ts">
import IconSearch from '~~/public/icons/search.svg';
const open = ref(false);

const searchTerm = ref('');

const emit = defineEmits < {
    (e: 'search', value: string): void;
} > ();


const handleClose = () => {
    open.value = false;
};

const handleOpen = () => {
    open.value = true;
};

const handleSearch = (event: KeyboardEvent) => {
    const element = event.target as HTMLInputElement;
    handleOpen();
    emit('search', element.value);
};
</script>

<template>
    <div class="relative z-50!">
        <div class="p-1.5 bg-blue-500 absolute top-1/2 left-1.5 -translate-y-1/2 rounded-lg">
            <IconSearch class="h-4! w-5! text-white" filled />
        </div>
    
        <input v-model="searchTerm" ref="global-search-input-ref" class="focus:border-blue-500 focus:border-2 bg-primary w-80 h-10 rounded-xl outline-0 border border-gray-400/15 ring-0 pl-12 pr-18 text-gray-700 text-sm font-normal placeholder:text-[13px] placeholder:text-gray-500"
            placeholder="Search by project ..." @keyup.ctrl.enter.prevent="handleSearch" @focus="handleOpen" @blur="handleClose" />
    
        <button class="absolute cursor-pointer top-1/2 -translate-y-1/2 right-1.5 text-[11px] text-white px-2 rounded-lg py-1.5 bg-blue-500">
            Find Now
        </button>
    </div>
</template>

<style scoped>
.fade-out-enter-active,
.fade-out-leave-active {
    transition: opacity 0.3s ease;
}

.fade-out-enter-from,
.fade-out-leave-to {
    opacity: 0;
}
</style>