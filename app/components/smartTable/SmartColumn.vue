<script setup lang="ts">
import IconSorting from '~~/public/icons/sorting.svg';

interface Props {
  columnConfigs: ICollumnAttribute;
  isLastColmn?: boolean;
}
const props = defineProps<Props>();
const emiter = defineEmits<{ (event: 'change', dynamicWidth: number): void }>();

const dynamicWidth = ref(props.columnConfigs?.width || 0);

/**
 * @description: Invoked only when user is panning to resize with of the column
 * @param width
 */
const handleColumnWidthResize = (width: number) => {
  dynamicWidth.value = width;
  emiter('change', width);
};
</script>

<template>
  <th
    :style="{
      width: isLastColmn ? 'auto' : `${dynamicWidth}px`,
    }"
    class="relative border-r border-white last:border-r-0"
  >
    <div
      class="reltive flex items-center gap-1 bg-blue-400/90 py-1.5 pr-1 text-start text-sm text-gray-700 uppercase"
      :class="['px-5 py-1', columnConfigs?.heanderClass]"
    >
      <span class="capitalize" :class="[columnConfigs?.textHeaderClass]">
        {{ columnConfigs?.label }}</span
      >
      <button v-if="columnConfigs?.sorted" class="cursor-pointer">
        <IconSorting class="mt-0.5 h-3! w-3! stroke-2 text-white/60 hover:text-blue-50" filled />
      </button>
    </div>

    <!-- Floating element -->
    <div
      class="ease righ-0 absolute top-1/2 right-0.5 z-10 flex -translate-y-1/2 flex-col gap-0.5 opacity-0 duration-200 hover:opacity-100"
    >
      <div class="h-0.5 w-full rounded-xl bg-white/80" />
      <div class="rounded-xs bg-blue-300/70 px-px py-0.5">
        <ColumnResizableTracker
          v-if="!isLastColmn"
          :width="columnConfigs.width || 0"
          @change="handleColumnWidthResize"
        />
      </div>
      <div class="h-0.5 w-full rounded-xl bg-white/80" />
    </div>
  </th>
</template>
