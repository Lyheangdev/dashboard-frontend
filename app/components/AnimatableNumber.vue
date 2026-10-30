<script setup lang="ts">
const props = defineProps<{
  value: number;
}>();

const value = ref(0);

let timtout: ReturnType<typeof window.setTimeout> | null = null;

onMounted(() => {
  timtout = setTimeout(() => {
    value.value = props.value;
  }, 100);
});

onBeforeUnmount(() => {
  window.clearTimeout(timtout!);
});
</script>

<template>
  <div>
    <span
      class="number font-light"
      :style="{
        '--num': value,
      }"
    />
  </div>
</template>

<style scoped>
@property --num {
  syntax: '<integer>';
  initial-value: 0;
  inherits: false;
}

.number {
  transition: --num 2s cubic-bezier(0.4, 0, 0.2, 1);
  counter-set: num var(--num);
}

.number::after {
  content: counter(num);
}
</style>
