<script setup lang="ts">
import type { NuxtError } from '#app';

definePageMeta({
  layout: 'admin',
});

useHead({
  title: 'Exception',
});
const props = defineProps<{ error: NuxtError }>();
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center">
    <h1 class="text-6xl font-bold text-blue-400">
      {{ error.status }}
    </h1>

    <h2 class="text-3xl font-semibold text-gray-700">
      {{ error.statusText || 'Something went wrong' }}
    </h2>

    <p class="text-sm text-gray-600">
      {{ error.message }}
    </p>

    <button
      @click.stop="clearError({ redirect: ROUTE.$dashboard('/dashboard/summury') })"
      class="mt-2 cursor-pointer rounded-md bg-blue-400 px-4 py-2 text-sm text-white"
    >
      Go to Dashboard
    </button>
  </div>
</template>
