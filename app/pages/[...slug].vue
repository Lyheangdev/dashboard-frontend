<script setup lang="ts">
definePageMeta({
  pageTransition: true,
  layout: 'admin',
});
</script>

<template>
  <PageWrapper page-label="System Fallback" class="grow">
    <NotFound />
  </PageWrapper>
</template>
