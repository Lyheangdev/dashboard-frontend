<script setup lang="ts">
import IconSearch from '~~/public/icons/search.svg'

const isCollapse = inject(COLLAPSE_KEY)
const props = defineProps<{ menu: Menu | undefined }>()
</script>

<template>
  <Transition name="slideX" mode="out-in">
    <div
      v-if="!isCollapse"
      class="relative flex max-h-screen w-60 max-w-60 flex-col gap-1 bg-white"
    >
      <div class="h-9 px-4 py-2">
        <h2 class="text-lg font-bold uppercase">Smart Dashboard</h2>
      </div>

      <div class="relative mt-1 px-3">
        <IconSearch class="absolute top-1/2 left-5 size-4! -translate-y-1/2 text-gray-500" filled />
        <input
          type="text"
          placeholder="Quick Menu ..."
          class="bg-primary w-full rounded-md border-none py-1.5 pr-4 pl-9 text-sm text-gray-500 outline-0 placeholder:text-[13px] placeholder:text-gray-400"
        />
      </div>
      <div class="bg-primary mx-auto h-px w-5/6" />
      <div class="px-4 py-2">
        <div v-for="m in menu?.submenu || []" :key="m.key" class="py-3">
          <p v-if="m?.label" class="text-sm font-semibold text-gray-400">{{ m?.label }}</p>
          <Transition name="fade" mode="out-in" appear>
            <div
              :key="menu?.key"
              class="mt-4 flex w-fit flex-col gap-4 border-l border-l-black/10 py-1.5 pl-4"
            >
              <div v-for="sm in m?.subitems || []" :key="sm?.key">
                <p v-if="sm?.label" class="text-sm font-medium text-gray-600">{{ sm.label }}</p>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <div class="absolute right-1.5 bottom-2 left-1.5">
        <div class="bg-primary flex items-center gap-2 rounded-xl border border-gray-200 p-1.5">
          <div class="relative w-fit overflow-hidden rounded-full bg-white">
            <NuxtImg
              class="size-10 object-cover"
              quality="80"
              src="/images/my-profile.png"
              alt="my-profile.png"
            />
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
  transition:
    width 0.15s linear,
    opacity 0.1s linear;
}

.slideX-leave-active {
  transition:
    opacity 0.1s linear,
    width 0.15s linear 0.15s;
}

.slideX-leave-to {
  width: 0;
  opacity: 0;
}

.slideX-enter-active {
  transition:
    width 0.15s linear,
    opacity 0.2s linear 0.15s;
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
  transition:
    opacity 0.2s ease,
    transform 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-8px);
}
</style>
