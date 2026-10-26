<script setup lang="ts">
import IconClock24 from '~~/public/icons/clock24.svg'

const clock = reactive({ hours: '00', minutes: '00', seconds: '00' })
const intervalRef = shallowRef<number>(null!)

function recuringClock() {
  const date = new Date()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')

  clock.hours = hours
  clock.minutes = minutes
  clock.seconds = seconds
}

onMounted(() => {
  recuringClock()
  intervalRef.value = window.setInterval(recuringClock, 1000)
})

onBeforeUnmount(() => {
  window.clearInterval(intervalRef.value)
})
</script>

<template>
  <div
    class="flex w-33 items-center justify-center gap-1 rounded-lg bg-linear-90 from-blue-500/2 to-blue-400/40 py-1.5 select-none"
  >
    <IconClock24 class="mr-1 size-5! stroke-1 text-blue-500" filled />

    <AnimateNumber
      :value="Number.parseInt(clock.hours)"
      :trend="+1"
      class="w-5 text-center text-sm leading-[100%] font-semibold! text-gray-700!"
      :enable-watch="true"
    />

    <p class="text-sm leading-[100%] text-gray-400">&#58;</p>

    <AnimateNumber
      :value="Number.parseInt(clock.minutes)"
      :trend="+1"
      class="w-5 text-center text-sm leading-[100%] font-semibold! text-gray-700!"
      :enable-watch="true"
    />

    <span class="flex text-sm leading-[100%] text-gray-400">&#58;</span>

    <AnimateNumber
      :value="Number.parseInt(clock.seconds)"
      :trend="+1"
      class="w-5 text-center text-sm leading-[100%] font-semibold! text-gray-700!"
      :enable-watch="true"
    />
  </div>
</template>
