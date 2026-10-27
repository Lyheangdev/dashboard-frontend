<script setup lang="ts">
import IconSearch from '~~/public/icons/search.svg';
import IconSortBy from '~~/public/icons/sort.svg';
import IconFilter from '~~/public/icons/filter-pipe.svg';
import IconChevronLeft from '~~/public/icons/chevron-left.svg';
import IconChevronRight from '~~/public/icons/chevron-right.svg';
import IconTick from '~~/public/icons/check.svg';

definePageMeta({
  layout: 'admin',
});
</script>

<template>
  <div class="relative mx-6 my-4 flex flex-col gap-2.5">
    <div class="flex items-center justify-between">
      <h4 class="text-2xl font-bold text-gray-600">Manage Line</h4>
      <button class="rounded-lg bg-blue-400 px-4 py-1.5 text-sm text-white">Add New</button>
    </div>
    <div class="relative flex max-w-full flex-col gap-2 rounded-xl bg-white p-2">
      <div class="flex items-center justify-between">
        <div class="relative w-fit">
          <IconSearch
            class="absolute top-1/2 left-3 size-4! -translate-y-1/2 text-gray-500"
            filled
          />
          <input
            type="text"
            placeholder="Search line name ..."
            class="bg-primary w-full rounded-md border-none py-1.5 pr-4 pl-8 text-sm text-gray-500 outline-0 placeholder:text-[13px] placeholder:text-gray-400"
          />
        </div>

        <div class="flex items-center gap-1.5">
          <div class="flex items-center gap-1">
            <div
              class="bg-primary relative flex w-fit items-center gap-1.5 rounded-md px-2.5 py-1.5"
            >
              <IconSortBy class="size-4! text-blue-400" filled />
              <span class="text-[13px] text-gray-500">Sort By</span>
            </div>
            <div
              class="bg-primary relative flex w-fit items-center gap-1.5 rounded-md px-2.5 py-1.5"
            >
              <IconFilter class="size-4! text-blue-400" filled />
              <span class="text-[13px] text-gray-500">Filter By</span>
            </div>
          </div>
          <div class="h-5 w-px bg-gray-300" />
          <div>
            <div class="flex items-center gap-1.5">
              <div
                class="group/page-left bg-primary flex size-7 cursor-pointer items-center justify-center rounded-full duration-200 hover:bg-blue-400"
              >
                <IconChevronLeft
                  class="size-4! text-gray-400 duration-200 group-hover/page-left:text-white"
                  filled
                />
              </div>
              <div class="flex items-center gap-1.5">
                <span class="text-xs font-medium text-gray-500">8</span>
                <div class="h-3 w-px bg-gray-300" />
                <span class="text-xs font-medium text-gray-500">23</span>
              </div>
              <div
                class="group/page-left bg-primary flex size-7 cursor-pointer items-center justify-center rounded-full duration-200 hover:bg-blue-400"
              >
                <IconChevronRight
                  class="size-4! text-gray-400 duration-200 group-hover/page-left:text-white"
                  filled
                />
              </div>
              <div class="bg-primary flex items-center rounded-md p-1">
                <div class="flex items-center">
                  <span
                    class="rounded-l-md bg-blue-400 px-2 py-2 text-xs leading-[100%] text-white uppercase"
                    >Page</span
                  >
                  <input
                    type="number"
                    min="1"
                    max="1000"
                    value="1"
                    class="h-7 w-10 border-none bg-blue-400/20 px-1 text-sm ring-0 outline-0"
                  />
                </div>
                <div class="flex items-center">
                  <span class="bg-blue-400 px-2 py-2 text-xs leading-[100%] text-white uppercase"
                    >Limit</span
                  >
                  <div class="relative">
                    <select
                      id="status"
                      name="status"
                      class="sele right-0 h-7 appearance-none rounded-r-md border-0 bg-blue-200 pr-5 pl-1.5 text-sm outline-0"
                    >
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                      <option value="200">200</option>
                    </select>
                    <IconChevronRight
                      class="pointer-events-none absolute top-1/2 right-1 size-3! -translate-y-1/2 rotate-90 text-blue-600 duration-200 group-hover/page-left:text-white"
                      filled
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Table section -->
      <SmartTable
        :is-loading="true"
        :column-fileds="
          defineColumnFields(['id', 'email', 'first_name', 'last_name', 'created_at'])
        "
        :columns-config="{
          id: {
            key: 'col-key-id',
            label: 'Id',
            type: Number,
            width: 80,
            textHeaderClass: 'captalize text-white',
            heanderClass: 'px-8',
          },
          email: {
            key: 'col-key-email',
            label: 'Email',
            sorted: true,
            type: String,
            width: 280,
            textHeaderClass: 'captalize text-white',
          },
          first_name: {
            key: 'col-key-first_name',
            label: 'First Name',
            type: String,
            width: 180,
            textHeaderClass: 'captalize text-white',
          },
          last_name: {
            key: 'col-key-last_name',
            label: 'Last Name',
            type: String,
            width: 180,
            textHeaderClass: 'captalize text-white',
          },
          created_at: {
            key: 'col-key-created_at',
            label: 'Created at',
            sorted: true,
            copied: true,
            type: String,
            width: 180,
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
    </div>
  </div>
</template>
