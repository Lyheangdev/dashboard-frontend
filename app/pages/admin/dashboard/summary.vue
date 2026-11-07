<script setup lang="ts">
import IconLine from '~~/public/icons/line.svg';

definePageMeta({
  layout: 'admin',
});
</script>

<template>
  <PageWrapper page-label="Dashboard" container-class="px-6">
    <div>
      <h3 class="mb-2.5 font-medium">Overview Insignt</h3>
      <div class="relative grid grid-cols-12 gap-4">
        <div class="relative col-span-8 mb-2">
          <div class="grid grid-cols-2 gap-2.5 min-[1537px]:grid-cols-4">
            <div class="rounded-lg bg-gray-100/80 px-4 py-4">
              <p class="text-sm text-gray-500">Overall line</p>
              <h4 class="text-4xl font-bold">12</h4>
            </div>
            <div class="rounded-lg bg-gray-100/80 px-4 py-4">
              <p class="text-sm text-gray-500">Overall Users</p>
              <h4 class="text-4xl font-bold">26</h4>
            </div>
            <div class="rounded-lg bg-gray-100/80 px-4 py-4">
              <p class="text-sm text-gray-500">Overall Workorders</p>
              <h4 class="text-4xl font-bold">126</h4>
            </div>
            <div class="rounded-lg bg-gray-100/80 px-4 py-4">
              <p class="text-sm text-gray-500">Overall Processes</p>
              <h4 class="text-4xl font-bold">6</h4>
            </div>
          </div>

          <div class="relative mt-6">
            <div class="flex flex-col gap-0">
              <h3 class="font-medium">All Area Detail</h3>
              <p class="text-xs text-gray-600">Summary earch area line result</p>
            </div>

            <div class="relative mt-4">
              <StackPercentageChart />
            </div>
          </div>

          <div class="relative mt-6">
            <div class="flex flex-col gap-0">
              <h3 class="font-medium">Overall Yield Report</h3>
              <p class="text-xs text-gray-600">Summary all area to answer you</p>
            </div>

            <div class="relative mt-4">
              <DonutChart />
            </div>
          </div>
        </div>
        <div class="col-span-4 rounded-xl border border-blue-100 p-3">
          <h3 class="font-medium">Line Information</h3>

          <div class="mt-2.5 flex flex-col gap-2.5">
            <div class="relative rounded-xl bg-linear-to-r from-green-500 to-green-100 px-3 py-2.5">
              <div class="flex items-center gap-1.5">
                <div class="rounded-lg bg-white/20 p-2">
                  <IconLine class="size-6! text-gray-100" filled />
                </div>
                <div>
                  <p class="text-sm font-bold text-white">Line 1 | SMT</p>
                  <p class="text-[11px] text-gray-50">
                    <span class="font-bold">WO: </span>WKHKK7883748GH
                  </p>
                </div>
              </div>
              <span
                class="absolute top-1/2 right-2 -translate-y-1/2 rounded-md bg-white px-2.5 py-0.5 text-xs font-medium text-green-500"
                >Running</span
              >
            </div>

            <div class="relative rounded-xl bg-linear-to-r from-green-500 to-green-100 px-3 py-2.5">
              <div class="flex items-center gap-1.5">
                <div class="rounded-lg bg-white/20 p-2">
                  <IconLine class="size-6! text-gray-100" filled />
                </div>
                <div>
                  <p class="text-sm font-bold text-white">Line 2 | SMT</p>
                  <p class="text-[11px] text-gray-50">
                    <span class="font-bold">WO: </span>WKHKK7883748GH
                  </p>
                </div>
              </div>
              <span
                class="absolute top-1/2 right-2 -translate-y-1/2 rounded-md bg-white px-2.5 py-0.5 text-xs font-medium text-green-500"
                >Running</span
              >
            </div>

            <div class="relative rounded-xl bg-linear-to-r from-blue-500 to-blue-100 px-3 py-2.5">
              <div class="flex items-center gap-1.5">
                <div class="rounded-lg bg-white/20 p-2">
                  <IconLine class="size-6! text-gray-100" filled />
                </div>
                <div>
                  <p class="text-sm font-bold text-white">Line 3 | SMT</p>
                  <p class="text-[11px] text-gray-50">
                    <span class="font-bold">WO: </span>WKHKK7883748GH
                  </p>
                </div>
              </div>
              <span
                class="absolute top-1/2 right-2 -translate-y-1/2 rounded-md bg-white px-2.5 py-0.5 text-xs font-medium text-blue-500"
                >Close Up</span
              >
            </div>

            <div class="relative rounded-xl bg-linear-to-r from-amber-500 to-amber-100 px-3 py-2.5">
              <div class="flex items-center gap-1.5">
                <div class="rounded-lg bg-white/20 p-2">
                  <IconLine class="size-6! text-gray-100" filled />
                </div>
                <div>
                  <p class="text-sm font-bold text-white">Line 4 | SMT</p>
                  <p class="text-[11px] text-gray-50">
                    <span class="font-bold">WO: </span>WKHKK7883748GH
                  </p>
                </div>
              </div>
              <span
                class="absolute top-1/2 right-2 -translate-y-1/2 rounded-md bg-white px-2.5 py-0.5 text-xs font-medium text-amber-500"
                >Maintainance</span
              >
            </div>

            <div class="relative rounded-xl bg-linear-to-r from-red-500 to-red-100 px-3 py-2.5">
              <div class="flex items-center gap-1.5">
                <div class="rounded-lg bg-white/20 p-2">
                  <IconLine class="size-6! text-gray-100" filled />
                </div>
                <div>
                  <p class="text-sm font-bold text-white">Line 5 | SMT</p>
                  <p class="text-[11px] text-gray-50">
                    <span class="font-bold">WO: </span>WKHKK7883748GH
                  </p>
                </div>
              </div>
              <span
                class="absolute top-1/2 right-2 -translate-y-1/2 rounded-md bg-white px-2.5 py-0.5 text-xs font-medium text-red-600"
                >Downtime</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
</template>
