<script setup lang="ts">
import type { ISelectValue } from '~/shared/types/type.input';
import { useToaster } from '~/stores/useToaster';

useHead({
  title: 'Yield Input',
});

definePageMeta({
  layout: 'admin',
});

const openModal = ref(false);

const email = ref('');
const activeLineSelect = ref<ISelectValue>({ label: '', value: '', disabled: false });

const toat = useToaster();

const openToast = () => {
  toat.open({
    isOpen: true,
    title: 'Delete Success',
    description: 'Operation successfully with line creation.',
    type: 'success',
    position: 'top-right',
  });
};
</script>

<template>
  <PageWrapper page-label="Yield Report">
    <button @click.stop="openToast">Open Toast</button>
    <div class="grid grid-cols-4 gap-3">
      <InputFieldSet label="Line Name" class="col-span-2">
        <BaseInput v-model="email" placeholder="Insert line name ..." />
      </InputFieldSet>
      <InputFieldSet label="Line Status" class="col-span-2">
        <BaseSelect
          placeholder="Select line status"
          v-model="activeLineSelect"
          :values="[
            {
              label: 'Running',
              value: 'running',
            },
            {
              label: 'Close Up',
              value: 'close-up',
            },
            {
              label: 'Maintain',
              value: 'maintain',
            },
            {
              label: 'Downtime',
              value: 'downtime',
            },
          ]"
        />
      </InputFieldSet>

      <InputFieldSet label="Line Remark" class="col-span-2">
        <BaseTextArea placeholder="Write line remark ..." :rows="5" :maxlength="500" />
      </InputFieldSet>
      <button @click.stop="openModal = true">Open Modal</button>
    </div>
    <Modal v-model="openModal" title="Create Line" prevent-auto-close>
      <div>
        <InputFieldSet label="Line Name" class="col-span-2">
          <BaseInput v-model="email" placeholder="Insert line name ..." />
        </InputFieldSet>
        <button
          class="mt-4 w-full cursor-pointer rounded-lg bg-blue-500 py-2.5 text-sm text-white duration-300 ease-linear hover:bg-blue-600"
        >
          Create Now
        </button>
      </div>
    </Modal>
  </PageWrapper>
</template>
