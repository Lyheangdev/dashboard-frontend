<script setup lang="ts">
import IconUpcomming from '~~/public/icons/upcomming.svg';
</script>

<template>
  <div class="m-auto flex flex-col items-center justify-center gap-1.5">
    <div class="rounded-2xl bg-blue-50 p-2">
      <IconUpcomming class="size-12! text-blue-400" filled />
    </div>
    <h4 class="text-2xl font-bold text-gray-600">Upcomming Feature</h4>
    <p class="text-gray-500">Be apologetic for inconvenient release on time!</p>
    <button
      @click.stop="$router.back"
      class="mt-3 w-60 cursor-pointer rounded-lg bg-blue-400 py-2.5 text-sm font-medium text-gray-50! duration-300 ease-linear hover:bg-blue-500"
    >
      Visit Other Page
    </button>
  </div>
</template>
