<script setup lang="ts">
const displayFields = ref(['id', 'role', 'created_at', 'updated_at']);
</script>

<template>
  <SmartTable
    :is-loading="true"
    :default-sort-field="'id'"
    :sticky-field="'id'"
    :displayFields="displayFields"
    :column-fileds="defineColumnFields(['id', 'role', 'created_at', 'updated_at'])"
    :columns-config="{
      id: {
        key: 'id',
        label: 'No.',
        type: Number,
        width: 80,
        textHeaderClass: 'captalize text-white',
        heanderClass: 'px-8',
      },
      role: {
        key: 'role',
        label: 'Role',
        sort: { sortType: 'string' },
        type: String,
        copied: true,
        width: 180,
        textHeaderClass: 'captalize text-white',
      },
      created_at: {
        key: 'created_at',
        label: 'Created at',
        copied: false,
        type: String,
        width: 230,
        sort: { sortType: 'date' },
        textHeaderClass: 'captalize text-white',
        textClass: 'text-gray-300 font-normal',
      },
      updated_at: {
        key: 'updated_at',
        label: 'Updated at',
        copied: false,
        type: String,
        width: 200,
        sort: { sortType: 'date' },
        textHeaderClass: 'captalize text-white',
        textClass: 'text-gray-300 font-normal',
      },
    }"
    :columnsData="[
      {
        id: 1,
        role: 'Super Admin',
        created_at: formatUtc('2026-09-12T12:56:00.00000+00:00', 'technical'),
        updated_at: formatUtc('2026-09-12T12:56:00.00000+00:00', 'technical'),
      },
      {
        id: 2,
        role: 'Admin',
        created_at: formatUtc('2026-09-13T08:30:00.00000+00:00', 'technical'),
        updated_at: formatUtc('2026-09-13T08:30:00.00000+00:00', 'technical'),
      },
      {
        id: 3,
        role: 'Manager',
        created_at: formatUtc('2026-09-14T09:15:00.00000+00:00', 'technical'),
        updated_at: formatUtc('2026-09-14T09:15:00.00000+00:00', 'technical'),
      },
      {
        id: 4,
        role: 'Editor',
        created_at: formatUtc('2026-09-15T10:45:00.00000+00:00', 'technical'),
        updated_at: formatUtc('2026-09-15T10:45:00.00000+00:00', 'technical'),
      },
      {
        id: 5,
        role: 'User',
        created_at: formatUtc('2026-09-16T11:20:00.00000+00:00', 'technical'),
        updated_at: formatUtc('2026-09-16T11:20:00.00000+00:00', 'technical'),
      },
      {
        id: 6,
        role: 'Guest',
        created_at: formatUtc('2026-09-17T14:00:00.00000+00:00', 'technical'),
        updated_at: formatUtc('2026-09-17T14:00:00.00000+00:00', 'technical'),
      },
      {
        id: 7,
        role: 'Support',
        created_at: formatUtc('2026-09-18T16:30:00.00000+00:00', 'technical'),
        updated_at: formatUtc('2026-09-18T16:30:00.00000+00:00', 'technical'),
      },
      {
        id: 8,
        role: 'Auditor',
        created_at: formatUtc('2026-09-19T07:45:00.00000+00:00', 'technical'),
        updated_at: formatUtc('2026-09-19T07:45:00.00000+00:00', 'technical'),
      },
      {
        id: 9,
        role: 'Developer',
        created_at: formatUtc('2026-09-20T13:10:00.00000+00:00', 'technical'),
        updated_at: formatUtc('2026-09-20T13:10:00.00000+00:00', 'technical'),
      },
      {
        id: 10,
        role: 'HR',
        created_at: formatUtc('2026-09-21T15:25:00.00000+00:00', 'technical'),
        updated_at: formatUtc('2026-09-21T15:25:00.00000+00:00', 'technical'),
      },
    ]"
  />
</template>
