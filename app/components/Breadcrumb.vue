<script setup lang="ts">
import { capitalize } from 'vue';
import IconChevronRight from '~~/public/icons/chevron-right.svg';

const route = useRoute();

const paths = computed(() => {
  const pathNavs = (route.path || '').substring(1).split('/');
  let concatePath = '';

  return pathNavs.map((path) => {
    concatePath += `/${path}`;
    return { label: capitalize(path), path: concatePath };
  });
});

console.log(paths.value);
</script>

<template>
  <div class="relative flex items-center gap-1">
    <div v-for="(pathObj, i) in paths" :key="i" class="flex items-center gap-1">
      <NuxtLink :to="pathObj?.path" class="text-sm text-gray-400" :class="[{'text-blue-400! font-medium' : pathObj?.path == $route.path}]">
        {{ pathObj?.label }}
      </NuxtLink>
      <IconChevronRight
        class="mt-1 size-3! text-gray-400/60"
        :class="{ hidden: i == paths.length - 1 }"
        filled
      />
    </div>
  </div>
</template>
