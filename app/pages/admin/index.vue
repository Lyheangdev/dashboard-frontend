<script setup lang="ts">
import IconSearch from "~~/public/icons/search.svg";
import IconSortBy from "~~/public/icons/sort.svg";
import IconFilter from "~~/public/icons/filter-pipe.svg";
import IconChevronLeft from "~~/public/icons/chevron-left.svg";
import IconChevronRight from "~~/public/icons/chevron-right.svg";
import IconTick from "~~/public/icons/check.svg";

definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div class="relative mx-6 my-4 flex flex-col gap-2.5">
    <div class="flex items-center justify-between">
      <h4 class="text-2xl text-gray-600 font-bold">Manage Line</h4>
      <button class="px-4 py-1.5 text-white bg-blue-400 text-sm rounded-lg">
        Add New
      </button>
    </div>
    <div
      class="bg-white rounded-xl flex flex-col gap-2 p-2 relative max-w-full"
    >
      <div class="flex items-center justify-between">
        <div class="relative w-fit">
          <IconSearch
            class="absolute top-1/2 -translate-y-1/2 left-3 size-4! text-gray-500"
            filled
          />
          <input
            type="text"
            placeholder="Search line name ..."
            class="rounded-md outline-0 border-none pl-8 pr-4 py-1.5 text-sm bg-primary w-full text-gray-500 placeholder:text-gray-400 placeholder:text-[13px]"
          />
        </div>

        <div class="flex items-center gap-1.5">
          <div class="flex items-center gap-1">
            <div
              class="relative w-fit flex items-center gap-1.5 rounded-md py-1.5 px-2.5 bg-primary"
            >
              <IconSortBy class="size-4! text-blue-400" filled />
              <span class="text-[13px] text-gray-500">Sort By</span>
            </div>
            <div
              class="relative w-fit flex items-center gap-1.5 rounded-md py-1.5 px-2.5 bg-primary"
            >
              <IconFilter class="size-4! text-blue-400" filled />
              <span class="text-[13px] text-gray-500">Filter</span>
            </div>
          </div>
          <div class="w-px h-5 bg-gray-300" />
          <div>
            <div class="flex items-center gap-1.5">
              <div
                class="group/page-left bg-primary cursor-pointer size-7 hover:bg-blue-400 duration-200 flex items-center justify-center rounded-full"
              >
                <IconChevronLeft
                  class="size-4! text-gray-400 group-hover/page-left:text-white duration-200"
                  filled
                />
              </div>
              <div class="flex items-center gap-1.5">
                <span class="text-xs text-gray-500 font-medium">8</span>
                <div class="w-px h-3 bg-gray-300" />
                <span class="text-xs text-gray-500 font-medium">23</span>
              </div>
              <div
                class="group/page-left bg-primary cursor-pointer size-7 hover:bg-blue-400 duration-200 flex items-center justify-center rounded-full"
              >
                <IconChevronRight
                  class="size-4! text-gray-400 group-hover/page-left:text-white duration-200"
                  filled
                />
              </div>
              <div class="bg-primary rounded-md flex items-center p-1">
                <div class="flex items-center">
                  <span
                    class="text-xs py-2 px-2 leading-[100%] bg-blue-400 rounded-l-md text-white uppercase"
                    >Page</span
                  >
                  <input
                    type="number"
                    min="1"
                    max="1000"
                    value="1"
                    class="bg-blue-400/20 h-7 w-10 px-1 text-sm outline-0 ring-0 border-none"
                  />
                </div>
                <div class="flex items-center">
                  <span
                    class="text-xs py-2 px-2 leading-[100%] bg-blue-400 text-white uppercase"
                    >Limit</span
                  >
                  <div class="relative">
                    <select
                      id="status"
                      name="status"
                      class="appearance-none bg-blue-200 sele outline-0 border-0 right-0 h-7 text-sm pl-1.5 pr-5 rounded-r-md"
                    >
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                      <option value="200">200</option>
                    </select>
                    <IconChevronRight
                      class="size-3! text-blue-600 rotate-90 absolute right-1 top-1/2 pointer-events-none -translate-y-1/2 group-hover/page-left:text-white duration-200"
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
        class="relative p-2 bg-blue-400/8 rounded-xl grow w-full overflow-x-auto scrollbar-thin scroll-smooth scrollbar-thumb-gray-200"
      >
        <table class="w-full table-fixed">
          <thead class="bg-blue-300/20">
            <tr class="text-sm text-blue-400">
              <th class="rounded-l-lg py-1.5 bg-blue-200 w-16 max-w-16">
                <div class="relative mt-0.5">
                  <input
                    type="checkbox"
                    class="peer size-5 checked:bg-blue-400 border border-blue-200 cursor-pointer appearance-none rounded-sm bg-white"
                  />
                  <IconTick
                    class="pointer-events-none peer-checked:block hidden size-5! text-white absolute top-[45%] -translate-y-1/2 left-1/2 -translate-x-1/2"
                    filled
                  />
                </div>
              </th>

              <th class="text-left px-4 w-30">Line ID</th>

              <th class="text-left px-4 min-50 w-50">Line Name</th>

              <th class="text-left px-4 min-28 w-28">Line Status</th>

              <th class="text-left px-4 min-64 w-65">Line Description</th>

              <th class="text-left rounded-r-lg px-4">Create Date</th>
            </tr>
          </thead>

          <tbody>
            <tr class="text-[13px] even:bg-blue-100 text-gray-700">
              <td class="px-5.5 py-1.5">
                <div class="relative mt-0.5">
                  <input
                    type="checkbox"
                    class="peer size-5 checked:bg-blue-400 border border-blue-200 cursor-pointer appearance-none rounded-sm bg-white"
                  />
                  <IconTick
                    class="pointer-events-none peer-checked:block hidden size-5! text-white absolute top-[45%] -translate-y-1/2 left-1/2 -translate-x-1/2"
                    filled
                  />
                </div>
              </td>
              <td class="text-left py-1.5 px-5 w-30">1</td>
              <td class="text-left py-1.5 px-5 min-50 w-50">LNK</td>
              <td class="text-left py-1.5 px-5 min-28 w-28"><span class="text-xs px-3 py-1 rounded-md leading-[100%] text-amber-500 bg-amber-500/15">Stopped</span></td>
              <td class="text-left py-1.5 px-5 min-64 w-65">LNK 2016 customer</td>
              <td class="text-left py-1.5 px-5">May, 15 2026</td>
            </tr>

             <tr class="text-[13px] text-gray-700 even:bg-blue-100/40">
              <td class="px-5.5 py-1.5">
                <div class="relative mt-0.5">
                  <input
                    type="checkbox"
                    class="peer size-5 checked:bg-blue-400 border border-blue-200 cursor-pointer appearance-none rounded-sm bg-white"
                  />
                  <IconTick
                    class="pointer-events-none peer-checked:block hidden size-5! text-white absolute top-[45%] -translate-y-1/2 left-1/2 -translate-x-1/2"
                    filled
                  />
                </div>
              </td>
              <td class="text-left py-1.5 px-5 w-30">2</td>
              <td class="text-left py-1.5 px-5 min-50 w-50">RTK</td>
              <td class="text-left py-1.5 px-5 min-28 w-28"><span class="text-xs px-3 py-1 rounded-md leading-[100%] text-green-500 bg-green-500/15">Running</span></td>
              <td class="text-left py-1.5 px-5 min-64 w-65">RTK 2016 customer</td>
              <td class="text-left py-1.5 px-5">May, 28 2026</td>
            </tr>

             <tr class="text-[13px] text-gray-700">
              <td class="px-5.5 py-1.5">
                <div class="relative mt-0.5">
                  <input
                    type="checkbox"
                    class="peer size-5 checked:bg-blue-400 border border-blue-200 cursor-pointer appearance-none rounded-sm bg-white"
                  />
                  <IconTick
                    class="pointer-events-none peer-checked:block hidden size-5! text-white absolute top-[45%] -translate-y-1/2 left-1/2 -translate-x-1/2"
                    filled
                  />
                </div>
              </td>
              <td class="text-left py-1.5 px-5 w-30">3</td>
              <td class="text-left py-1.5 px-5 min-50 w-50">ABB</td>
              <td class="text-left py-1.5 px-5 min-28 w-28"><span class="text-xs px-3 py-1 rounded-md leading-[100%] text-green-500 bg-green-500/15">Running</span></td>
              <td class="text-left py-1.5 px-5 min-64 w-65">ABB 2016 customer</td>
              <td class="text-left py-1.5 px-5">May, 28 2026</td>
            </tr>

             <tr class="text-[13px] text-gray-700 even:bg-blue-100/40">
              <td class="px-5.5 py-1.5">
                <div class="relative mt-0.5">
                  <input
                    type="checkbox"
                    class="peer size-5 checked:bg-blue-400 border border-blue-200 cursor-pointer appearance-none rounded-sm bg-white"
                  />
                  <IconTick
                    class="pointer-events-none peer-checked:block hidden size-5! text-white absolute top-[45%] -translate-y-1/2 left-1/2 -translate-x-1/2"
                    filled
                  />
                </div>
              </td>
              <td class="text-left py-1.5 px-5 w-30">4</td>
              <td class="text-left py-1.5 px-5 min-50 w-50">ABC</td>
              <td class="text-left py-1.5 px-5 min-28 w-28"><span class="text-xs px-3 py-1 rounded-md leading-[100%] text-green-500 bg-green-500/15">Running</span></td>
              <td class="text-left py-1.5 px-5 min-64 w-65">ABC 2016 customer</td>
              <td class="text-left py-1.5 px-5">May, 28 2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
