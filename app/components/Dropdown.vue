<script setup lang="ts">
import IconFilter from '~~/public/icons/filter-pipe.svg';
const open = ref(false);
const dropdownRef = useTemplateRef('dropdown');

const handleToggle = () => {
  open.value = !open.value;
};

useClickOutSide(dropdownRef, () => {
  open.value = false;
});
</script>

<template>
  <div class="relative" ref="dropdown">
    <div
      class="group/dropdown flex w-fit cursor-pointer items-center gap-1.5 rounded-lg bg-blue-400 px-3.5 py-1.5 transition-colors duration-300 ease-linear hover:bg-blue-500"
      @click.stop="handleToggle"
    >
      <IconFilter class="size-5! text-white" filled />
      <span class="text-xs leading-[100%] text-white">Filter by</span>
    </div>

    <!-- Floating content -->
    <Transition name="dropdown" mode="out-in">
      <div
        v-if="open"
        class="absolute top-full right-0 z-10 mt-1.5 w-44 rounded-md border border-blue-100 bg-white p-1.5 drop-shadow-xs"
      >
        <section>
          <p class="text-xs text-gray-500">Settings</p>
          <div class="my-1 h-px w-full bg-gray-200/70" />
          <div class="flex flex-col gap-2.5 px-px py-1">
            <div class="flex items-center justify-between">
              <span class="text-sm">Id</span>
              <CheckBox />
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm">Name</span>
              <CheckBox />
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm">Email</span>
              <CheckBox />
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm">First name</span>
              <CheckBox />
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm">Last name</span>
              <CheckBox />
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm">Created at</span>
              <CheckBox />
            </div>
          </div>
        </section>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  transform-origin: top;
  transform: translateY(-5px);
  opacity: 0;
}
</style>
