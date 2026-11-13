<script setup lang="ts">
import IconPlus from '~~/public/icons/plus.svg';

const columnFields = defineColumnFields([
  'id',
  'first_name',
  'last_name',
  'email',
  'bio',
  'role',
  'code',
  'status',
  'isBanned',
  'created_at',
  'created_by',
]);

interface IUser {
  id: number;
  first_name?: string | null;
  last_name?: string | null;
  email?: string;
  bio?: string | null;
  role?: { role?: string } | null;
  code?: string | null;
  status?: number;
  isBanned: boolean;
  created_at?: string;
  created_by?: string;
}

const displayFields = ref([...columnFields]);

const page = ref(1);
const pageSize = ref(2);

const search = ref('');

const requestFetch = useRequestFetch();
const runtimeConfig = useRuntimeConfig();

const { data: users, status } = await useFetch<IApiCollectionResponse<IUser>>(
  `${runtimeConfig.public.apiBase}/admin/users`,
  {
    key: 'all-users',
    query: { page: page, page_size: pageSize, search: search },
    $fetch: requestFetch,
    credentials: 'include',
  },
);

const result = computed(() => {
  const resultUser = (users.value?.data || []).map((u) => ({
    id: u?.id,
    first_name: u?.first_name || 'N/A',
    last_name: u?.last_name || 'N/A',
    email: u?.email,
    bio: u?.bio || 'N/A',
    role: u?.role?.role || 'Unknown',
    code: u?.code || 'N/A',
    status: u?.status == 0 ? 'Inactive' : 'Active',
    isBanned: u?.isBanned,
    created_at: u?.created_at || 'N/A',
    created_by: u?.created_by || 'Unknown',
  })) as never;

  return {
    resultUser,
    metadata: users?.value?.metadata,
  };
});

const handleEmailSearch = (value: string) => {
  search.value = value;
};

const createUserPage = ROUTE.$settings('/settings/users/create');
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="flex items-center justify-between">
      <Search placeholder="Search by email ..." @change="handleEmailSearch" />
      <NuxtLink
        :to="createUserPage"
        class="flex cursor-pointer items-center gap-1.5 rounded-lg bg-blue-400 px-3 py-1.5 text-sm text-white"
      >
        <IconPlus class="size-4!" filled />
        <span>Create User</span>
      </NuxtLink>
    </div>

    <SmartTable
      :is-loading="status === 'pending'"
      :default-sort-field="'id'"
      :sticky-field="'id'"
      :displayFields="displayFields"
      :column-fileds="columnFields"
      :columns-config="{
        id: {
          key: 'id',
          label: 'No.',
          type: Number,
          width: 80,
          textHeaderClass: 'captalize text-white',
          heanderClass: 'px-8',
        },
        first_name: {
          key: 'first_name',
          label: 'First Name',
          type: String,
          width: 150,
          textHeaderClass: 'captalize text-white',
          copied: true,
        },
        last_name: {
          key: 'last_name',
          label: 'Last Name',
          type: String,
          width: 150,
          textHeaderClass: 'captalize text-white',
        },
        email: {
          key: 'email',
          label: 'Email',
          sort: { sortType: 'string' },
          type: String,
          width: 280,
          textHeaderClass: 'captalize text-white',
        },
        bio: {
          key: 'bio',
          label: 'Bio',
          type: String,
          width: 180,
          textHeaderClass: 'captalize text-white',
          textClass: 'text-gray-300 font-normal',
        },
        role: {
          key: 'role',
          label: 'Role',
          type: String,
          width: 180,
          textHeaderClass: 'captalize text-white',
          textClass: 'text-gray-300 font-normal',
        },
        code: {
          key: 'code',
          label: 'Employee Code',
          type: String,
          width: 180,
          textHeaderClass: 'captalize text-white',
          textClass: 'text-gray-300 font-normal',
        },
        status: {
          key: 'status',
          label: 'Status',
          type: String,
          width: 100,
          textHeaderClass: 'captalize text-white',
          textClass: 'text-gray-300 font-normal',
        },
        isBanned: {
          key: 'isBanned',
          label: 'Is Banned',
          type: String,
          width: 100,
          textHeaderClass: 'captalize text-white',
          textClass: 'text-gray-300 font-normal',
        },
        created_at: {
          key: 'created_at',
          label: 'Created at',
          copied: false,
          type: String,
          width: 280,
          sort: { sortType: 'date' },
          textHeaderClass: 'captalize text-white',
          textClass: 'text-gray-300 font-normal',
        },
        created_by: {
          key: 'created_by',
          label: 'Created By',
          type: String,
          width: 180,
          textHeaderClass: 'captalize text-white',
          textClass: 'text-gray-300 font-normal',
        },
      }"
      :columnsData="result?.resultUser || []"
    >
    </SmartTable>
  </div>
</template>
