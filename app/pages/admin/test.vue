<script setup lang="ts">
const tableHeader = [
  {
    key: 'col:id',
    label: 'Id',
    width: 80,
    class: 'py-1 pl-4',
    headerClass: 'py-1 pl-4',
  },
  {
    key: 'col:email',
    label: 'Email',
    width: 450,
    class: 'py-1 pl-4',
    headerClass: 'py-1 pl-4',
  },
  {
    key: 'col:frist_name',
    label: 'First Name',
    width: 150,
    class: 'py-1 pl-4',
    headerClass: 'py-1 pl-4',
  },
  {
    key: 'col:last_name',
    label: 'Last Name',
    width: 150,
    class: 'py-1 pl-4',
    headerClass: 'py-1 pl-4',
  },
  {
    key: 'col:create_at',
    label: 'Create At',
    width: 240,
    class: 'py-1 pl-4',
    headerClass: 'py-1 pl-4',
  },
];

const data = [
  {
    id: 1,
    email: 'lyheangdev@gmail.com',
    first_name: 'lyheang',
    last_name: 'dev',
    created_at: '12-09-2026 12:56',
  },
  {
    id: 2,
    email: 'vichetsom@gmail.com',
    first_name: 'vichet',
    last_name: 'som',
    created_at: '11-09-2026 12:56',
  },
];
</script>

<template>
  <div class="relative p-8">
    <SmartTable
      :column-fileds="defineColumnFields(['id', 'email', 'first_name', 'last_name', 'created_at'])"
      :columns-config="{
        id: {
          key: 'col-key-id',
          label: 'Id',
          type: Number,
          width: 80,
          class: 'py-1 pl-4',
        },
        email: {
          key: 'col-key-email',
          label: 'Email',
          type: String,
          width: 180,
          class: 'py-1 pl-4',
        },
        first_name: {
          key: 'col-key-first_name',
          label: 'First Name',
          type: String,
          width: 180,
          class: 'py-1 pl-4',
        },
        last_name: {
          key: 'col-key-last_name',
          label: 'Last Name',
          type: String,
          width: 120,
          class: 'py-1 pl-4',
        },
        created_at: {
          key: 'col-key-created_at',
          label: 'Created at',
          type: String,
          width: 180,
          class: 'py-1 pl-4',
        },
      }"
      :column-data="[
        {
          id: 1,
          email: 'Lyheangdev@gmail.com',
          first_name: 'lyheang',
          last_name: 'dev',
          created_at: '12-09-2026 12:56',
        },
        {
          id: 2,
          email: 'vichetsom@gmail.com',
          first_name: 'vichet',
          last_name: 'som',
          created_at: '15-09-2026 01:56',
        },
      ]"
    />
  </div>
</template>
