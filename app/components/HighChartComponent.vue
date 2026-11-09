<script setup lang="ts">
import { Chart } from 'highcharts-vue';
import type { Options } from 'highcharts';

defineProps<{ options: Options }>();
</script>

<template>
  <Chart :options="options" class="w-full" />
</template>
