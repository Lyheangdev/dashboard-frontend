<script setup lang="ts">
const displayFields = ref(['id', 'email', 'first_name', 'last_name', 'created_at']);
</script>

<template>
  <SmartTable
    :is-loading="true"
    :default-sort-field="'id'"
    :sticky-field="'id'"
    :displayFields="displayFields"
    :column-fileds="defineColumnFields(['id', 'email', 'first_name', 'last_name', 'created_at'])"
    :columns-config="{
      id: {
        key: 'id',
        label: 'No.',
        type: Number,
        width: 80,
        textHeaderClass: 'captalize text-white',
        heanderClass: 'px-8',
      },
      email: {
        key: 'email',
        label: 'Email',
        sort: { sortType: 'string' },
        type: String,
        width: 280,
        textHeaderClass: 'captalize text-white',
      },
      first_name: {
        key: 'first_name',
        label: 'First Name',
        type: String,
        width: 180,
        textHeaderClass: 'captalize text-white',
      },
      last_name: {
        key: 'last_name',
        label: 'Last Name',
        type: String,
        width: 180,
        textHeaderClass: 'captalize text-white',
      },
      created_at: {
        key: 'created_at',
        label: 'Created at',
        copied: true,
        type: String,
        width: 180,
        sort: { sortType: 'date' },
        textHeaderClass: 'captalize text-white',
        textClass: 'text-gray-300 font-normal',
      },
    }"
    :columnsData="[
      {
        id: 1,
        email: 'lyheangdev@gmail.com',
        first_name: 'lyheang',
        last_name: 'dev',
        created_at: formatUtc('2026-09-12T12:56:00.00000+00:00', 'technical'),
      },
      {
        id: 2,
        email: 'vichetsom@gmail.com',
        first_name: 'vichet',
        last_name: 'som',
        created_at: formatUtc('2026-09-15T01:56:00.00000+00:00', 'technical'),
      },
      {
        id: 3,
        email: 'dara.chan@gmail.com',
        first_name: 'dara',
        last_name: 'chan',
        created_at: formatUtc('2026-09-18T09:30:00.00000+00:00', 'technical'),
      },
      {
        id: 4,
        email: 'sokha.kim@gmail.com',
        first_name: 'sokha',
        last_name: 'kim',
        created_at: formatUtc('2026-09-20T14:45:00.00000+00:00', 'technical'),
      },
      {
        id: 5,
        email: 'bopha.lim@gmail.com',
        first_name: 'bopha',
        last_name: 'lim',
        created_at: formatUtc('2026-09-22T08:15:00.00000+00:00', 'technical'),
      },
      {
        id: 6,
        email: 'sopheak.hem@gmail.com',
        first_name: 'sopheak',
        last_name: 'hem',
        created_at: formatUtc('2026-09-24T10:20:00.00000+00:00', 'technical'),
      },
      {
        id: 7,
        email: 'chenda.ou@gmail.com',
        first_name: 'chenda',
        last_name: 'ou',
        created_at: formatUtc('2026-09-26T13:40:00.00000+00:00', 'technical'),
      },
      {
        id: 8,
        email: 'vanna.chea@gmail.com',
        first_name: 'vanna',
        last_name: 'chea',
        created_at: formatUtc('2026-09-28T16:25:00.00000+00:00', 'technical'),
      },
      {
        id: 9,
        email: 'pisey.kong@gmail.com',
        first_name: 'pisey',
        last_name: 'kong',
        created_at: formatUtc('2026-09-30T07:50:00.00000+00:00', 'technical'),
      },
      {
        id: 10,
        email: 'rithy.seng@gmail.com',
        first_name: 'rithy',
        last_name: 'seng',
        created_at: formatUtc('2026-10-02T11:35:00.00000+00:00', 'technical'),
      },
    ]"
  />
</template>
