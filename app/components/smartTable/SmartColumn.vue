<script setup lang="ts">
interface Props {
  myKey?: string | number;
  data: ICollumnAttribute;
  isLastColmn?: boolean;
}
const props = defineProps<Props>();
const emiter = defineEmits<{ (event: 'change', dynamicWidth: number): void }>();

const dynamicWidth = ref(props.data?.width || 0);

const handleChange = (width: number) => {
  dynamicWidth.value = width;
  emiter('change', width);
};
</script>

<template>
  <th
    :style="{
      width: isLastColmn ? 'auto' : `${dynamicWidth}px`,
    }"
    class="border-r border-white last:border-r-0"
  >
    <div
      class="flex items-center justify-between bg-blue-200 py-1.5 pr-1 text-start text-sm text-gray-700 uppercase"
      :class="[data.class]"
    >
      <span> {{ myKey }}</span>
      <ColumnResizableTracker v-if="!isLastColmn" :width="data.width || 0" @change="handleChange" />
    </div>
  </th>
</template>
