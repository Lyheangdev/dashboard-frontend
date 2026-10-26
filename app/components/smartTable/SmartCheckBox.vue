<script setup lang="ts">
import IconCheck from '~~/public/icons/check.svg';

const props = withDefaults(
  defineProps<{
    isChecked?: boolean;
    disabled?: boolean;
  }>(),
  { isChecked: false, disabled: false },
);

const checked = ref(props.isChecked);

const emiter = defineEmits<{
  (event: 'change', isChecked: boolean): void;
}>();

const handleChange = () => {
  checked.value = !checked.value;
  emiter('change', checked.value);
};
</script>

<template>
  <div class="relative size-5">
    <input
      type="checkbox"
      :checked="checked"
      @change="handleChange"
      class="z-10! size-5 cursor-pointer appearance-none rounded-sm border border-blue-200 bg-white"
    />
    <IconCheck
      v-if="checked"
      class="absolute top-0 right-0 bottom-0 pointer-events-none left-0 z-0! mt-0.5 ml-0.5 size-4! text-blue-500 select-none"
      filled
    />
  </div>
</template>
