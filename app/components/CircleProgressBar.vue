<template>
  <div
    class="relative shrink-0"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
    }"
  >
    <svg :width="size" :height="size" viewBox="0 0 100 100" class="block">
      <!-- Background circle -->
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="currentColor"
        stroke-width="5"
        class="text-black/5"
      />

      <!-- Progress circle -->
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="currentColor"
        stroke-width="10"
        stroke-linecap="round"
        class="origin-center -rotate-90 transition-[stroke-dashoffset] duration-700 ease-out"
        :class="color"
        :stroke-dasharray="dashArray"
        :stroke-dashoffset="dashOffset"
      />
    </svg>

    <!-- Percentage -->
    <div
      class="absolute inset-0 flex flex-col items-center justify-center font-bold"
      :style="{ fontSize }"
    >
      <p>{{ Math.round(animatedPercent) }}%</p>
      <p class="text-[8px]">Overall</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: number;
  percent?: number;
  fontSize?: string;
  color?: string;
  duration?: number;
}

const props = withDefaults(defineProps<Props>(), {
  size: 100,
  percent: 0,
  fontSize: '24px',
  color: 'text-blue-500',
  duration: 1000,
});

const radius = 45;
const dashArray = 2 * Math.PI * radius;

const animatedPercent = ref(0);

const targetPercent = computed(() => {
  return Math.min(Math.max(props.percent, 0), 100);
});

const dashOffset = computed(() => {
  return dashArray * (1 - animatedPercent.value / 100);
});

let animationFrame: number | null = null;

const animate = () => {
  const start = animatedPercent.value;
  const end = targetPercent.value;
  const startTime = performance.now();

  const update = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / props.duration, 1);

    // Ease-out
    const eased = 1 - Math.pow(1 - progress, 3);

    animatedPercent.value = start + (end - start) * eased;

    if (progress < 1) {
      animationFrame = requestAnimationFrame(update);
    }
  };

  if (animationFrame !== null) {
    cancelAnimationFrame(animationFrame);
  }

  animationFrame = requestAnimationFrame(update);
};

onMounted(() => {
  animate();
});

watch(
  () => props.percent,
  () => {
    animate();
  },
);

onBeforeUnmount(() => {
  if (animationFrame !== null) {
    cancelAnimationFrame(animationFrame);
  }
});
</script>
