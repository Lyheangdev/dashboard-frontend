<script setup lang="ts">
import IconEmail from '~~/public/icons/email.svg';
import IconKey from '~~/public/icons/key.svg';
import IconOff from '~~/public/icons/eye-off.svg';
import IconOpen from '~~/public/icons/eye-open.svg';
import IconLoginLogo from '~~/public/icons/login-logo.svg';
import IconLoader from '~~/public/icons/loader.svg';
import IconWarningTriangle from '~~/public/icons/form/warning-triangle.svg';
import IconShield from '~~/public/icons/form/shield.svg';

import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';

definePageMeta({
  layout: 'auth',
});

const formState = reactive({ loading: false, error: false, msg: '' });
const eyeCheck = ref(false);

// Login logic
const loginValidationSchema = toTypedSchema(
  z.object({
    email: z
      .string()
      .min(1, { error: 'Please input your email address!' })
      .pipe(z.email({ error: 'Invalid email address!' })),
    password: z
      .string()
      .nonempty({ error: 'Please input your password!' })
      .min(8, { error: 'Minimum password 8 characters length!' }),
  }),
);

const { handleSubmit, errors } = useForm({
  validationSchema: loginValidationSchema,
  initialValues: {
    email: '',
    password: '',
  },
});

const { value: email } = useField('email');
const { value: password } = useField('password');

type ISingleResponse<T> = {
  status: string;
  message: string;
  data: T;
};

interface IUser {
  id: number;
  full_name?: string;
  bio?: string;
  profile_url?: string;
  role: string;
  isBanned: boolean;
  status: number;
  code: string;
  permissions: string[];
  created_at: string;
  updated_at: string;
}

const onSubmit = handleSubmit(async (formData) => {
  formState.loading = true;
  formState.error = false;
  formState.msg = '';

  try {
    const response = await $fetch<ISingleResponse<IUser>>(
      'http://localhost:8000/api/v1/auth/login',
      {
        method: 'POST',
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
        credentials: 'include',
      },
    );

    if (response?.status != 'success') {
      formState.error = true;
      formState.msg = response?.message;
    } else {
      console.log(response);
    }
  } catch (err) {
    formState.error = true;
    formState.msg = err instanceof Error ? err?.message : 'Unknow error';
  } finally {
    formState.loading = false;
  }
});

// Toggle eye check
const hanldeTogglePassword = () => {
  eyeCheck.value = !eyeCheck.value;
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="flex h-screen w-screen items-center justify-center bg-white">
      <div class="relative w-full max-w-sm">
        <div class="flex flex-col items-center justify-center gap-1">
          <div class="mb-2 rounded-2xl bg-blue-50/80 px-4 py-2">
            <IconLoginLogo class="size-16! text-blue-400" filled />
          </div>

          <h2 class="text-center text-2xl font-bold text-blue-500">
            Prod. Smart Dashboard <span class="font-normal! text-blue-400">1.0</span>
          </h2>
          <p class="text-gray-400">Provide your credential to login</p>
        </div>

        <div class="mt-4 h-px w-full bg-gray-200/80" />

        <div class="mt-4 flex flex-col gap-8 py-2">
          <Banner :open="formState.error" type="error" :message="formState.msg" />

          <div class="flex flex-col gap-2.5">
            <!-- Email input -->
            <div>
              <div
                class="relative flex items-center gap-2.5 rounded-md border border-blue-100 py-1 pr-1.5 pl-2 focus-within:outline-2 focus-within:outline-blue-400"
                :class="[{ 'border-red-600 focus-within:outline-red-600': Boolean(errors?.email) }]"
              >
                <div class="rounded-md bg-blue-400 p-1.5">
                  <IconEmail class="size-4! text-white" filled />
                </div>
                <input
                  v-model="email"
                  name="email"
                  type="type"
                  placeholder="Ex. someone@gmail.com"
                  autofocus
                  autocorrect="true"
                  autocomplete="true"
                  autosave="true"
                  class="w-full px-1.5 py-2 text-sm text-gray-600 outline-0 placeholder:text-sm placeholder:text-gray-400"
                />
              </div>
              <span v-if="Boolean(errors?.email)" class="text-xs text-red-500">{{
                errors?.email
              }}</span>
            </div>

            <div>
              <div
                class="relative flex items-center gap-2.5 rounded-md border border-blue-100 py-1 pr-1.5 pl-2 focus-within:outline-2 focus-within:outline-blue-400"
                :class="[
                  { 'border-red-600 focus-within:outline-red-600': Boolean(errors?.password) },
                ]"
              >
                <div class="rounded-md bg-blue-400 p-1.5">
                  <IconKey class="size-4! text-white" filled />
                </div>

                <input
                  v-model="password"
                  name="password"
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
              <span v-if="Boolean(errors?.password)" class="text-xs text-red-500">{{
                errors?.password
              }}</span>
            </div>
          </div>

          <!-- Submit button -->
          <button
            type="button"
            class="flex w-full cursor-pointer items-center justify-center rounded-lg bg-blue-400 py-2.5 font-medium text-gray-100 transition-colors duration-300 ease-linear hover:bg-blue-500"
          >
            <div v-if="formState.loading" class="flex items-center gap-1.5">
              <IconLoader class="size-4! animate-spin" filled />
              <span>Waiting ...</span>
            </div>
            <span v-else class="contents">Authenticate</span>
          </button>

          <div class="mt-2 flex flex-col items-center justify-center gap-1.5">
            <span class="text-[13px] text-gray-400/80"
              >©{{ new Date().getFullYear() }} Copyright SVI (AEC) company limited</span
            >
            <span class="text-sm text-blue-400"
              ><span class="font-semibold text-blue-400">version</span> 1.0.0</span
            >
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
