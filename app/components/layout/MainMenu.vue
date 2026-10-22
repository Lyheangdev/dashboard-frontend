<script setup lang="ts">
import IconEarthLogo from '~~/public/icons/globe-logo.svg'
import IconLogout from '~~/public/icons/logout.svg'

defineProps < {activeMenuKey: string; menu: MenuList } > ()
defineEmits<{
    (e: 'click', key: string) : void
}>()
</script>

<template>
    <div class="flex flex-col items-center w-full overflow-x-clip max-w-14 bg-linear-to-b from-blue-500 to-blue-400 h-screen max-h-screen overflow-y-auto">
        <IconEarthLogo class="size-18! fill-white" filled/>
        <nav class="relative flex flex-col gap-3.5">
            <div role="button" v-for="m in menu" :key="m.key" class="p-1.5 rounded-xl cursor-pointer hover:bg-white/20 transition-all hover:-translate-x-0.5 duration-200 ease" 
            :class="[m.key == activeMenuKey ? 'bg-white/20' : '']"
            @click.stop="$emit('click', m?.key)"
            >
                <component :is="m.icon" class="size-6! text-gray-100!" filled/>
            </div>
        </nav>
          <button class="absolute bottom-6 group cursor-pointer">
                <IconLogout class="size-6! text-white group-hover:text-gray-300 duration-300 ease" filled/>
            </button>
    </div>
</template>