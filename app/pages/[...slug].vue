<script setup lang="ts">
useHead({
  title: 'Not Found',
});
definePageMeta({
  layout: 'admin',
});
</script>

<template>
  <PageWrapper page-label="System Fallback" class="grow">
    <NotFound />
  </PageWrapper>
</template>
