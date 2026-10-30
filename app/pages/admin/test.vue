<script setup lang="ts">
interface ITypicode {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}

const { data } = await useFetch<ITypicode | null>('https://jsonplaceholder.typicode.com/posts/2');

const fetData = async () => {
  try {
    data.value = await $fetch<ITypicode>('https://jsonplaceholder.typicode.com/posts/3');
  } catch (error) {
    console.error(error);
    data.value = null;
  }
};
</script>

<template>
  <div v-if="data">
    <p>ID: {{ data.id }}</p>
    <p>UserId: {{ data.userId }}</p>
    <p>Title: {{ data.title }}</p>
    <p>Body: {{ data.body }}</p>
  </div>

  <button @click.stop="fetData">Fetch Other</button>
</template>
x
