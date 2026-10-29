<script setup lang="ts">
import IconNotFound from '~~/public/icons/not-found.svg';
</script>

<template>
  <div class="m-auto flex flex-col items-center justify-center gap-1">
    <div class="rounded-2xl bg-blue-50 p-2">
      <IconNotFound class="size-12! text-blue-400" filled />
    </div>
    <h3 class="text-3xl font-bold text-gray-600">Not Found Page</h3>
    <p class="text-gray-500">Unmatched Route Navigation, Please return back.</p>
    <p class="rounded-lg bg-gray-100/80 px-3.5 py-1 text-xs font-medium text-blue-500">
      {{ $route.path }}
    </p>
    <button
      @click.stop="$router.back"
      class="mt-3 w-60 cursor-pointer rounded-lg bg-blue-400 py-2.5 text-sm font-medium text-gray-50! duration-300 ease-linear hover:bg-blue-500"
    >
      Go Back
    </button>
  </div>
</template>
