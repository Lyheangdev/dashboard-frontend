<script setup lang="ts">
import CircleProgressBar from "~/components/CircleProgressBar.vue";
import IconLogo from "~~/public/icons/logo.svg";
import IconLineRunning from "~~/public/icons/line_running.svg";
import IconLineUp from "~~/public/icons/chart/line_up.svg";
import IconChevronLeft from "~~/public/icons/chevron-left.svg";
import IconChevronRight from "~~/public/icons/chevron-right.svg";
import IconFilter from "~~/public/icons/filter.svg";
import IconProductity from "~~/public/icons/productivity.svg";
import IconProductionLine from "~~/public/icons/lines.svg";
import IconProject from "~~/public/icons/project.svg";
import IconUsers from "~~/public/icons/users.svg";
import IconSync from "~~/public/icons/sync.svg";
import IconTag from "~~/public/icons/tag.svg"
</script>

<template>
    <div class="w-screen h-screen bg-primary">
        <div class="bg-linear-180 drop-shadow-xl bg-white border-b border-b-gray-200 flex items-center justify-between">
            <div class="px-6 pt-4 pb-2 flex items-center gap-4">
                <IconLogo class="w-16.25! h-12.25! mb-3!" filled />
                <div class="flex flex-col gap-0.5">
                    <h2 class="uppercase text-xl font-bold leading-[100%]">
                        Yield output
                    </h2>
                    <p class="text-black/60 leading-[150%] text-sm">
                        Realtime monitoring
                    </p>
                </div>
            </div>
    
            <div class="flex items-center gap-3.5">
                <div class="flex items-center gap-3.5">
                    <button class="bg-primary p-2 rounded-full hover:bg-blue-600 duration-300 group/chevron-right cursor-pointer">
                <IconChevronLeft
                  class="size-4! group-hover/chevron-right:text-white!"
                  filled
                />
              </button>
                    <span class="font-medium">SMT</span>
                    <button class="bg-primary p-2 rounded-full hover:bg-blue-600 duration-300 group/chevron-right cursor-pointer">
                <IconChevronRight
                  class="size-4! text-gray-700 group-hover/chevron-right:text-white!"
                  filled
                />
              </button>
                </div>
                <div class="h-8 w-px bg-black/10" />
                <GlobalSearchInput />
                <div class="h-8 w-px bg-black/10" />
                <div role="button" class="flex items-center gap-1.5 cursor-pointer bg-blue-500 py-1.5 px-2.5 rounded-xl">
                    <IconFilter class="size-6! text-white" filled />
                    <span class="text-sm text-white">Filter Options</span>
                </div>
            </div>
    
            <div class="flex flex-col gap-1.5 items-end pr-6">
                <div class="flex items-center gap-1.5">
                    <div class="flex items-center gap-2.5 bg-black/8 px-2.5 py-1 rounded-md">
                        <div class="size-2.5 rounded-full bg-green-500 flex items-center justify-center">
                            <div class="size-2.5 rounded-full bg-green-400 animate-ping" />
                        </div>
                        <span class="text-xs">
                            Connected <span class="font-bold">SSE</span>
                        </span>
                    </div>
                    <div class="h-4 w-px bg-black/10" />
                    <div class="px-2.5 rounded-md leading-[100%] flex items-center gap-1.5 py-0.5">
                        <IconTag class="size-4! mt-0.5 text-gray-500" filled />
                        <span class="text-xs leading-[100%]">Version <span class="font-bold">1.0.0</span></span>
                    </div>
                </div>
    
                <div class="w-full h-px border-t border-black/8" />
                <div class="relative h-8 flex items-center gap-0.5">
                    <div class="text-gray-100 flex items-center gap-1.5 border border-white/10 bg-linear-to-br from-blue-600 to-blue-400 rounded-lg pl-1 pr-2 py-1">
                        <p class="text-xs text-blue-700 bg-white rounded-md py-1.5 px-1.5 font-semibold leading-[100%]">
                            25
                        </p>
                        <p class="text-[13px] text-gray-100">August</p>
                    </div>
                    <div class="h-full w-[0.5px] bg-white/10"></div>
                    <SystemDigitalClock />
                </div>
            </div>
        </div>
    
        <div class="relative px-5 grid grid-cols-4 gap-4 mt-4">
            <div class="relative overflow-hidden bg-white col-span-1 pl-9 pr-5 py-4 rounded-2xl flex items-center justify-between">
                <!-- Floating vertical bar -->
                <div class="absolute left-0 top-1/2 -translate-y-1/2 bottom-0 flex items-center justify-center bg-primary px-1.5 rounded-r-md">
                    <div class="h-10 w-1.5 rounded-2xl bg-linear-to-b from-blue-500 to-blue-300" />
                </div>
                <div class="flex flex-col gap-1.5">
                    <div class="text-white bg-blue-500 px-3 py-1 rounded-lg w-fit text-xs">
                        Total Yield
                    </div>
                    <h2 class="text-3xl font-bold text-blue-500">19.09%</h2>
                    <p class="text-xs text-gray-500">Daily productivity</p>
                </div>
                <IconProductity class="size-12! text-blue-400 z-20" filled />
                <!-- Floating -->
                <div class="absolute bottom-1.5 right-1.5 z-20 size-5 rounded-full bg-blue-400 flex items-center justify-center">
                    <IconSync class="size-4! text-white animate-spin" filled />
                </div>
                <div class="size-40 bg-linear-to-r from-blue-50/70 to-white rounded-full absolute top-0 -right-1/6 2xl:-right-1/8 z-10" />
            </div>
    
            <div class="relative overflow-hidden bg-white col-span-1 pl-9 pr-5 py-4 rounded-2xl flex items-center justify-between">
                <!-- Floating vertical bar -->
                <div class="absolute left-0 top-1/2 -translate-y-1/2 bottom-0 flex items-center justify-center bg-primary px-1.5 rounded-r-md">
                    <div class="h-10 w-1.5 rounded-2xl bg-linear-to-b from-blue-500 to-blue-300" />
                </div>
                <div class="flex flex-col gap-1.5">
                    <div class="text-white bg-blue-500 px-3 py-1 rounded-lg w-fit text-xs">
                        Total Lines
                    </div>
                    <h2 class="text-3xl font-bold text-blue-500">8.0</h2>
                    <p class="text-xs text-gray-500">Production Line</p>
                </div>
                <IconProductionLine class="size-12! text-blue-400 z-20" filled />
                <!-- Floating -->
                <div class="absolute bottom-1.5 right-1.5 z-20 size-5 rounded-full bg-blue-400 flex items-center justify-center">
                    <IconSync class="size-4! text-white animate-spin" filled />
                </div>
                 <div class="size-40 bg-linear-to-r from-blue-50/70 to-white rounded-full absolute top-0 -right-1/6 2xl:-right-1/8 z-10" />
            </div>
    
            <div class="relative overflow-hidden bg-white col-span-1 pl-9 pr-5 py-4 rounded-2xl flex items-center justify-between">
                <!-- Floating vertical bar -->
                <div class="absolute left-0 top-1/2 -translate-y-1/2 bottom-0 flex items-center justify-center bg-primary px-1.5 rounded-r-md">
                    <div class="h-10 w-1.5 rounded-2xl bg-linear-to-b from-blue-500 to-blue-300" />
                </div>
                <div class="flex flex-col gap-1.5">
                    <div class="text-white bg-blue-500 px-3 py-1 rounded-lg w-fit text-xs">
                        Total Projects
                    </div>
                    <h2 class="text-3xl font-bold text-blue-500">144.0</h2>
                    <p class="text-xs text-gray-500">Production Planning</p>
                </div>
                <IconProject class="size-12! text-blue-400 z-20" filled />
                <!-- Floating -->
                <div class="absolute bottom-1.5 right-1.5 z-20 size-5 rounded-full bg-blue-400 flex items-center justify-center">
                    <IconSync class="size-4! text-white animate-spin" filled />
                </div>
                 <div class="size-40 bg-linear-to-r from-blue-50/70 to-white rounded-full absolute top-0 -right-1/6 2xl:-right-1/8 z-10" />
            </div>
    
            <div class="relative overflow-hidden bg-white col-span-1 pl-9 pr-5 py-4 rounded-2xl flex items-center justify-between">
                <!-- Floating vertical bar -->
                <div class="absolute left-0 top-1/2 -translate-y-1/2 bottom-0 flex items-center justify-center bg-primary px-1.5 rounded-r-md">
                    <div class="h-10 w-1.5 rounded-2xl bg-linear-to-b from-blue-500 to-blue-300" />
                </div>
                <div class="flex flex-col gap-1.5">
                    <div class="text-white bg-blue-500 px-3 py-1 rounded-lg w-fit text-xs">
                        Total Admin
                    </div>
                    <h2 class="text-3xl font-bold text-blue-500">10.0</h2>
                    <p class="text-xs text-gray-500">Production Data Entry</p>
                </div>
                <IconUsers class="size-12! text-blue-400 z-20" filled />
                <!-- Floating -->
                <div class="absolute bottom-1.5 right-1.5 z-20 size-5 rounded-full bg-blue-400 flex items-center justify-center">
                    <IconSync class="size-4! text-white animate-spin" filled />
                </div>
                 <div class="size-40 bg-linear-to-r from-blue-50/70 to-white rounded-full absolute top-0 -right-1/6 2xl:-right-1/8 z-10" />
            </div>
        </div>
    
        <div class="px-6 mt-4 flex justify-between items-center">
            <div class="flex flex-col gap-1">
                <h2 class="text-xl text-blue-500 font-bold uppercase">
                    Production Lines
                </h2>
                <div class="w-50 h-px bg-linear-to-r from-blue-300 to-transparent" />
                <p class="text-gray-500 text-xs">Leverage digital - Web 2.0</p>
            </div>
    
            <button class="flex cursor-pointer items-center gap-1.5 px-3 py-1.5 bg-linear-to-r from-blue-500 to-blue-400 rounded-lg">
            <IconSync class="size-5! text-primary" filled />
            <span class="text-sm text-white">Manual sync</span>
          </button>
        </div>
    
        <div class="mt-4 grid grid-cols-4 gap-2.5 px-4 pb-4">
            <div class="relative flex flex-col gap-2.5 px-4 pt-6 pb-4 w-full bg-white rounded-3xl border border-black/8">
                <div class="flex items-center gap-1.5 absolute top-1.5 right-1.5 bg-linear-to-r from-transparent to-green-600/15 text-green-500 px-4 rounded-tr-2xl mb-1! text-sm py-1">
                    <div>
                        <IconLineRunning class="size-5! animate-spin" filled />
                    </div>
                    <span class="font-semibold">Running</span>
                </div>
    
                <div class="flex gap-4 items-center mt-1.5">
                    <div class="size-28 bg-primary flex items-center justify-center rounded-full border border-green-500/20">
                        <CircleProgressBar :percent="75" :size="95" color="text-green-500" font-size="18px" />
                    </div>
                    <div class="flex flex-col gap-2.5">
                        <p class="text-black/30 text-sm">
                            <span class="text-green-700 font-bold">PROD. </span>LINE 01
                        </p>
                        <div class="flex items-center gap-2 justify-between px-1 font-bold text-2xl leading-[120%] text-gray-800">
                            <div class="relative flex gap-2">
                                <div class="flex items-center gap-1.5">
                                    <AnimateNumber :value="2409" class="font-extralight! text-gray-500!" />
                                    <span class="text-lg text-gray-300">/</span>
                                    <span>{{ formatNumber(2409) }}</span>
                                </div>
                            </div>
                            <IconLineUp class="size-4! text-green-500! animate-pulse" filled />
                        </div>
                        <div class="flex gap-2 items-center text-[10px] text-gray-500 px-2 py-1.5 leading-[100%] bg-green-600/10 rounded-md grow">
                            <span class="font-bold px-1.5 py-1 bg-green-500 rounded-sm text-white">PRJ</span
                  ><span>ABR908-206485HWLF</span>
                        </div>
                    </div>
                </div>
    
                <div class="flex flex-col gap-1.5 p-2 bg-primary/65 rounded-xl">
                    <div class="bg-green-600/8 px-2 py-1.5 rounded-lg flex items-center justify-between">
                        <p class="font-bold text-green-700 text-sm">Overall Summary</p>
                        <span class="text-sm text-green-600">%</span>
                    </div>
                    <ul class="px-3 flex flex-col gap-1">
                        <li class="flex items-center justify-between text-sm">
                            <span class="font-bold text-gray-700">UPH.%</span>
                            <span class="text-gray-500 text-[13px]">12.09 %</span>
                        </li>
                        <li class="flex items-center justify-between text-sm">
                            <span class="font-bold text-gray-700">OR.%</span>
                            <span class="text-gray-500 text-[13px]">50.68 %</span>
                        </li>
                        <li class="flex items-center justify-between text-sm">
                            <span class="font-bold text-gray-700">Update time</span>
                            <span class="text-gray-500 text-[13px]">08:30 AM</span>
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="relative flex flex-col gap-2.5 px-4 pt-6 pb-4 w-full bg-white rounded-3xl border border-black/8">
                <div class="flex items-center gap-1.5 absolute top-1.5 right-1.5 bg-linear-to-r from-transparent to-green-600/15 text-green-500 px-4 rounded-tr-2xl mb-1! text-sm py-1">
                    <div>
                        <IconLineRunning class="size-5! animate-spin" filled />
                    </div>
                    <span class="font-semibold">Running</span>
                </div>
    
                <div class="flex gap-4 items-center mt-1.5">
                    <div class="size-28 bg-primary flex items-center justify-center rounded-full border border-green-500/20">
                        <CircleProgressBar :percent="75" :size="95" color="text-green-500" font-size="18px" />
                    </div>
                    <div class="flex flex-col gap-2.5">
                        <p class="text-black/30 text-sm">
                            <span class="text-green-700 font-bold">PROD. </span>LINE 01
                        </p>
                        <div class="flex items-center gap-2 justify-between px-1 font-bold text-2xl leading-[120%] text-gray-800">
                            <div class="relative flex gap-2">
                                <div class="flex items-center gap-1.5">
                                    <AnimateNumber :value="2409" class="font-extralight! text-gray-500!" />
                                    <span class="text-lg text-gray-300">/</span>
                                    <span>{{ formatNumber(2409) }}</span>
                                </div>
                            </div>
                            <IconLineUp class="size-4! text-green-500! animate-pulse" filled />
                        </div>
                        <div class="flex gap-2 items-center text-[10px] text-gray-500 px-2 py-1.5 leading-[100%] bg-green-600/10 rounded-md grow">
                            <span class="font-bold px-1.5 py-1 bg-green-500 rounded-sm text-white">PRJ</span
                  ><span>ABR908-206485HWLF</span>
                        </div>
                    </div>
                </div>
    
                <div class="flex flex-col gap-1.5 p-2 bg-primary/65 rounded-xl">
                    <div class="bg-green-600/8 px-2 py-1.5 rounded-lg flex items-center justify-between">
                        <p class="font-bold text-green-700 text-sm">Overall Summary</p>
                        <span class="text-sm text-green-600">%</span>
                    </div>
                    <ul class="px-3 flex flex-col gap-1">
                        <li class="flex items-center justify-between text-sm">
                            <span class="font-bold text-gray-700">UPH.%</span>
                            <span class="text-gray-500 text-[13px]">12.09 %</span>
                        </li>
                        <li class="flex items-center justify-between text-sm">
                            <span class="font-bold text-gray-700">OR.%</span>
                            <span class="text-gray-500 text-[13px]">50.68 %</span>
                        </li>
                        <li class="flex items-center justify-between text-sm">
                            <span class="font-bold text-gray-700">Update time</span>
                            <span class="text-gray-500 text-[13px]">08:30 AM</span>
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="relative flex flex-col gap-2.5 px-4 pt-6 pb-4 w-full bg-white rounded-3xl border border-black/8">
                <div class="flex items-center gap-1.5 absolute top-1.5 right-1.5 bg-linear-to-r from-transparent to-green-600/15 text-green-500 px-4 rounded-tr-2xl mb-1! text-sm py-1">
                    <div>
                        <IconLineRunning class="size-5! animate-spin" filled />
                    </div>
                    <span class="font-semibold">Running</span>
                </div>
    
                <div class="flex gap-4 items-center mt-1.5">
                    <div class="size-28 bg-primary flex items-center justify-center rounded-full border border-green-500/20">
                        <CircleProgressBar :percent="75" :size="95" color="text-green-500" font-size="18px" />
                    </div>
                    <div class="flex flex-col gap-2.5">
                        <p class="text-black/30 text-sm">
                            <span class="text-green-700 font-bold">PROD. </span>LINE 01
                        </p>
                        <div class="flex items-center gap-2 justify-between px-1 font-bold text-2xl leading-[120%] text-gray-800">
                            <div class="relative flex gap-2">
                                <div class="flex items-center gap-1.5">
                                    <AnimateNumber :value="2409" class="font-extralight! text-gray-500!" />
                                    <span class="text-lg text-gray-300">/</span>
                                    <span>{{ formatNumber(2409) }}</span>
                                </div>
                            </div>
                            <IconLineUp class="size-4! text-green-500! animate-pulse" filled />
                        </div>
                        <div class="flex gap-2 items-center text-[10px] text-gray-500 px-2 py-1.5 leading-[100%] bg-green-600/10 rounded-md grow">
                            <span class="font-bold px-1.5 py-1 bg-green-500 rounded-sm text-white">PRJ</span
                  ><span>ABR908-206485HWLF</span>
                        </div>
                    </div>
                </div>
    
                <div class="flex flex-col gap-1.5 p-2 bg-primary/65 rounded-xl">
                    <div class="bg-green-600/8 px-2 py-1.5 rounded-lg flex items-center justify-between">
                        <p class="font-bold text-green-700 text-sm">Overall Summary</p>
                        <span class="text-sm text-green-600">%</span>
                    </div>
                    <ul class="px-3 flex flex-col gap-1">
                        <li class="flex items-center justify-between text-sm">
                            <span class="font-bold text-gray-700">UPH.%</span>
                            <span class="text-gray-500 text-[13px]">12.09 %</span>
                        </li>
                        <li class="flex items-center justify-between text-sm">
                            <span class="font-bold text-gray-700">OR.%</span>
                            <span class="text-gray-500 text-[13px]">50.68 %</span>
                        </li>
                        <li class="flex items-center justify-between text-sm">
                            <span class="font-bold text-gray-700">Update time</span>
                            <span class="text-gray-500 text-[13px]">08:30 AM</span>
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="relative flex flex-col gap-2.5 px-4 pt-6 pb-4 w-full bg-white rounded-3xl border border-black/8">
                <div class="flex items-center gap-1.5 absolute top-1.5 right-1.5 bg-linear-to-r from-transparent to-green-600/15 text-green-500 px-4 rounded-tr-2xl mb-1! text-sm py-1">
                    <div>
                        <IconLineRunning class="size-5! animate-spin" filled />
                    </div>
                    <span class="font-semibold">Running</span>
                </div>
    
                <div class="flex gap-4 items-center mt-1.5">
                    <div class="size-28 bg-primary flex items-center justify-center rounded-full border border-green-500/20">
                        <CircleProgressBar :percent="75" :size="95" color="text-green-500" font-size="18px" />
                    </div>
                    <div class="flex flex-col gap-2.5">
                        <p class="text-black/30 text-sm">
                            <span class="text-green-700 font-bold">PROD. </span>LINE 01
                        </p>
                        <div class="flex items-center gap-2 justify-between px-1 font-bold text-2xl leading-[120%] text-gray-800">
                            <div class="relative flex gap-2">
                                <div class="flex items-center gap-1.5">
                                    <AnimateNumber :value="2409" class="font-extralight! text-gray-500!" />
                                    <span class="text-lg text-gray-300">/</span>
                                    <span>{{ formatNumber(2409) }}</span>
                                </div>
                            </div>
                            <IconLineUp class="size-4! text-green-500! animate-pulse" filled />
                        </div>
                        <div class="flex gap-2 items-center text-[10px] text-gray-500 px-2 py-1.5 leading-[100%] bg-green-600/10 rounded-md grow">
                            <span class="font-bold px-1.5 py-1 bg-green-500 rounded-sm text-white">PRJ</span
                  ><span>ABR908-206485HWLF</span>
                        </div>
                    </div>
                </div>
    
                <div class="flex flex-col gap-1.5 p-2 bg-primary/65 rounded-xl">
                    <div class="bg-green-600/8 px-2 py-1.5 rounded-lg flex items-center justify-between">
                        <p class="font-bold text-green-700 text-sm">Overall Summary</p>
                        <span class="text-sm text-green-600">%</span>
                    </div>
                    <ul class="px-3 flex flex-col gap-1">
                        <li class="flex items-center justify-between text-sm">
                            <span class="font-bold text-gray-700">UPH.%</span>
                            <span class="text-gray-500 text-[13px]">12.09 %</span>
                        </li>
                        <li class="flex items-center justify-between text-sm">
                            <span class="font-bold text-gray-700">OR.%</span>
                            <span class="text-gray-500 text-[13px]">50.68 %</span>
                        </li>
                        <li class="flex items-center justify-between text-sm">
                            <span class="font-bold text-gray-700">Update time</span>
                            <span class="text-gray-500 text-[13px]">08:30 AM</span>
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="relative flex flex-col gap-2.5 px-4 pt-6 pb-4 w-full bg-white rounded-3xl border border-black/8">
                <div class="flex items-center gap-1.5 absolute top-1.5 right-1.5 bg-linear-to-r from-transparent to-green-600/15 text-green-500 px-4 rounded-tr-2xl mb-1! text-sm py-1">
                    <div>
                        <IconLineRunning class="size-5! animate-spin" filled />
                    </div>
                    <span class="font-semibold">Running</span>
                </div>
    
                <div class="flex gap-4 items-center mt-1.5">
                    <div class="size-28 bg-primary flex items-center justify-center rounded-full border border-green-500/20">
                        <CircleProgressBar :percent="75" :size="95" color="text-green-500" font-size="18px" />
                    </div>
                    <div class="flex flex-col gap-2.5">
                        <p class="text-black/30 text-sm">
                            <span class="text-green-700 font-bold">PROD. </span>LINE 01
                        </p>
                        <div class="flex items-center gap-2 justify-between px-1 font-bold text-2xl leading-[120%] text-gray-800">
                            <div class="relative flex gap-2">
                                <div class="flex items-center gap-1.5">
                                    <AnimateNumber :value="2409" class="font-extralight! text-gray-500!" />
                                    <span class="text-lg text-gray-300">/</span>
                                    <span>{{ formatNumber(2409) }}</span>
                                </div>
                            </div>
                            <IconLineUp class="size-4! text-green-500! animate-pulse" filled />
                        </div>
                        <div class="flex gap-2 items-center text-[10px] text-gray-500 px-2 py-1.5 leading-[100%] bg-green-600/10 rounded-md grow">
                            <span class="font-bold px-1.5 py-1 bg-green-500 rounded-sm text-white">PRJ</span
                  ><span>ABR908-206485HWLF</span>
                        </div>
                    </div>
                </div>
    
                <div class="flex flex-col gap-1.5 p-2 bg-primary/65 rounded-xl">
                    <div class="bg-green-600/8 px-2 py-1.5 rounded-lg flex items-center justify-between">
                        <p class="font-bold text-green-700 text-sm">Overall Summary</p>
                        <span class="text-sm text-green-600">%</span>
                    </div>
                    <ul class="px-3 flex flex-col gap-1">
                        <li class="flex items-center justify-between text-sm">
                            <span class="font-bold text-gray-700">UPH.%</span>
                            <span class="text-gray-500 text-[13px]">12.09 %</span>
                        </li>
                        <li class="flex items-center justify-between text-sm">
                            <span class="font-bold text-gray-700">OR.%</span>
                            <span class="text-gray-500 text-[13px]">50.68 %</span>
                        </li>
                        <li class="flex items-center justify-between text-sm">
                            <span class="font-bold text-gray-700">Update time</span>
                            <span class="text-gray-500 text-[13px]">08:30 AM</span>
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="relative flex flex-col gap-2.5 px-4 pt-6 pb-4 w-full bg-white rounded-3xl border border-black/8">
                <div class="flex items-center gap-1.5 absolute top-1.5 right-1.5 bg-linear-to-r from-transparent to-green-600/15 text-green-500 px-4 rounded-tr-2xl mb-1! text-sm py-1">
                    <div>
                        <IconLineRunning class="size-5! animate-spin" filled />
                    </div>
                    <span class="font-semibold">Running</span>
                </div>
    
                <div class="flex gap-4 items-center mt-1.5">
                    <div class="size-28 bg-primary flex items-center justify-center rounded-full border border-green-500/20">
                        <CircleProgressBar :percent="75" :size="95" color="text-green-500" font-size="18px" />
                    </div>
                    <div class="flex flex-col gap-2.5">
                        <p class="text-black/30 text-sm">
                            <span class="text-green-700 font-bold">PROD. </span>LINE 01
                        </p>
                        <div class="flex items-center gap-2 justify-between px-1 font-bold text-2xl leading-[120%] text-gray-800">
                            <div class="relative flex gap-2">
                                <div class="flex items-center gap-1.5">
                                    <AnimateNumber :value="2409" class="font-extralight! text-gray-500!" />
                                    <span class="text-lg text-gray-300">/</span>
                                    <span>{{ formatNumber(2409) }}</span>
                                </div>
                            </div>
                            <IconLineUp class="size-4! text-green-500! animate-pulse" filled />
                        </div>
                        <div class="flex gap-2 items-center text-[10px] text-gray-500 px-2 py-1.5 leading-[100%] bg-green-600/10 rounded-md grow">
                            <span class="font-bold px-1.5 py-1 bg-green-500 rounded-sm text-white">PRJ</span
                  ><span>ABR908-206485HWLF</span>
                        </div>
                    </div>
                </div>
    
                <div class="flex flex-col gap-1.5 p-2 bg-primary/65 rounded-xl">
                    <div class="bg-green-600/8 px-2 py-1.5 rounded-lg flex items-center justify-between">
                        <p class="font-bold text-green-700 text-sm">Overall Summary</p>
                        <span class="text-sm text-green-600">%</span>
                    </div>
                    <ul class="px-3 flex flex-col gap-1">
                        <li class="flex items-center justify-between text-sm">
                            <span class="font-bold text-gray-700">UPH.%</span>
                            <span class="text-gray-500 text-[13px]">12.09 %</span>
                        </li>
                        <li class="flex items-center justify-between text-sm">
                            <span class="font-bold text-gray-700">OR.%</span>
                            <span class="text-gray-500 text-[13px]">50.68 %</span>
                        </li>
                        <li class="flex items-center justify-between text-sm">
                            <span class="font-bold text-gray-700">Update time</span>
                            <span class="text-gray-500 text-[13px]">08:30 AM</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="relative flex flex-col gap-2.5 px-4 pt-6 pb-4 w-full bg-white rounded-3xl border border-black/8">
                <div class="flex items-center gap-1.5 absolute top-1.5 right-1.5 bg-linear-to-r from-transparent to-green-600/15 text-green-500 px-4 rounded-tr-2xl mb-1! text-sm py-1">
                    <div>
                        <IconLineRunning class="size-5! animate-spin" filled />
                    </div>
                    <span class="font-semibold">Running</span>
                </div>
    
                <div class="flex gap-4 items-center mt-1.5">
                    <div class="size-28 bg-primary flex items-center justify-center rounded-full border border-green-500/20">
                        <CircleProgressBar :percent="75" :size="95" color="text-green-500" font-size="18px" />
                    </div>
                    <div class="flex flex-col gap-2.5">
                        <p class="text-black/30 text-sm">
                            <span class="text-green-700 font-bold">PROD. </span>LINE 01
                        </p>
                        <div class="flex items-center gap-2 justify-between px-1 font-bold text-2xl leading-[120%] text-gray-800">
                            <div class="relative flex gap-2">
                                <div class="flex items-center gap-1.5">
                                    <AnimateNumber :value="2409" class="font-extralight! text-gray-500!" />
                                    <span class="text-lg text-gray-300">/</span>
                                    <span>{{ formatNumber(2409) }}</span>
                                </div>
                            </div>
                            <IconLineUp class="size-4! text-green-500! animate-pulse" filled />
                        </div>
                        <div class="flex gap-2 items-center text-[10px] text-gray-500 px-2 py-1.5 leading-[100%] bg-green-600/10 rounded-md grow">
                            <span class="font-bold px-1.5 py-1 bg-green-500 rounded-sm text-white">PRJ</span
                  ><span>ABR908-206485HWLF</span>
                        </div>
                    </div>
                </div>
    
                <div class="flex flex-col gap-1.5 p-2 bg-primary/65 rounded-xl">
                    <div class="bg-green-600/8 px-2 py-1.5 rounded-lg flex items-center justify-between">
                        <p class="font-bold text-green-700 text-sm">Overall Summary</p>
                        <span class="text-sm text-green-600">%</span>
                    </div>
                    <ul class="px-3 flex flex-col gap-1">
                        <li class="flex items-center justify-between text-sm">
                            <span class="font-bold text-gray-700">UPH.%</span>
                            <span class="text-gray-500 text-[13px]">12.09 %</span>
                        </li>
                        <li class="flex items-center justify-between text-sm">
                            <span class="font-bold text-gray-700">OR.%</span>
                            <span class="text-gray-500 text-[13px]">50.68 %</span>
                        </li>
                        <li class="flex items-center justify-between text-sm">
                            <span class="font-bold text-gray-700">Update time</span>
                            <span class="text-gray-500 text-[13px]">08:30 AM</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="relative flex flex-col gap-2.5 px-4 pt-6 pb-4 w-full bg-white rounded-3xl border border-black/8">
                <div class="flex items-center gap-1.5 absolute top-1.5 right-1.5 bg-linear-to-r from-transparent to-green-600/15 text-green-500 px-4 rounded-tr-2xl mb-1! text-sm py-1">
                    <div>
                        <IconLineRunning class="size-5! animate-spin" filled />
                    </div>
                    <span class="font-semibold">Running</span>
                </div>
    
                <div class="flex gap-4 items-center mt-1.5">
                    <div class="size-28 bg-primary flex items-center justify-center rounded-full border border-green-500/20">
                        <CircleProgressBar :percent="75" :size="95" color="text-green-500" font-size="18px" />
                    </div>
                    <div class="flex flex-col gap-2.5">
                        <p class="text-black/30 text-sm">
                            <span class="text-green-700 font-bold">PROD. </span>LINE 01
                        </p>
                        <div class="flex items-center gap-2 justify-between px-1 font-bold text-2xl leading-[120%] text-gray-800">
                            <div class="relative flex gap-2">
                                <div class="flex items-center gap-1.5">
                                    <AnimateNumber :value="2409" class="font-extralight! text-gray-500!" />
                                    <span class="text-lg text-gray-300">/</span>
                                    <span>{{ formatNumber(2409) }}</span>
                                </div>
                            </div>
                            <IconLineUp class="size-4! text-green-500! animate-pulse" filled />
                        </div>
                        <div class="flex gap-2 items-center text-[10px] text-gray-500 px-2 py-1.5 leading-[100%] bg-green-600/10 rounded-md grow">
                            <span class="font-bold px-1.5 py-1 bg-green-500 rounded-sm text-white">PRJ</span
                  ><span>ABR908-206485HWLF</span>
                        </div>
                    </div>
                </div>
    
                <div class="flex flex-col gap-1.5 p-2 bg-primary/65 rounded-xl">
                    <div class="bg-green-600/8 px-2 py-1.5 rounded-lg flex items-center justify-between">
                        <p class="font-bold text-green-700 text-sm">Overall Summary</p>
                        <span class="text-sm text-green-600">%</span>
                    </div>
                    <ul class="px-3 flex flex-col gap-1">
                        <li class="flex items-center justify-between text-sm">
                            <span class="font-bold text-gray-700">UPH.%</span>
                            <span class="text-gray-500 text-[13px]">12.09 %</span>
                        </li>
                        <li class="flex items-center justify-between text-sm">
                            <span class="font-bold text-gray-700">OR.%</span>
                            <span class="text-gray-500 text-[13px]">50.68 %</span>
                        </li>
                        <li class="flex items-center justify-between text-sm">
                            <span class="font-bold text-gray-700">Update time</span>
                            <span class="text-gray-500 text-[13px]">08:30 AM</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
