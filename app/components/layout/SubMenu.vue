<script setup lang="ts">
import IconSearch from '~~/public/icons/search.svg';

const isCollapse = inject(COLLAPSE_KEY)
const props = defineProps < { menu: Menu | undefined } > ()
</script>

<template>
    <Transition name="slideX" mode="out-in">
        <div v-if="!isCollapse" class="relative flex flex-col gap-1 w-60 max-w-60 bg-white max-h-screen">
            <div class="px-4 py-2 h-9">
                <h2 class="font-semibold capitalize text-lg">Content Management</h2>
            </div>
    
            <div class="relative px-3 mt-1">
                <IconSearch class="absolute top-1/2 -translate-y-1/2 left-5 size-4! text-gray-500" filled/>
                <input type="text" placeholder="Quick Menu ..." class="rounded-md outline-0 border-none pl-9 pr-4 py-1.5 text-sm bg-primary w-full text-gray-500 placeholder:text-gray-400 placeholder:text-[13px]" />
            </div>
            <div class="w-5/6 h-px bg-primary mx-auto" />
            <div class="px-4 py-2">
                <div v-for="m in (menu?.submenu || [])" :key="m.key" class="py-3">
                    <p v-if="m?.label" class="text-sm font-semibold text-gray-400">{{ m?.label }}</p>
                    <Transition name="fade" mode="out-in" appear>
                        <div :key="menu?.key" class="mt-4 flex flex-col gap-4 pl-4 py-1.5 w-fit border-l border-l-black/10">
                            <div v-for="sm in (m?.subitems || [])" :key="sm?.key">
                                <p v-if="sm?.label" class="text-sm text-gray-600 font-medium">{{ sm.label }}</p>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>

            <div class="absolute bottom-2 left-1.5 right-1.5">
                <div class="flex border border-gray-200 items-center gap-2 p-1.5 rounded-xl bg-primary">
                    <div class="relative bg-white w-fit rounded-full overflow-hidden">
                        <NuxtImg class="size-10 object-cover" quality="80" src="/images/my-profile.png" alt="my-profile.png" />
                    </div>
                    <div class="flex flex-col">
                        <p class="text-[13px] font-medium text-gray-700">lyheangdev@gmail.com</p>
                        <p class="text-xs text-gray-400">Administrator</p>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.slideX-enter-active,
.slideX-leave-active {
    overflow: hidden;
    transition: width 0.15s linear, opacity 0.1s linear;
}

.slideX-leave-active {
    transition: opacity 0.1s linear, width 0.15s linear 0.15s;
}

.slideX-leave-to {
    width: 0;
    opacity: 0;
}

.slideX-enter-active {
    transition: width 0.15s linear, opacity 0.2s linear 0.15s;
}

.slideX-enter-from {
    width: 0;
    opacity: 0;
}

.slideX-enter-to,
.slideX-leave-from {
    width: 240px;
    opacity: 1;
}

/* fade animaion */

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease, transform 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateX(-8px);
}
</style>