<script setup lang="ts">
import IconClock24 from "~~/public/icons/clock24.svg";

const clock = reactive({ hours: "00", minutes: "00", seconds: "00" });
const intervalRef = shallowRef < number > (null!);

function recuringClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.hours = hours;
    clock.minutes = minutes;
    clock.seconds = seconds;
}

onMounted(() => {
    recuringClock();
    intervalRef.value = window.setInterval(recuringClock, 1000);
});

onBeforeUnmount(() => {
    window.clearInterval(intervalRef.value);
});
</script>

<template>
    <div class="flex items-center gap-1 w-33 justify-center py-1.5 rounded-lg bg-linear-90 from-blue-500/2 to-blue-400/40 select-none">
        <IconClock24 class="size-5! text-blue-500 stroke-1 mr-1" filled />

        <AnimateNumber :value="Number.parseInt(clock.hours)" :trend="+1" class="text-sm text-gray-700! font-semibold! leading-[100%] w-5 text-center" :enable-watch="true" />
    
        <p class="text-gray-400 text-sm leading-[100%]">&#58;</p>
    
        <AnimateNumber :value="Number.parseInt(clock.minutes)" :trend="+1" class="text-sm text-gray-700! font-semibold! leading-[100%] w-5 text-center" :enable-watch="true"/>
    
        <span class="text-gray-400 flex text-sm leading-[100%]">&#58;</span>
    
        <AnimateNumber :value="Number.parseInt(clock.seconds)" :trend="+1" class="text-sm text-gray-700! font-semibold! leading-[100%] w-5 text-center" :enable-watch="true"/>
    </div>
</template>
