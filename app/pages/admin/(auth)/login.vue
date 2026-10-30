<script setup lang="ts">
import IconLogo from '~~/public/icons/logo.svg';
import IconEmail from '~~/public/icons/email.svg';
import IconKey from '~~/public/icons/key.svg';
import IconOff from '~~/public/icons/eye-off.svg';
import IconOpen from '~~/public/icons/eye-open.svg';
import IconSignIn from '~~/public/icons/sign-in.svg';
import IconContact from '~~/public/icons/contact.svg';

import IconLoginLogo from '~~/public/icons/login-logo.svg';
definePageMeta({
  layout: 'auth',
});

const eyeCheck = ref(false);

const hanldeTogglePassword = () => {
  eyeCheck.value = !eyeCheck.value;
};
</script>

<template>
  <div class="flex h-screen w-screen items-center justify-center bg-white">
    <div class="relative w-full max-w-sm">
      <div class="flex flex-col items-center justify-center gap-1">
        <div class="mb-2 rounded-2xl bg-blue-50/80 px-4 py-1.5">
          <IconLoginLogo class="size-16! text-blue-400" filled />
        </div>
        <h2 class="text-center text-2xl font-bold text-blue-500">
          Prod. Smart Dashboard <span class="font-normal! text-blue-400">1.0</span>
        </h2>
        <p class="text-gray-400">Provide your credential to login</p>
      </div>

      <div class="mt-4 h-px w-full bg-gray-200/80" />

      <div class="mt-4 flex flex-col gap-8 py-2.5">
        <div class="flex flex-col gap-2.5">
          <!-- Email input -->
          <div
            class="relative flex items-center gap-2.5 rounded-md border border-blue-100 py-1 pr-1.5 pl-2 focus-within:outline-2 focus-within:outline-blue-400"
          >
            <div class="rounded-md bg-blue-400 p-1.5">
              <IconEmail class="size-4! text-white" filled />
            </div>
            <input
              type="type"
              placeholder="Ex. someone@gmail.com"
              autofocus
              autocorrect="true"
              autocomplete="true"
              autosave="true"
              class="w-full px-1.5 py-2 text-sm text-gray-600 outline-0 placeholder:text-sm placeholder:text-gray-400"
            />
          </div>

          <div
            class="relative flex items-center gap-2.5 rounded-md border border-blue-100 py-1 pr-1.5 pl-2 focus-within:outline-2 focus-within:outline-blue-400"
          >
            <div class="rounded-md bg-blue-400 p-1.5">
              <IconKey class="size-4! text-white" filled />
            </div>

            <input
              :type="eyeCheck ? 'text' : 'password'"
              placeholder="Ex. 123456"
              class="w-full px-1.5 py-2 text-sm text-gray-600 outline-0 placeholder:text-sm placeholder:text-gray-400"
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

        <!-- Submit button -->
        <button
          class="w-full cursor-pointer rounded-lg bg-blue-400 py-2.5 font-medium text-gray-100 transition-colors duration-300 ease-linear hover:bg-blue-500"
        >
          Authenticate
        </button>
      </div>
    </div>
  </div>
</template>
