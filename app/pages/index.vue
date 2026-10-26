<script setup lang="ts">
import CircleProgressBar from '~/components/CircleProgressBar.vue'
import IconLogo from '~~/public/icons/logo.svg'
import IconLineRunning from '~~/public/icons/line_running.svg'
import IconLineUp from '~~/public/icons/chart/line_up.svg'
import IconChevronLeft from '~~/public/icons/chevron-left.svg'
import IconChevronRight from '~~/public/icons/chevron-right.svg'
import IconFilter from '~~/public/icons/filter.svg'
import IconProductity from '~~/public/icons/productivity.svg'
import IconProductionLine from '~~/public/icons/lines.svg'
import IconProject from '~~/public/icons/project.svg'
import IconUsers from '~~/public/icons/users.svg'
import IconSync from '~~/public/icons/sync.svg'
import IconTag from '~~/public/icons/tag.svg'
</script>

<template>
  <div class="bg-primary h-screen w-screen">
    <div
      class="flex items-center justify-between border-b border-b-gray-200 bg-white bg-linear-180 drop-shadow-xl"
    >
      <div class="flex items-center gap-4 px-6 pt-4 pb-2">
        <IconLogo class="mb-3! h-12.25! w-16.25!" filled />
        <div class="flex flex-col gap-0.5">
          <h2 class="text-xl leading-[100%] font-bold uppercase">Yield output</h2>
          <p class="text-sm leading-[150%] text-black/60">Realtime monitoring</p>
        </div>
      </div>

      <div class="flex items-center gap-3.5">
        <div class="flex items-center gap-3.5">
          <button
            class="bg-primary group/chevron-right cursor-pointer rounded-full p-2 duration-300 hover:bg-blue-600"
          >
            <IconChevronLeft class="size-4! group-hover/chevron-right:text-white!" filled />
          </button>
          <span class="font-medium">SMT</span>
          <button
            class="bg-primary group/chevron-right cursor-pointer rounded-full p-2 duration-300 hover:bg-blue-600"
          >
            <IconChevronRight
              class="size-4! text-gray-700 group-hover/chevron-right:text-white!"
              filled
            />
          </button>
        </div>
        <div class="h-8 w-px bg-black/10" />
        <GlobalSearchInput />
        <div class="h-8 w-px bg-black/10" />
        <div
          role="button"
          class="flex cursor-pointer items-center gap-1.5 rounded-xl bg-blue-500 px-2.5 py-1.5"
        >
          <IconFilter class="size-6! text-white" filled />
          <span class="text-sm text-white">Filter Options</span>
        </div>
      </div>

      <div class="flex flex-col items-end gap-1.5 pr-6">
        <div class="flex items-center gap-1.5">
          <div class="flex items-center gap-2.5 rounded-md bg-black/8 px-2.5 py-1">
            <div class="flex size-2.5 items-center justify-center rounded-full bg-green-500">
              <div class="size-2.5 animate-ping rounded-full bg-green-400" />
            </div>
            <span class="text-xs"> Connected <span class="font-bold">SSE</span> </span>
          </div>
          <div class="h-4 w-px bg-black/10" />
          <div class="flex items-center gap-1.5 rounded-md px-2.5 py-0.5 leading-[100%]">
            <IconTag class="mt-0.5 size-4! text-gray-500" filled />
            <span class="text-xs leading-[100%]">Version <span class="font-bold">1.0.0</span></span>
          </div>
        </div>

        <div class="h-px w-full border-t border-black/8" />
        <div class="relative flex h-8 items-center gap-0.5">
          <div
            class="flex items-center gap-1.5 rounded-lg border border-white/10 bg-linear-to-br from-blue-600 to-blue-400 py-1 pr-2 pl-1 text-gray-100"
          >
            <p
              class="rounded-md bg-white px-1.5 py-1.5 text-xs leading-[100%] font-semibold text-blue-700"
            >
              25
            </p>
            <p class="text-[13px] text-gray-100">August</p>
          </div>
          <div class="h-full w-[0.5px] bg-white/10"></div>
          <SystemDigitalClock />
        </div>
      </div>
    </div>

    <div class="relative mt-4 grid grid-cols-4 gap-4 px-5">
      <div
        class="relative col-span-1 flex items-center justify-between overflow-hidden rounded-2xl bg-white py-4 pr-5 pl-9"
      >
        <!-- Floating vertical bar -->
        <div
          class="bg-primary absolute top-1/2 bottom-0 left-0 flex -translate-y-1/2 items-center justify-center rounded-r-md px-1.5"
        >
          <div class="h-10 w-1.5 rounded-2xl bg-linear-to-b from-blue-500 to-blue-300" />
        </div>
        <div class="flex flex-col gap-1.5">
          <div class="w-fit rounded-lg bg-blue-500 px-3 py-1 text-xs text-white">Total Yield</div>
          <h2 class="text-3xl font-bold text-blue-500">19.09%</h2>
          <p class="text-xs text-gray-500">Daily productivity</p>
        </div>
        <IconProductity class="z-20 size-12! text-blue-400" filled />
        <!-- Floating -->
        <div
          class="absolute right-1.5 bottom-1.5 z-20 flex size-5 items-center justify-center rounded-full bg-blue-400"
        >
          <IconSync class="size-4! animate-spin text-white" filled />
        </div>
        <div
          class="absolute top-0 -right-1/6 z-10 size-40 rounded-full bg-linear-to-r from-blue-50/70 to-white 2xl:-right-1/8"
        />
      </div>

      <div
        class="relative col-span-1 flex items-center justify-between overflow-hidden rounded-2xl bg-white py-4 pr-5 pl-9"
      >
        <!-- Floating vertical bar -->
        <div
          class="bg-primary absolute top-1/2 bottom-0 left-0 flex -translate-y-1/2 items-center justify-center rounded-r-md px-1.5"
        >
          <div class="h-10 w-1.5 rounded-2xl bg-linear-to-b from-blue-500 to-blue-300" />
        </div>
        <div class="flex flex-col gap-1.5">
          <div class="w-fit rounded-lg bg-blue-500 px-3 py-1 text-xs text-white">Total Lines</div>
          <h2 class="text-3xl font-bold text-blue-500">8.0</h2>
          <p class="text-xs text-gray-500">Production Line</p>
        </div>
        <IconProductionLine class="z-20 size-12! text-blue-400" filled />
        <!-- Floating -->
        <div
          class="absolute right-1.5 bottom-1.5 z-20 flex size-5 items-center justify-center rounded-full bg-blue-400"
        >
          <IconSync class="size-4! animate-spin text-white" filled />
        </div>
        <div
          class="absolute top-0 -right-1/6 z-10 size-40 rounded-full bg-linear-to-r from-blue-50/70 to-white 2xl:-right-1/8"
        />
      </div>

      <div
        class="relative col-span-1 flex items-center justify-between overflow-hidden rounded-2xl bg-white py-4 pr-5 pl-9"
      >
        <!-- Floating vertical bar -->
        <div
          class="bg-primary absolute top-1/2 bottom-0 left-0 flex -translate-y-1/2 items-center justify-center rounded-r-md px-1.5"
        >
          <div class="h-10 w-1.5 rounded-2xl bg-linear-to-b from-blue-500 to-blue-300" />
        </div>
        <div class="flex flex-col gap-1.5">
          <div class="w-fit rounded-lg bg-blue-500 px-3 py-1 text-xs text-white">
            Total Projects
          </div>
          <h2 class="text-3xl font-bold text-blue-500">144.0</h2>
          <p class="text-xs text-gray-500">Production Planning</p>
        </div>
        <IconProject class="z-20 size-12! text-blue-400" filled />
        <!-- Floating -->
        <div
          class="absolute right-1.5 bottom-1.5 z-20 flex size-5 items-center justify-center rounded-full bg-blue-400"
        >
          <IconSync class="size-4! animate-spin text-white" filled />
        </div>
        <div
          class="absolute top-0 -right-1/6 z-10 size-40 rounded-full bg-linear-to-r from-blue-50/70 to-white 2xl:-right-1/8"
        />
      </div>

      <div
        class="relative col-span-1 flex items-center justify-between overflow-hidden rounded-2xl bg-white py-4 pr-5 pl-9"
      >
        <!-- Floating vertical bar -->
        <div
          class="bg-primary absolute top-1/2 bottom-0 left-0 flex -translate-y-1/2 items-center justify-center rounded-r-md px-1.5"
        >
          <div class="h-10 w-1.5 rounded-2xl bg-linear-to-b from-blue-500 to-blue-300" />
        </div>
        <div class="flex flex-col gap-1.5">
          <div class="w-fit rounded-lg bg-blue-500 px-3 py-1 text-xs text-white">Total Admin</div>
          <h2 class="text-3xl font-bold text-blue-500">10.0</h2>
          <p class="text-xs text-gray-500">Production Data Entry</p>
        </div>
        <IconUsers class="z-20 size-12! text-blue-400" filled />
        <!-- Floating -->
        <div
          class="absolute right-1.5 bottom-1.5 z-20 flex size-5 items-center justify-center rounded-full bg-blue-400"
        >
          <IconSync class="size-4! animate-spin text-white" filled />
        </div>
        <div
          class="absolute top-0 -right-1/6 z-10 size-40 rounded-full bg-linear-to-r from-blue-50/70 to-white 2xl:-right-1/8"
        />
      </div>
    </div>

    <div class="mt-4 flex items-center justify-between px-6">
      <div class="flex flex-col gap-1">
        <h2 class="text-xl font-bold text-blue-500 uppercase">Production Lines</h2>
        <div class="h-px w-50 bg-linear-to-r from-blue-300 to-transparent" />
        <p class="text-xs text-gray-500">Leverage digital - Web 2.0</p>
      </div>

      <button
        class="flex cursor-pointer items-center gap-1.5 rounded-lg bg-linear-to-r from-blue-500 to-blue-400 px-3 py-1.5"
      >
        <IconSync class="text-primary size-5!" filled />
        <span class="text-sm text-white">Manual sync</span>
      </button>
    </div>

    <div class="mt-4 grid grid-cols-4 gap-2.5 px-4 pb-4">
      <div
        class="relative flex w-full flex-col gap-2.5 rounded-3xl border border-black/8 bg-white px-4 pt-6 pb-4"
      >
        <div
          class="absolute top-1.5 right-1.5 mb-1! flex items-center gap-1.5 rounded-tr-2xl bg-linear-to-r from-transparent to-green-600/15 px-4 py-1 text-sm text-green-500"
        >
          <div>
            <IconLineRunning class="size-5! animate-spin" filled />
          </div>
          <span class="font-semibold">Running</span>
        </div>

        <div class="mt-1.5 flex items-center gap-4">
          <div
            class="bg-primary flex size-28 items-center justify-center rounded-full border border-green-500/20"
          >
            <CircleProgressBar :percent="75" :size="95" color="text-green-500" font-size="18px" />
          </div>
          <div class="flex flex-col gap-2.5">
            <p class="text-sm text-black/30">
              <span class="font-bold text-green-700">PROD. </span>LINE 01
            </p>
            <div
              class="flex items-center justify-between gap-2 px-1 text-2xl leading-[120%] font-bold text-gray-800"
            >
              <div class="relative flex gap-2">
                <div class="flex items-center gap-1.5">
                  <AnimateNumber :value="2409" class="font-extralight! text-gray-500!" />
                  <span class="text-lg text-gray-300">/</span>
                  <span>{{ formatNumber(2409) }}</span>
                </div>
              </div>
              <IconLineUp class="size-4! animate-pulse text-green-500!" filled />
            </div>
            <div
              class="flex grow items-center gap-2 rounded-md bg-green-600/10 px-2 py-1.5 text-[10px] leading-[100%] text-gray-500"
            >
              <span class="rounded-sm bg-green-500 px-1.5 py-1 font-bold text-white">PRJ</span
              ><span>ABR908-206485HWLF</span>
            </div>
          </div>
        </div>

        <div class="bg-primary/65 flex flex-col gap-1.5 rounded-xl p-2">
          <div class="flex items-center justify-between rounded-lg bg-green-600/8 px-2 py-1.5">
            <p class="text-sm font-bold text-green-700">Overall Summary</p>
            <span class="text-sm text-green-600">%</span>
          </div>
          <ul class="flex flex-col gap-1 px-3">
            <li class="flex items-center justify-between text-sm">
              <span class="font-bold text-gray-700">UPH.%</span>
              <span class="text-[13px] text-gray-500">12.09 %</span>
            </li>
            <li class="flex items-center justify-between text-sm">
              <span class="font-bold text-gray-700">OR.%</span>
              <span class="text-[13px] text-gray-500">50.68 %</span>
            </li>
            <li class="flex items-center justify-between text-sm">
              <span class="font-bold text-gray-700">Update time</span>
              <span class="text-[13px] text-gray-500">08:30 AM</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="relative flex w-full flex-col gap-2.5 rounded-3xl border border-black/8 bg-white px-4 pt-6 pb-4"
      >
        <div
          class="absolute top-1.5 right-1.5 mb-1! flex items-center gap-1.5 rounded-tr-2xl bg-linear-to-r from-transparent to-green-600/15 px-4 py-1 text-sm text-green-500"
        >
          <div>
            <IconLineRunning class="size-5! animate-spin" filled />
          </div>
          <span class="font-semibold">Running</span>
        </div>

        <div class="mt-1.5 flex items-center gap-4">
          <div
            class="bg-primary flex size-28 items-center justify-center rounded-full border border-green-500/20"
          >
            <CircleProgressBar :percent="75" :size="95" color="text-green-500" font-size="18px" />
          </div>
          <div class="flex flex-col gap-2.5">
            <p class="text-sm text-black/30">
              <span class="font-bold text-green-700">PROD. </span>LINE 01
            </p>
            <div
              class="flex items-center justify-between gap-2 px-1 text-2xl leading-[120%] font-bold text-gray-800"
            >
              <div class="relative flex gap-2">
                <div class="flex items-center gap-1.5">
                  <AnimateNumber :value="2409" class="font-extralight! text-gray-500!" />
                  <span class="text-lg text-gray-300">/</span>
                  <span>{{ formatNumber(2409) }}</span>
                </div>
              </div>
              <IconLineUp class="size-4! animate-pulse text-green-500!" filled />
            </div>
            <div
              class="flex grow items-center gap-2 rounded-md bg-green-600/10 px-2 py-1.5 text-[10px] leading-[100%] text-gray-500"
            >
              <span class="rounded-sm bg-green-500 px-1.5 py-1 font-bold text-white">PRJ</span
              ><span>ABR908-206485HWLF</span>
            </div>
          </div>
        </div>

        <div class="bg-primary/65 flex flex-col gap-1.5 rounded-xl p-2">
          <div class="flex items-center justify-between rounded-lg bg-green-600/8 px-2 py-1.5">
            <p class="text-sm font-bold text-green-700">Overall Summary</p>
            <span class="text-sm text-green-600">%</span>
          </div>
          <ul class="flex flex-col gap-1 px-3">
            <li class="flex items-center justify-between text-sm">
              <span class="font-bold text-gray-700">UPH.%</span>
              <span class="text-[13px] text-gray-500">12.09 %</span>
            </li>
            <li class="flex items-center justify-between text-sm">
              <span class="font-bold text-gray-700">OR.%</span>
              <span class="text-[13px] text-gray-500">50.68 %</span>
            </li>
            <li class="flex items-center justify-between text-sm">
              <span class="font-bold text-gray-700">Update time</span>
              <span class="text-[13px] text-gray-500">08:30 AM</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="relative flex w-full flex-col gap-2.5 rounded-3xl border border-black/8 bg-white px-4 pt-6 pb-4"
      >
        <div
          class="absolute top-1.5 right-1.5 mb-1! flex items-center gap-1.5 rounded-tr-2xl bg-linear-to-r from-transparent to-green-600/15 px-4 py-1 text-sm text-green-500"
        >
          <div>
            <IconLineRunning class="size-5! animate-spin" filled />
          </div>
          <span class="font-semibold">Running</span>
        </div>

        <div class="mt-1.5 flex items-center gap-4">
          <div
            class="bg-primary flex size-28 items-center justify-center rounded-full border border-green-500/20"
          >
            <CircleProgressBar :percent="75" :size="95" color="text-green-500" font-size="18px" />
          </div>
          <div class="flex flex-col gap-2.5">
            <p class="text-sm text-black/30">
              <span class="font-bold text-green-700">PROD. </span>LINE 01
            </p>
            <div
              class="flex items-center justify-between gap-2 px-1 text-2xl leading-[120%] font-bold text-gray-800"
            >
              <div class="relative flex gap-2">
                <div class="flex items-center gap-1.5">
                  <AnimateNumber :value="2409" class="font-extralight! text-gray-500!" />
                  <span class="text-lg text-gray-300">/</span>
                  <span>{{ formatNumber(2409) }}</span>
                </div>
              </div>
              <IconLineUp class="size-4! animate-pulse text-green-500!" filled />
            </div>
            <div
              class="flex grow items-center gap-2 rounded-md bg-green-600/10 px-2 py-1.5 text-[10px] leading-[100%] text-gray-500"
            >
              <span class="rounded-sm bg-green-500 px-1.5 py-1 font-bold text-white">PRJ</span
              ><span>ABR908-206485HWLF</span>
            </div>
          </div>
        </div>

        <div class="bg-primary/65 flex flex-col gap-1.5 rounded-xl p-2">
          <div class="flex items-center justify-between rounded-lg bg-green-600/8 px-2 py-1.5">
            <p class="text-sm font-bold text-green-700">Overall Summary</p>
            <span class="text-sm text-green-600">%</span>
          </div>
          <ul class="flex flex-col gap-1 px-3">
            <li class="flex items-center justify-between text-sm">
              <span class="font-bold text-gray-700">UPH.%</span>
              <span class="text-[13px] text-gray-500">12.09 %</span>
            </li>
            <li class="flex items-center justify-between text-sm">
              <span class="font-bold text-gray-700">OR.%</span>
              <span class="text-[13px] text-gray-500">50.68 %</span>
            </li>
            <li class="flex items-center justify-between text-sm">
              <span class="font-bold text-gray-700">Update time</span>
              <span class="text-[13px] text-gray-500">08:30 AM</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="relative flex w-full flex-col gap-2.5 rounded-3xl border border-black/8 bg-white px-4 pt-6 pb-4"
      >
        <div
          class="absolute top-1.5 right-1.5 mb-1! flex items-center gap-1.5 rounded-tr-2xl bg-linear-to-r from-transparent to-green-600/15 px-4 py-1 text-sm text-green-500"
        >
          <div>
            <IconLineRunning class="size-5! animate-spin" filled />
          </div>
          <span class="font-semibold">Running</span>
        </div>

        <div class="mt-1.5 flex items-center gap-4">
          <div
            class="bg-primary flex size-28 items-center justify-center rounded-full border border-green-500/20"
          >
            <CircleProgressBar :percent="75" :size="95" color="text-green-500" font-size="18px" />
          </div>
          <div class="flex flex-col gap-2.5">
            <p class="text-sm text-black/30">
              <span class="font-bold text-green-700">PROD. </span>LINE 01
            </p>
            <div
              class="flex items-center justify-between gap-2 px-1 text-2xl leading-[120%] font-bold text-gray-800"
            >
              <div class="relative flex gap-2">
                <div class="flex items-center gap-1.5">
                  <AnimateNumber :value="2409" class="font-extralight! text-gray-500!" />
                  <span class="text-lg text-gray-300">/</span>
                  <span>{{ formatNumber(2409) }}</span>
                </div>
              </div>
              <IconLineUp class="size-4! animate-pulse text-green-500!" filled />
            </div>
            <div
              class="flex grow items-center gap-2 rounded-md bg-green-600/10 px-2 py-1.5 text-[10px] leading-[100%] text-gray-500"
            >
              <span class="rounded-sm bg-green-500 px-1.5 py-1 font-bold text-white">PRJ</span
              ><span>ABR908-206485HWLF</span>
            </div>
          </div>
        </div>

        <div class="bg-primary/65 flex flex-col gap-1.5 rounded-xl p-2">
          <div class="flex items-center justify-between rounded-lg bg-green-600/8 px-2 py-1.5">
            <p class="text-sm font-bold text-green-700">Overall Summary</p>
            <span class="text-sm text-green-600">%</span>
          </div>
          <ul class="flex flex-col gap-1 px-3">
            <li class="flex items-center justify-between text-sm">
              <span class="font-bold text-gray-700">UPH.%</span>
              <span class="text-[13px] text-gray-500">12.09 %</span>
            </li>
            <li class="flex items-center justify-between text-sm">
              <span class="font-bold text-gray-700">OR.%</span>
              <span class="text-[13px] text-gray-500">50.68 %</span>
            </li>
            <li class="flex items-center justify-between text-sm">
              <span class="font-bold text-gray-700">Update time</span>
              <span class="text-[13px] text-gray-500">08:30 AM</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="relative flex w-full flex-col gap-2.5 rounded-3xl border border-black/8 bg-white px-4 pt-6 pb-4"
      >
        <div
          class="absolute top-1.5 right-1.5 mb-1! flex items-center gap-1.5 rounded-tr-2xl bg-linear-to-r from-transparent to-green-600/15 px-4 py-1 text-sm text-green-500"
        >
          <div>
            <IconLineRunning class="size-5! animate-spin" filled />
          </div>
          <span class="font-semibold">Running</span>
        </div>

        <div class="mt-1.5 flex items-center gap-4">
          <div
            class="bg-primary flex size-28 items-center justify-center rounded-full border border-green-500/20"
          >
            <CircleProgressBar :percent="75" :size="95" color="text-green-500" font-size="18px" />
          </div>
          <div class="flex flex-col gap-2.5">
            <p class="text-sm text-black/30">
              <span class="font-bold text-green-700">PROD. </span>LINE 01
            </p>
            <div
              class="flex items-center justify-between gap-2 px-1 text-2xl leading-[120%] font-bold text-gray-800"
            >
              <div class="relative flex gap-2">
                <div class="flex items-center gap-1.5">
                  <AnimateNumber :value="2409" class="font-extralight! text-gray-500!" />
                  <span class="text-lg text-gray-300">/</span>
                  <span>{{ formatNumber(2409) }}</span>
                </div>
              </div>
              <IconLineUp class="size-4! animate-pulse text-green-500!" filled />
            </div>
            <div
              class="flex grow items-center gap-2 rounded-md bg-green-600/10 px-2 py-1.5 text-[10px] leading-[100%] text-gray-500"
            >
              <span class="rounded-sm bg-green-500 px-1.5 py-1 font-bold text-white">PRJ</span
              ><span>ABR908-206485HWLF</span>
            </div>
          </div>
        </div>

        <div class="bg-primary/65 flex flex-col gap-1.5 rounded-xl p-2">
          <div class="flex items-center justify-between rounded-lg bg-green-600/8 px-2 py-1.5">
            <p class="text-sm font-bold text-green-700">Overall Summary</p>
            <span class="text-sm text-green-600">%</span>
          </div>
          <ul class="flex flex-col gap-1 px-3">
            <li class="flex items-center justify-between text-sm">
              <span class="font-bold text-gray-700">UPH.%</span>
              <span class="text-[13px] text-gray-500">12.09 %</span>
            </li>
            <li class="flex items-center justify-between text-sm">
              <span class="font-bold text-gray-700">OR.%</span>
              <span class="text-[13px] text-gray-500">50.68 %</span>
            </li>
            <li class="flex items-center justify-between text-sm">
              <span class="font-bold text-gray-700">Update time</span>
              <span class="text-[13px] text-gray-500">08:30 AM</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="relative flex w-full flex-col gap-2.5 rounded-3xl border border-black/8 bg-white px-4 pt-6 pb-4"
      >
        <div
          class="absolute top-1.5 right-1.5 mb-1! flex items-center gap-1.5 rounded-tr-2xl bg-linear-to-r from-transparent to-green-600/15 px-4 py-1 text-sm text-green-500"
        >
          <div>
            <IconLineRunning class="size-5! animate-spin" filled />
          </div>
          <span class="font-semibold">Running</span>
        </div>

        <div class="mt-1.5 flex items-center gap-4">
          <div
            class="bg-primary flex size-28 items-center justify-center rounded-full border border-green-500/20"
          >
            <CircleProgressBar :percent="75" :size="95" color="text-green-500" font-size="18px" />
          </div>
          <div class="flex flex-col gap-2.5">
            <p class="text-sm text-black/30">
              <span class="font-bold text-green-700">PROD. </span>LINE 01
            </p>
            <div
              class="flex items-center justify-between gap-2 px-1 text-2xl leading-[120%] font-bold text-gray-800"
            >
              <div class="relative flex gap-2">
                <div class="flex items-center gap-1.5">
                  <AnimateNumber :value="2409" class="font-extralight! text-gray-500!" />
                  <span class="text-lg text-gray-300">/</span>
                  <span>{{ formatNumber(2409) }}</span>
                </div>
              </div>
              <IconLineUp class="size-4! animate-pulse text-green-500!" filled />
            </div>
            <div
              class="flex grow items-center gap-2 rounded-md bg-green-600/10 px-2 py-1.5 text-[10px] leading-[100%] text-gray-500"
            >
              <span class="rounded-sm bg-green-500 px-1.5 py-1 font-bold text-white">PRJ</span
              ><span>ABR908-206485HWLF</span>
            </div>
          </div>
        </div>

        <div class="bg-primary/65 flex flex-col gap-1.5 rounded-xl p-2">
          <div class="flex items-center justify-between rounded-lg bg-green-600/8 px-2 py-1.5">
            <p class="text-sm font-bold text-green-700">Overall Summary</p>
            <span class="text-sm text-green-600">%</span>
          </div>
          <ul class="flex flex-col gap-1 px-3">
            <li class="flex items-center justify-between text-sm">
              <span class="font-bold text-gray-700">UPH.%</span>
              <span class="text-[13px] text-gray-500">12.09 %</span>
            </li>
            <li class="flex items-center justify-between text-sm">
              <span class="font-bold text-gray-700">OR.%</span>
              <span class="text-[13px] text-gray-500">50.68 %</span>
            </li>
            <li class="flex items-center justify-between text-sm">
              <span class="font-bold text-gray-700">Update time</span>
              <span class="text-[13px] text-gray-500">08:30 AM</span>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="relative flex w-full flex-col gap-2.5 rounded-3xl border border-black/8 bg-white px-4 pt-6 pb-4"
      >
        <div
          class="absolute top-1.5 right-1.5 mb-1! flex items-center gap-1.5 rounded-tr-2xl bg-linear-to-r from-transparent to-green-600/15 px-4 py-1 text-sm text-green-500"
        >
          <div>
            <IconLineRunning class="size-5! animate-spin" filled />
          </div>
          <span class="font-semibold">Running</span>
        </div>

        <div class="mt-1.5 flex items-center gap-4">
          <div
            class="bg-primary flex size-28 items-center justify-center rounded-full border border-green-500/20"
          >
            <CircleProgressBar :percent="75" :size="95" color="text-green-500" font-size="18px" />
          </div>
          <div class="flex flex-col gap-2.5">
            <p class="text-sm text-black/30">
              <span class="font-bold text-green-700">PROD. </span>LINE 01
            </p>
            <div
              class="flex items-center justify-between gap-2 px-1 text-2xl leading-[120%] font-bold text-gray-800"
            >
              <div class="relative flex gap-2">
                <div class="flex items-center gap-1.5">
                  <AnimateNumber :value="2409" class="font-extralight! text-gray-500!" />
                  <span class="text-lg text-gray-300">/</span>
                  <span>{{ formatNumber(2409) }}</span>
                </div>
              </div>
              <IconLineUp class="size-4! animate-pulse text-green-500!" filled />
            </div>
            <div
              class="flex grow items-center gap-2 rounded-md bg-green-600/10 px-2 py-1.5 text-[10px] leading-[100%] text-gray-500"
            >
              <span class="rounded-sm bg-green-500 px-1.5 py-1 font-bold text-white">PRJ</span
              ><span>ABR908-206485HWLF</span>
            </div>
          </div>
        </div>

        <div class="bg-primary/65 flex flex-col gap-1.5 rounded-xl p-2">
          <div class="flex items-center justify-between rounded-lg bg-green-600/8 px-2 py-1.5">
            <p class="text-sm font-bold text-green-700">Overall Summary</p>
            <span class="text-sm text-green-600">%</span>
          </div>
          <ul class="flex flex-col gap-1 px-3">
            <li class="flex items-center justify-between text-sm">
              <span class="font-bold text-gray-700">UPH.%</span>
              <span class="text-[13px] text-gray-500">12.09 %</span>
            </li>
            <li class="flex items-center justify-between text-sm">
              <span class="font-bold text-gray-700">OR.%</span>
              <span class="text-[13px] text-gray-500">50.68 %</span>
            </li>
            <li class="flex items-center justify-between text-sm">
              <span class="font-bold text-gray-700">Update time</span>
              <span class="text-[13px] text-gray-500">08:30 AM</span>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="relative flex w-full flex-col gap-2.5 rounded-3xl border border-black/8 bg-white px-4 pt-6 pb-4"
      >
        <div
          class="absolute top-1.5 right-1.5 mb-1! flex items-center gap-1.5 rounded-tr-2xl bg-linear-to-r from-transparent to-green-600/15 px-4 py-1 text-sm text-green-500"
        >
          <div>
            <IconLineRunning class="size-5! animate-spin" filled />
          </div>
          <span class="font-semibold">Running</span>
        </div>

        <div class="mt-1.5 flex items-center gap-4">
          <div
            class="bg-primary flex size-28 items-center justify-center rounded-full border border-green-500/20"
          >
            <CircleProgressBar :percent="75" :size="95" color="text-green-500" font-size="18px" />
          </div>
          <div class="flex flex-col gap-2.5">
            <p class="text-sm text-black/30">
              <span class="font-bold text-green-700">PROD. </span>LINE 01
            </p>
            <div
              class="flex items-center justify-between gap-2 px-1 text-2xl leading-[120%] font-bold text-gray-800"
            >
              <div class="relative flex gap-2">
                <div class="flex items-center gap-1.5">
                  <AnimateNumber :value="2409" class="font-extralight! text-gray-500!" />
                  <span class="text-lg text-gray-300">/</span>
                  <span>{{ formatNumber(2409) }}</span>
                </div>
              </div>
              <IconLineUp class="size-4! animate-pulse text-green-500!" filled />
            </div>
            <div
              class="flex grow items-center gap-2 rounded-md bg-green-600/10 px-2 py-1.5 text-[10px] leading-[100%] text-gray-500"
            >
              <span class="rounded-sm bg-green-500 px-1.5 py-1 font-bold text-white">PRJ</span
              ><span>ABR908-206485HWLF</span>
            </div>
          </div>
        </div>

        <div class="bg-primary/65 flex flex-col gap-1.5 rounded-xl p-2">
          <div class="flex items-center justify-between rounded-lg bg-green-600/8 px-2 py-1.5">
            <p class="text-sm font-bold text-green-700">Overall Summary</p>
            <span class="text-sm text-green-600">%</span>
          </div>
          <ul class="flex flex-col gap-1 px-3">
            <li class="flex items-center justify-between text-sm">
              <span class="font-bold text-gray-700">UPH.%</span>
              <span class="text-[13px] text-gray-500">12.09 %</span>
            </li>
            <li class="flex items-center justify-between text-sm">
              <span class="font-bold text-gray-700">OR.%</span>
              <span class="text-[13px] text-gray-500">50.68 %</span>
            </li>
            <li class="flex items-center justify-between text-sm">
              <span class="font-bold text-gray-700">Update time</span>
              <span class="text-[13px] text-gray-500">08:30 AM</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
