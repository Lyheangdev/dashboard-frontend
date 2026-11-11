<script setup lang="ts">
import { useToaster } from '~/stores/useToaster';
import IconCircleCheckFill from '~~/public/icons/circle-check-fill.svg';
import IconClose from '~~/public/icons/x-close.svg';
import IconError from '~~/public/icons/error.svg';

const toaster = useToaster();

let timeoutId: ReturnType<typeof setTimeout> | undefined = undefined;

const closeToast = () => {
  toaster.close();
  window.clearTimeout(timeoutId);
};

watch(
  () => toaster?.isOpen,
  (open) => {
    if (!open) return;
    timeoutId = window.setTimeout(closeToast, Number(toaster?.duration) * 1000);
  },
);

onBeforeUnmount(() => {
  window.clearTimeout(timeoutId);
});
</script>

<template>
  <Teleport to="body">
    <Transition name="slide" mode="out-in">
      <div
        v-if="toaster?.isOpen"
        class="fixed z-40! overflow-hidden rounded-xl bg-linear-to-r from-green-800 to-green-500 py-2 pr-14 pl-3 shadow-2xl"
        :class="[
          { 'top-6 right-6': toaster?.position === 'top-right' },
          { 'top-6 right-1/2 translate-x-1/2': toaster?.position === 'top-center' },
          { 'right-6 bottom-6': toaster?.position === 'bottom-right' },
          { 'right-1/2 bottom-16 translate-1/2': toaster?.position === 'bottom-center' },
          { 'top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2': toaster?.position === 'center' },
          { 'from-red-800 to-red-500': toaster?.type === 'error' },
        ]"
      >
        <div class="flex items-center gap-3.5 pb-0.5">
          <div
            class="flex size-8 items-center justify-center rounded-full border border-gray-100/30 bg-white/10"
          >
            <IconCircleCheckFill
              v-if="toaster?.type === 'success'"
              class="size-6! text-white"
              filled
            />
            <IconError v-else class="size-6! text-white" filled />
          </div>
          <div>
            <h4 class="text-[15px] font-medium text-white">{{ toaster?.title || 'Default' }}</h4>
            <p class="text-xs text-gray-50">{{ toaster?.description || 'Default message' }}</p>
          </div>
        </div>

        <button
          @click.stop="toaster.close"
          class="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
        >
          <IconClose
            class="size-4! text-gray-50 duration-300 ease-linear hover:text-gray-200"
            filled
          />
        </button>

        <div class="absolute right-1 bottom-1 left-1 flex items-center gap-1 px-2">
          <div
            class="h-0.5 rounded-full bg-linear-to-r from-transparent via-green-500 via-98% to-transparent transition-all duration-500 ease-linear"
            :style="{
              animation: `toast-progress ${toaster?.duration}s linear forwards`,
            }"
            :class="[
              {
                'bg-linear-to-r from-transparent via-white via-98% to-transparent':
                  toaster?.type === 'error',
              },
            ]"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 700ms ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
