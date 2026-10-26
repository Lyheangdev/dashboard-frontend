<script setup lang="ts">
import IconColResize from '~~/public/icons/col-resize.svg';

const props = defineProps<{ width: number; containerClass?: string; iconClass?: string }>();
const emiter = defineEmits<{
  (event: 'change', dynamicWidth: number): void;
}>();

const trackerState = reactive({
  isDragging: false,
  initX: 0,
  currentX: 0,
  diffX: 0,
});

const handlePointerDown = (evt: PointerEvent) => {
  const currElement = evt.currentTarget as HTMLElement;
  trackerState.isDragging = true;
  trackerState.initX = evt.clientX;

  //Register capture outside scope of the current target
  currElement.setPointerCapture(evt.pointerId);
};

const handlePointerMove = (evt: PointerEvent) => {
  if (!trackerState.isDragging) return;

  trackerState.currentX = evt.clientX;
  const diffX = evt.clientX - trackerState.initX;
  trackerState.diffX = trackerState.diffX + diffX;

  trackerState.initX = evt.clientX;
};

const handlePointerReleave = (evt: PointerEvent) => {
  const currElement = evt.currentTarget as HTMLElement;
  trackerState.isDragging = false;

  //Unregister capture outside scope event
  if (currElement.hasPointerCapture(evt.pointerId)) {
    currElement.releasePointerCapture(evt.pointerId);
  }
};

const dynamicWidth = computed(() => {
  const currentWidth = props.width + trackerState.diffX;
  return currentWidth < props.width ? props.width : currentWidth;
});

watch(dynamicWidth, (width) => {
  emiter('change', width);
});
</script>

<template>
  <div
    class="relative h-4! w-4! cursor-grab select-none"
    :class="[containerClass]"
    @pointerdown.stop="handlePointerDown"
    @pointermove.stop="handlePointerMove"
    @pointerup.stop="handlePointerReleave"
    @pointercancel.stop="handlePointerReleave"
    @pointerleave="handlePointerReleave"
  >
    <IconColResize
      class="h-4! w-4! text-gray-400 hover:text-gray-600"
      :class="[iconClass]"
      filled
    />
  </div>
</template>
