<script setup lang="ts">
import IconSearch from '~~/public/icons/search.svg';

const isCollapse = inject(COLLAPSE_KEY);
const props = defineProps<{ menu: Menu | undefined | null }>();

const { user } = useAuthStore();
const runtimeConfig = useRuntimeConfig();
</script>

<template>
  <Transition name="slideX" mode="out-in">
    <div
      v-if="!isCollapse"
      class="relative flex max-h-screen w-60 max-w-60 flex-col gap-1 bg-white"
    >
      <div class="h-9 px-4 py-2">
        <h2 class="text-lg font-bold uppercase">Smart Dashboard</h2>
      </div>

      <div class="relative mt-1 px-3">
        <IconSearch class="absolute top-1/2 left-5 size-4! -translate-y-1/2 text-gray-500" filled />
        <input
          type="text"
          placeholder="Quick Menu ..."
          class="bg-primary w-full rounded-md border-none py-1.5 pr-4 pl-9 text-sm text-gray-500 outline-0 placeholder:text-[13px] placeholder:text-gray-400"
        />
      </div>
      <div class="bg-primary mx-auto h-px w-5/6" />

      <div class="px-4 py-2">
        <template v-for="sm in menu?.submenu || []" :key="sm.key">
          <div v-if="Boolean(sm?.enableMenu)" class="py-3">
            <Transition :key="sm.key" name="fade" mode="out-in" appear>
              <div>
                <p
                  v-if="sm?.label"
                  class="relative border-l-2 border-l-blue-100 pl-3 text-sm font-semibold text-gray-600"
                  :class="[
                    'after:content-[] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-5 after:origin-left after:translate-x-[-1.3px] after:rotate-[53.13deg] after:rounded-l-xs after:bg-blue-100',
                  ]"
                >
                  {{ sm?.label }}
                </p>

                <div :key="menu?.key" class="mt-3.5 ml-3 flex w-fit flex-col">
                  <div
                    v-for="(sm, i) in sm?.subitems || []"
                    :key="sm?.key"
                    class="group/submenu relative py-1.5 pl-4 before:absolute before:top-0 before:bottom-0 before:left-0 before:w-0.5 before:bg-blue-100 before:content-[''] hover:before:bg-blue-400! hover:before:transition-colors hover:before:duration-500"
                    :class="[
                      { 'font-medium before:bg-blue-500!': sm?.href == $route.path },
                      { 'before:rounded-tr-xs': i === 0 },
                    ]"
                  >
                    <NuxtLink
                      v-if="sm?.label"
                      :to="sm?.href"
                      class="ease cursor-pointer text-sm text-gray-500 transition-colors duration-300 group-hover/submenu:text-blue-500"
                      :class="[{ 'text-blue-500!': sm?.href == $route.path }]"
                    >
                      {{ sm?.label }}
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </template>
      </div>

      <div class="absolute right-0 bottom-0 left-0">
        <div
          class="flex items-center gap-1.5 bg-blue-300/50 bg-linear-to-r from-blue-400 px-2 py-2.5"
        >
          <div class="relative w-fit shrink-0 grow-0 overflow-hidden rounded-full bg-white">
            <NuxtImg
              class="size-9 object-cover"
              quality="80"
              :src="
                user?.profile_url
                  ? `${runtimeConfig.public.assetUrl}${user?.profile_url}`
                  : '/images/my-profile.png'
              "
              alt="my-profile.png"
            />
          </div>
          <div class="flex flex-col">
            <p class="text-[13px] font-medium text-white">
              {{ user?.email ? user.email : 'Anonymous' }}
            </p>
            <div class="flex items-center gap-1.5">
              <div
                class="flex w-fit items-center gap-1.5 rounded-[5px] bg-blue-500/30 px-2 py-0.5 text-white"
              >
                <div class="size-2 rounded-full bg-green-400" />
                <span class="text-[11px]">{{ user?.role ? user.role : 'Unassigned Role' }}</span>
              </div>
              <div class="h-3.5 w-px bg-gray-200/80" />
              <span class="text-[11px] font-medium text-gray-700 capitalize">{{
                user?.status == 1 ? 'Active' : 'Pending'
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.slideX-enter-active,
.slideX-leave-active {
  overflow: hidden;
  transition:
    width 0.2s ease,
    opacity 0.2s ease;
}

.slideX-leave-active {
  transition:
    opacity 0.2s ease,
    width 0.2s ease 0.15s;
}

.slideX-leave-to {
  width: 0;
  opacity: 0;
}

.slideX-enter-active {
  transition:
    width 0.22s ease,
    opacity 0.2s ease 0.15s;
}

.slideX-enter-from {
  width: 0;
  opacity: 0;
}

.slideX-enter-to,
.slideX-leave-from {
  width: 240px;
  opacity: 1;
}

/* fade animaion */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-18px);
}
</style>
