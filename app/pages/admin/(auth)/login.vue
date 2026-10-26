<script setup lang="ts">
import IconLogo from '~~/public/icons/logo.svg'
import IconEmail from '~~/public/icons/email.svg'
import IconKey from '~~/public/icons/key.svg'
import IconOff from '~~/public/icons/eye-off.svg'
import IconOpen from '~~/public/icons/eye-open.svg'
import IconSignIn from '~~/public/icons/sign-in.svg'
import IconContact from '~~/public/icons/contact.svg'
definePageMeta({
  layout: 'auth',
})

const eyeCheck = ref(false)

const hanldeTogglePassword = () => {
  eyeCheck.value = !eyeCheck.value
}
</script>

<template>
  <div class="bg-primary flex h-screen w-screen items-center justify-center">
    <div
      class="relative grid max-w-7xl grid-cols-2 overflow-hidden rounded-4xl bg-white drop-shadow-2xl"
    >
      <div class="relative max-w-md p-12">
        <NuxtImg
          src="/images/production_login.png"
          class="aspect-[1.1/1] object-cover"
          :quality="70"
          alt="Production"
        />
      </div>
      <div
        class="relative flex items-center justify-center bg-linear-to-r from-transparent to-blue-400 p-6"
      >
        <div
          class="relative w-full rounded-3xl border border-gray-200/70 bg-white px-2 pt-8 pb-4 backdrop-blur-md"
        >
          <div role="button" class="absolute right-3 bottom-2 cursor-pointer">
            <IconContact class="size-6! text-blue-400" filled />
          </div>
          <div class="flex flex-col items-center justify-center">
            <IconLogo class="size-16!" filled />
            <h2 class="text-center text-[22px] font-bold text-gray-700">System Authentication</h2>
            <p class="text-xs text-gray-400">Leverage digital into production</p>
          </div>
          <div
            class="mx-auto mt-4 h-px w-5/6 bg-linear-to-r from-transparent via-blue-400/30 to-transparent"
          />
          <div class="mt-2 flex flex-col gap-5 p-2.5">
            <div class="flex flex-col gap-2.5">
              <div
                class="relative flex items-center gap-2.5 rounded-xl border border-gray-100 bg-blue-400/15 py-1.5 pr-1.5 pl-2.5 focus-within:outline-3 focus-within:outline-blue-400"
              >
                <IconEmail class="size-5! text-blue-400" filled />
                <input
                  type="type"
                  placeholder="Enter email address ..."
                  class="w-full rounded-md bg-white px-3 py-2 text-sm text-gray-600 outline-0 placeholder:text-sm placeholder:text-gray-400"
                />
              </div>

              <div
                class="relative flex items-center gap-2.5 rounded-xl border border-gray-100 bg-blue-400/15 py-1.5 pr-1.5 pl-2.5 focus-within:outline-3 focus-within:outline-blue-400"
              >
                <IconKey class="size-5! text-blue-400" filled />
                <input
                  :type="eyeCheck ? 'text' : 'password'"
                  placeholder="Enter password ..."
                  class="w-full rounded-md bg-white px-3 py-2 text-sm text-gray-600 outline-0 placeholder:text-sm placeholder:text-gray-400"
                />
                <button
                  @click.stop="hanldeTogglePassword"
                  class="absolute top-1/2 right-4 -translate-y-1/2"
                >
                  <IconOff v-if="!eyeCheck" class="mt-1 size-5! text-gray-400" filled />
                  <IconOpen v-else class="mt-1 size-5! text-gray-400" filled />
                </button>
              </div>
            </div>
            <button
              class="mx-auto flex w-[70%] cursor-pointer items-center justify-center gap-2.5 rounded-lg bg-linear-to-r from-blue-400 via-blue-500 to-blue-400 px-10 py-2.5"
            >
              <IconSignIn class="size-5! text-white" filled />
              <span class="text-sm font-medium text-white uppercase">Sign In</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
