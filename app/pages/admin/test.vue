<script setup lang="ts"></script>

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
          heanderClass: 'capitalize'
        },
        email: {
          key: 'col-key-email',
          label: 'Email',
          type: String,
          width: 280,
        },
        first_name: {
          key: 'col-key-first_name',
          label: 'First Name',
          type: String,
          width: 180,
        },
        last_name: {
          key: 'col-key-last_name',
          label: 'Last Name',
          type: String,
          width: 180,
        },
        created_at: {
          key: 'col-key-created_at',
          label: 'Created at',
          type: String,
          width: 180,
        },
      }"
      :columnsData="[
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
