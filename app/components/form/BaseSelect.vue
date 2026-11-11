<script setup lang="ts">
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue';
import type { ISelectValue } from '~/shared/types/type.input';

import IconChevron from '~~/public/icons/chevron-right.svg';
import IconDoubleCheck from '~~/public/icons/double-check.svg';

const props = defineProps<{ placeholder?: string; values: Array<ISelectValue> }>();
const model = defineModel<ISelectValue | null>();
</script>

<template>
  <Listbox v-model="model">
    <ListboxButton
      class="flex cursor-pointer items-center justify-between rounded-md bg-gray-100 px-3.5 py-2 text-sm"
      v-slot="{ open }"
    >
      <span class="text-gray-500">{{ model?.label ? model?.label : placeholder }}</span>
      <div
        class="ease flex items-center justify-center transition-transform duration-200"
        :class="[open ? '-rotate-90' : 'rotate-90']"
      >
        <IconChevron class="size-4! text-gray-500" filled />
      </div>
    </ListboxButton>
    <Transition name="fade" mode="out-in">
      <ListboxOptions
        class="absolute top-full mt-1 flex w-full flex-col gap-1 rounded-lg border border-gray-200 bg-white p-2 text-sm"
      >
        <template v-if="values?.length">
          <ListboxOption
            v-for="tvalue in [{ label: '', value: '', disabled: false }, ...(values || [])]"
            :key="tvalue.label"
            :value="tvalue"
            :disabled="tvalue.disabled"
            class="flex cursor-pointer items-center justify-between rounded-md px-2.5 py-2 text-sm text-gray-700 transition-colors duration-300 ease-linear hover:bg-gray-100/70"
            :class="[{ 'bg-gray-100/70 font-medium': model?.value === tvalue?.value }]"
          >
            <span :class="[{ 'text-gray-400!': !tvalue?.label }]">
              {{ tvalue?.label ? tvalue?.label : 'Default' }}
            </span>
            <IconDoubleCheck
              v-if="model?.value === tvalue?.value"
              class="size-4! text-blue-500"
              filled
            />
          </ListboxOption>
        </template>
        <template v-else>
          <ListboxOption class="text-center">No data</ListboxOption>
        </template>
      </ListboxOptions>
    </Transition>
  </Listbox>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
