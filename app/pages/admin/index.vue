<script setup lang="ts">
import IconSearch from '~~/public/icons/search.svg'
import IconSortBy from '~~/public/icons/sort.svg'
import IconFilter from '~~/public/icons/filter-pipe.svg'
import IconChevronLeft from '~~/public/icons/chevron-left.svg'
import IconChevronRight from '~~/public/icons/chevron-right.svg'
import IconTick from '~~/public/icons/check.svg'

definePageMeta({
  layout: 'admin',
})
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
              <span class="text-[13px] text-gray-500">Filter</span>
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

      <div
        class="relative w-full grow scrollbar-thin scrollbar-thumb-gray-200 overflow-x-auto scroll-smooth rounded-xl bg-blue-400/8 p-2"
      >
        <table class="w-full table-fixed">
          <thead class="bg-blue-300/20">
            <tr class="text-sm text-blue-400">
              <th class="w-16 max-w-16 rounded-l-lg bg-blue-200 py-1.5">
                <div class="relative mt-0.5">
                  <input
                    type="checkbox"
                    class="peer size-5 cursor-pointer appearance-none rounded-sm border border-blue-200 bg-white checked:bg-blue-400"
                  />
                  <IconTick
                    class="pointer-events-none absolute top-[45%] left-1/2 hidden size-5! -translate-x-1/2 -translate-y-1/2 text-white peer-checked:block"
                    filled
                  />
                </div>
              </th>

              <th class="w-30 px-4 text-left">Line ID</th>

              <th class="min-50 w-50 px-4 text-left">Line Name</th>

              <th class="min-28 w-28 px-4 text-left">Line Status</th>

              <th class="min-64 w-65 px-4 text-left">Line Description</th>

              <th class="rounded-r-lg px-4 text-left">Create Date</th>
            </tr>
          </thead>

          <tbody>
            <tr class="text-[13px] text-gray-700 even:bg-blue-100">
              <td class="px-5.5 py-1.5">
                <div class="relative mt-0.5">
                  <input
                    type="checkbox"
                    class="peer size-5 cursor-pointer appearance-none rounded-sm border border-blue-200 bg-white checked:bg-blue-400"
                  />
                  <IconTick
                    class="pointer-events-none absolute top-[45%] left-1/2 hidden size-5! -translate-x-1/2 -translate-y-1/2 text-white peer-checked:block"
                    filled
                  />
                </div>
              </td>
              <td class="w-30 px-5 py-1.5 text-left">1</td>
              <td class="min-50 w-50 px-5 py-1.5 text-left">LNK</td>
              <td class="min-28 w-28 px-5 py-1.5 text-left">
                <span
                  class="rounded-md bg-amber-500/15 px-3 py-1 text-xs leading-[100%] text-amber-500"
                  >Stopped</span
                >
              </td>
              <td class="min-64 w-65 px-5 py-1.5 text-left">LNK 2016 customer</td>
              <td class="px-5 py-1.5 text-left">May, 15 2026</td>
            </tr>

            <tr class="text-[13px] text-gray-700 even:bg-blue-100/40">
              <td class="px-5.5 py-1.5">
                <div class="relative mt-0.5">
                  <input
                    type="checkbox"
                    class="peer size-5 cursor-pointer appearance-none rounded-sm border border-blue-200 bg-white checked:bg-blue-400"
                  />
                  <IconTick
                    class="pointer-events-none absolute top-[45%] left-1/2 hidden size-5! -translate-x-1/2 -translate-y-1/2 text-white peer-checked:block"
                    filled
                  />
                </div>
              </td>
              <td class="w-30 px-5 py-1.5 text-left">2</td>
              <td class="min-50 w-50 px-5 py-1.5 text-left">RTK</td>
              <td class="min-28 w-28 px-5 py-1.5 text-left">
                <span
                  class="rounded-md bg-green-500/15 px-3 py-1 text-xs leading-[100%] text-green-500"
                  >Running</span
                >
              </td>
              <td class="min-64 w-65 px-5 py-1.5 text-left">RTK 2016 customer</td>
              <td class="px-5 py-1.5 text-left">May, 28 2026</td>
            </tr>

            <tr class="text-[13px] text-gray-700">
              <td class="px-5.5 py-1.5">
                <div class="relative mt-0.5">
                  <input
                    type="checkbox"
                    class="peer size-5 cursor-pointer appearance-none rounded-sm border border-blue-200 bg-white checked:bg-blue-400"
                  />
                  <IconTick
                    class="pointer-events-none absolute top-[45%] left-1/2 hidden size-5! -translate-x-1/2 -translate-y-1/2 text-white peer-checked:block"
                    filled
                  />
                </div>
              </td>
              <td class="w-30 px-5 py-1.5 text-left">3</td>
              <td class="min-50 w-50 px-5 py-1.5 text-left">ABB</td>
              <td class="min-28 w-28 px-5 py-1.5 text-left">
                <span
                  class="rounded-md bg-green-500/15 px-3 py-1 text-xs leading-[100%] text-green-500"
                  >Running</span
                >
              </td>
              <td class="min-64 w-65 px-5 py-1.5 text-left">ABB 2016 customer</td>
              <td class="px-5 py-1.5 text-left">May, 28 2026</td>
            </tr>

            <tr class="text-[13px] text-gray-700 even:bg-blue-100/40">
              <td class="px-5.5 py-1.5">
                <div class="relative mt-0.5">
                  <input
                    type="checkbox"
                    class="peer size-5 cursor-pointer appearance-none rounded-sm border border-blue-200 bg-white checked:bg-blue-400"
                  />
                  <IconTick
                    class="pointer-events-none absolute top-[45%] left-1/2 hidden size-5! -translate-x-1/2 -translate-y-1/2 text-white peer-checked:block"
                    filled
                  />
                </div>
              </td>
              <td class="w-30 px-5 py-1.5 text-left">4</td>
              <td class="min-50 w-50 px-5 py-1.5 text-left">ABC</td>
              <td class="min-28 w-28 px-5 py-1.5 text-left">
                <span
                  class="rounded-md bg-green-500/15 px-3 py-1 text-xs leading-[100%] text-green-500"
                  >Running</span
                >
              </td>
              <td class="min-64 w-65 px-5 py-1.5 text-left">ABC 2016 customer</td>
              <td class="px-5 py-1.5 text-left">May, 28 2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
