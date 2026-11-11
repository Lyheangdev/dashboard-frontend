<script setup lang="ts">
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';

import IconClose from '~~/public/icons/x-close.svg';

interface Props {
  title?: string;
  subtitle?: string;
  preventAutoClose?: boolean;
}

withDefaults(defineProps<Props>(), { preventAutoClose: false });

const model = defineModel<boolean>({ required: true });

const closeModal = () => {
  model.value = false;
};

// const openModal = () => {
//   model.value = true;
// };
</script>

<template>
  <TransitionRoot appear :show="model" as="template">
    <Dialog as="div" @close="!preventAutoClose ? closeModal() : null" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-lg transition-all"
            >
              <div class="flex items-center justify-between px-5 pt-4">
                <div class="flex flex-col gap-0">
                  <DialogTitle
                    v-if="title"
                    as="h3"
                    class="text-lg leading-6 font-semibold text-gray-900"
                  >
                    {{ title }}
                  </DialogTitle>
                  <p v-if="subtitle" class="text-[13px] text-gray-600">{{ subtitle }}</p>
                </div>

                <button
                  @click.stop="closeModal"
                  class="ease-linears cursor-pointer rounded-lg bg-blue-50 p-1"
                >
                  <IconClose
                    class="size-5! text-blue-500 transition-all duration-300 hover:scale-75 hover:rotate-90"
                    filled
                  />
                </button>
              </div>

              <div class="mt-2.5 h-px w-full bg-gray-200/60" />

              <div class="px-5 pt-3 pb-4">
                <slot />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
