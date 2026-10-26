<script setup lang="ts">
const scrollableContainer = useTemplateRef('table-scrollable-container');

const trackerState = reactive({
  isScrollable: false,
  isDragging: false,
  initX: 0,
  currentX: 0,
  diffX: 0,
});

const checkScrollable = () => {
  const srContainer = scrollableContainer.value;
  if (srContainer && srContainer.scrollWidth > srContainer.clientWidth) {
    trackerState.isScrollable = true;
  } else {
    trackerState.isScrollable = false;
  }
};

const handlePointerDown = (evt: PointerEvent) => {
  const currElement = evt.currentTarget as HTMLElement;

  if (isInteractiveElement(evt.target)) return;

  trackerState.isDragging = true;
  trackerState.initX = evt.clientX;

  //Register capture outside scope of the current target
  currElement.setPointerCapture(evt.pointerId);
};

const handlePointerMove = (evt: PointerEvent) => {
  if (!trackerState.isDragging || isInteractiveElement(evt.target)) return;

  trackerState.currentX = evt.clientX;
  const diffX = evt.clientX - trackerState.initX;
  trackerState.diffX = trackerState.diffX + diffX;

  //-- Applying pan scroll effect
  if (scrollableContainer?.value) {
    scrollableContainer.value.scrollLeft -= diffX;
  }

  trackerState.initX = evt.clientX;
};

const handlePointerReleave = (evt: PointerEvent) => {
  const currElement = evt.currentTarget as HTMLElement;
  if (isInteractiveElement(evt.target)) return;

  trackerState.isDragging = false;

  checkScrollable();

  //Unregister capture outside scope event
  if (currElement.hasPointerCapture(evt.pointerId)) {
    currElement.releasePointerCapture(evt.pointerId);
  }
};

onMounted(() => {
  if (!import.meta.client) return;
  checkScrollable();
});
</script>

<template>
  <div class="relative overflow-hidden rounded-t-lg">
    <div
      ref="table-scrollable-container"
      class="scrollbar-thumb-primary relative cursor-auto scrollbar-none overflow-x-auto select-none"
      :class="{ 'cursor-grab!': trackerState.isScrollable }"
      @pointerdown.stop="handlePointerDown"
      @pointermove.stop="handlePointerMove"
      @pointerup.stop="handlePointerReleave"
      @pointercancel.stop="handlePointerReleave"
    >
      <slot />
    </div>
  </div>
</template>
