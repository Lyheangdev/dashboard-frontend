<script setup lang="ts">
import IconRunning from '~~/public/icons/recycle.svg';
import IconLine from '~~/public/icons/line.svg';
import IconClock from '~~/public/icons/clock.svg';
import IconClose from '~~/public/icons/machine-close.svg';
import IconMaintenanceClock from '~~/public/icons/maintenance-clock.svg';
import IconDowntime from '~~/public/icons/downtime.svg';
import IconExternalLine from '~~/public/icons/external-link.svg';

useHead({
  title: 'Dashboard',
});

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
            <div class="rounded-xl bg-blue-100/70 pt-4 pr-2.5 pb-2.5 pl-5">
              <p class="text-sm font-medium text-blue-500">Overall line</p>
              <div class="mt-1.5 flex items-center gap-1.5">
                <h4 class="text-4xl font-bold text-blue-600">12</h4>
              </div>
              <div class="ml-auto flex w-fit items-center gap-1 rounded-lg bg-white px-3 py-1.5">
                <p class="text-[10px] font-medium text-gray-700">See More</p>
                <IconExternalLine class="size-3! text-blue-400" filled />
              </div>
            </div>

            <div class="rounded-xl bg-blue-100/70 pt-4 pr-2.5 pb-2.5 pl-5">
              <p class="text-sm font-medium text-blue-500">Overall Users</p>
              <div class="mt-1.5 flex items-center gap-1.5">
                <h4 class="text-4xl font-bold text-blue-600">26</h4>
              </div>
              <div class="ml-auto flex w-fit items-center gap-1 rounded-lg bg-white px-3 py-1.5">
                <p class="text-[10px] font-medium text-gray-700">See More</p>
                <IconExternalLine class="size-3! text-blue-400" filled />
              </div>
            </div>

            <div class="rounded-xl bg-blue-100/70 pt-4 pr-2.5 pb-2.5 pl-5">
              <p class="text-sm font-medium text-blue-500">Overall Workorders</p>
              <div class="mt-1.5 flex items-center gap-1.5">
                <h4 class="text-4xl font-bold text-blue-600">126</h4>
              </div>
              <div class="ml-auto flex w-fit items-center gap-1 rounded-lg bg-white px-3 py-1.5">
                <p class="text-[10px] font-medium text-gray-700">See More</p>
                <IconExternalLine class="size-3! text-blue-400" filled />
              </div>
            </div>

            <div class="rounded-xl bg-blue-100/70 pt-4 pr-2.5 pb-2.5 pl-5">
              <p class="text-sm font-medium text-blue-500">Overall Processes</p>
              <div class="mt-1.5 flex items-center gap-1.5">
                <h4 class="text-4xl font-bold text-blue-600">8</h4>
              </div>
              <div class="ml-auto flex w-fit items-center gap-1 rounded-lg bg-white px-3 py-1.5">
                <p class="text-[10px] font-medium text-gray-700">See More</p>
                <IconExternalLine class="size-3! text-blue-400" filled />
              </div>
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
        <div class="col-span-4 h-fit rounded-xl border border-blue-100">
          <div class="px-3 pt-3 pb-1.5">
            <h3 class="font-semibold text-gray-700">Line Information</h3>
            <p class="text-xs text-gray-500">Realtime line report</p>
          </div>

          <div class="h-px w-full bg-blue-50" />

          <div class="relative grid grid-cols-2 gap-1.5 px-2 py-2">
            <div class="flex items-center justify-between rounded-lg bg-green-100 px-2 py-1.5">
              <p class="w-fit rounded-md bg-green-500 px-2 py-1 text-[11px] text-white">
                Total closed
              </p>
              <p class="text-center font-bold text-gray-600">
                <span class="text-xl leading-[100%]">10</span>
                <span class="ml-1 text-[10px] font-normal">Line</span>
              </p>
            </div>

            <div class="flex items-center justify-between rounded-lg bg-blue-100 px-2 py-1.5">
              <p class="w-fit rounded-md bg-blue-500 px-2 py-1 text-[11px] text-white">
                Total closed
              </p>
              <p class="text-center font-bold text-gray-600">
                <span class="text-xl leading-[100%]">1</span>
                <span class="ml-1 text-[10px] font-normal">Line</span>
              </p>
            </div>

            <div class="flex items-center justify-between rounded-lg bg-amber-100 px-2 py-1.5">
              <p class="w-fit rounded-md bg-amber-500 px-2 py-1 text-[11px] text-white">
                Total maintain
              </p>
              <p class="text-center font-bold text-gray-600">
                <span class="text-xl leading-[100%]">8</span>
                <span class="ml-1 text-[10px] font-normal">Line</span>
              </p>
            </div>

            <div class="flex items-center justify-between rounded-lg bg-red-100 px-2 py-1.5">
              <p class="w-fit rounded-md bg-red-500 px-2 py-1 text-[11px] text-white">
                Total downtime
              </p>
              <p class="text-center font-bold text-gray-600">
                <span class="text-xl leading-[100%]">0</span>
                <span class="ml-1 text-[10px] font-normal">Line</span>
              </p>
            </div>
          </div>

          <div class="h-px w-full bg-blue-50" />

          <div class="mt-2.5 flex flex-col gap-3.5 p-3">
            <!-- 1 -->
            <div class="relative">
              <div class="relative rounded-xl bg-linear-to-r from-green-500 to-green-100 px-2 py-2">
                <div class="flex items-center gap-1.5">
                  <div class="relative rounded-lg bg-white/20 p-2">
                    <IconLine class="size-6! text-gray-100" filled />
                  </div>
                  <div>
                    <p class="text-sm font-bold text-white">Line 1 | SMT</p>
                    <p class="text-[11px] text-gray-50">
                      <span class="font-bold">WO: </span>WKHKK7883748GH
                    </p>
                  </div>
                </div>
                <div
                  class="absolute top-1/2 right-2 flex -translate-y-1/2 items-center gap-1.5 rounded-lg bg-white px-2 py-1"
                >
                  <IconRunning class="size-4! animate-spin text-green-500" filled />
                  <span class="text-xs font-medium text-green-500">Running</span>
                </div>
              </div>

              <div
                class="mx-auto flex w-[90%] items-center justify-between rounded-b-lg bg-green-100 px-2 py-1.5"
              >
                <div class="flex items-center gap-1.5">
                  <div class="flex size-5.5 items-center justify-center rounded-full bg-green-500">
                    <IconClock class="mt-0.5 size-4! shrink-0 leading-[100%] text-white" filled />
                  </div>
                  <span class="text-[11px] font-semibold text-gray-700">Established at</span>
                </div>
                <p class="text-[10px] text-gray-700">2026-18-09 11:35:56</p>
              </div>
            </div>

            <div class="relative">
              <div class="relative rounded-xl bg-linear-to-r from-green-500 to-green-100 px-2 py-2">
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
                <div
                  class="absolute top-1/2 right-2 flex -translate-y-1/2 items-center gap-1.5 rounded-lg bg-white px-2 py-1"
                >
                  <IconRunning class="size-4! animate-spin text-green-500" filled />
                  <span class="text-xs font-medium text-green-500">Running</span>
                </div>
              </div>

              <div
                class="mx-auto flex w-[90%] items-center justify-between rounded-b-lg bg-green-100 px-2 py-1.5"
              >
                <div class="flex items-center gap-1.5">
                  <div class="flex size-5.5 items-center justify-center rounded-full bg-green-500">
                    <IconClock class="mt-0.5 size-4! shrink-0 leading-[100%] text-white" filled />
                  </div>
                  <span class="text-[11px] font-semibold text-gray-700">Established at</span>
                </div>
                <p class="text-[10px] text-gray-700">2026-18-09 11:35:56</p>
              </div>
            </div>

            <div class="relative">
              <div class="relative rounded-xl bg-linear-to-r from-blue-500 to-blue-100 px-2 py-2">
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
                <div
                  class="absolute top-1/2 right-2 flex -translate-y-1/2 items-center gap-1 rounded-lg bg-white px-2 py-1"
                >
                  <IconClose class="size-4! text-blue-500" filled />
                  <span class="text-xs font-medium text-blue-500">Close Up</span>
                </div>
              </div>

              <div
                class="mx-auto flex w-[90%] items-center justify-between rounded-b-lg bg-blue-100 px-2 py-1.5"
              >
                <div class="flex items-center gap-1.5">
                  <div class="flex size-5.5 items-center justify-center rounded-full bg-blue-500">
                    <IconClock class="mt-0.5 size-4! shrink-0 leading-[100%] text-white" filled />
                  </div>
                  <span class="text-[11px] font-semibold text-gray-700">Close at</span>
                </div>
                <p class="text-[10px] text-gray-700">2026-18-09 11:35:56</p>
              </div>
            </div>

            <div class="relative">
              <div class="relative rounded-xl bg-linear-to-r from-amber-500 to-amber-100 px-2 py-2">
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
                <div
                  class="absolute top-1/2 right-2 flex -translate-y-1/2 items-center gap-1 rounded-lg bg-white px-2 py-1"
                >
                  <IconMaintenanceClock class="size-3.5! text-amber-500" filled />
                  <span class="text-xs font-medium text-amber-500">Maintainence</span>
                </div>
              </div>
              <div
                class="mx-auto flex w-[90%] items-center justify-between rounded-b-lg bg-amber-100 px-2 py-1.5"
              >
                <div class="flex items-center gap-1.5">
                  <div class="flex size-5.5 items-center justify-center rounded-full bg-amber-500">
                    <IconClock class="mt-0.5 size-4! shrink-0 leading-[100%] text-white" filled />
                  </div>
                  <span class="text-[11px] font-semibold text-gray-700">Maintain at</span>
                </div>
                <p class="text-[10px] text-gray-700">2026-18-09 11:35:56</p>
              </div>
            </div>

            <div class="relative">
              <div class="relative rounded-xl bg-linear-to-r from-red-500 to-red-100 px-2 py-2">
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

                <div
                  class="absolute top-1/2 right-2 flex -translate-y-1/2 items-center gap-1 rounded-lg bg-white px-2 py-1"
                >
                  <IconDowntime class="size-4! text-red-500" filled />
                  <span class="text-xs font-medium text-red-500">Downtime</span>
                </div>
              </div>
              <div
                class="mx-auto flex w-[90%] items-center justify-between rounded-b-lg bg-red-100 px-2 py-1.5"
              >
                <div class="flex items-center gap-1.5">
                  <div class="flex size-5.5 items-center justify-center rounded-full bg-red-500">
                    <IconClock class="mt-0.5 size-4! shrink-0 leading-[100%] text-white" filled />
                  </div>
                  <span class="text-[11px] font-semibold text-gray-700">Terminated at</span>
                </div>
                <p class="text-[10px] text-gray-700">2026-18-09 11:35:56</p>
              </div>
            </div>

            <div class="relative">
              <div class="relative rounded-xl bg-linear-to-r from-red-500 to-red-100 px-2 py-2">
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

                <div
                  class="absolute top-1/2 right-2 flex -translate-y-1/2 items-center gap-1 rounded-lg bg-white px-2 py-1"
                >
                  <IconDowntime class="size-4! text-red-500" filled />
                  <span class="text-xs font-medium text-red-500">Downtime</span>
                </div>
              </div>
              <div
                class="mx-auto flex w-[90%] items-center justify-between rounded-b-lg bg-red-100 px-2 py-1.5"
              >
                <div class="flex items-center gap-1.5">
                  <div class="flex size-5.5 items-center justify-center rounded-full bg-red-500">
                    <IconClock class="mt-0.5 size-4! shrink-0 leading-[100%] text-white" filled />
                  </div>
                  <span class="text-[11px] font-semibold text-gray-700">Terminated at</span>
                </div>
                <p class="text-[10px] text-gray-700">2026-18-09 11:35:56</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
</template>
