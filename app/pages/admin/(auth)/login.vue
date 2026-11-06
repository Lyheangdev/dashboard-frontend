<script setup lang="ts">
import IconEmail from '~~/public/icons/email.svg';
import IconKey from '~~/public/icons/key.svg';
import IconOff from '~~/public/icons/eye-off.svg';
import IconOpen from '~~/public/icons/eye-open.svg';
import IconLoginLogo from '~~/public/icons/login-logo.svg';
import IconLoader from '~~/public/icons/loader.svg';
import IconCheck from '~~/public/icons/double-check.svg';

import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import type { IAuthUser } from '~/shared/types/type.user';

definePageMeta({
  layout: 'auth',
});

useHead({
  title: 'Login'
})

const eyeCheck = ref(false);

const formState = reactive<{
  loading: boolean;
  error: boolean;
  msg: string;
  errorType: BannerType;
}>({ loading: false, error: false, msg: '', errorType: 'success' });

const { setUser } = useAuthStore();
const appConfig = useAppConfig();
const runtimeConfig = useRuntimeConfig();

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
  initialValues: { email: '', password: '' },
});

const { value: email } = useField('email');
const { value: password } = useField('password');

const onSubmit = handleSubmit(async (formData) => {
  formState.loading = true;
  formState.error = false;
  formState.msg = '';

  try {
    const response = await $fetch<IApiSingleResponse<IAuthUser>>(
      `${runtimeConfig.public.apiBase}/auth/login`,
      {
        method: 'POST',
        body: { email: formData.email, password: formData.password },
        credentials: 'include',
      },
    );

    setUser({
      id: response?.data?.id,
      email: response?.data?.email,
      bio: response?.data?.bio,
      full_name: response?.data?.full_name,
      code: response?.data?.code,
      profile_url: response?.data?.profile_url,
      isBanned: response?.data?.isBanned,
      status: response?.data?.status,
      role: response?.data?.role,
      permissions: response?.data?.permissions,
      views: response?.data?.views,
      resources: response?.data?.resources,
      created_at: response?.data?.created_at,
    });

    await navigateTo('/admin');
  } catch (err) {
    formState.error = true;
    const { type, msg } = responseErrorExtrator(err);
    if (type === 'error') formState.errorType = 'error';
    else if (type === 'ban') formState.errorType = 'ban';
    formState.msg = msg;
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

          <h2 class="text-center text-[28px] font-bold text-blue-500">
            {{ appConfig.page.login.title }}
            <span class="font-normal! text-blue-400">{{ appConfig.page.login.titleVersion }}</span>
          </h2>
          <p class="text-[15px] text-gray-400">{{ appConfig.page.login.subtitle }}</p>
        </div>

        <div class="mt-4 h-px w-full bg-gray-200/80" />

        <div class="mt-4 flex flex-col gap-8 py-2">
          <Banner :open="formState.error" :type="formState.errorType" :message="formState.msg" />

          <div class="flex flex-col gap-3.5">
            <!-- !Email field -->
            <div>
              <div
                class="relative flex items-center gap-2.5 rounded-md py-1 pr-1.5 pl-2 outline outline-blue-100 focus-within:outline-2 focus-within:outline-blue-400"
                :class="[
                  {
                    'outline-2 outline-red-500 focus-within:outline-red-600': Boolean(
                      errors?.email,
                    ),
                  },
                ]"
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
                <IconCheck
                  v-if="email && !errors?.email"
                  class="absolute top-1/2 right-3 size-5! -translate-y-1/2 text-green-600"
                  filled
                />
              </div>
              <FormFieldErrorMessage :msg="errors?.email" />
            </div>

            <!-- !Password field -->
            <div>
              <div
                class="relative flex items-center gap-2.5 rounded-md py-1 pr-1.5 pl-2 outline outline-blue-100 focus-within:outline-2 focus-within:outline-blue-400"
                :class="[
                  {
                    'outline-2 outline-red-500 focus-within:outline-red-600': Boolean(
                      errors?.password,
                    ),
                  },
                ]"
              >
                <div class="rounded-md bg-blue-400 p-1.5">
                  <IconKey class="size-4.5! text-white" filled />
                </div>

                <input
                  v-model="password"
                  name="password"
                  :type="eyeCheck ? 'text' : 'password'"
                  placeholder="Ex. 123456"
                  class="w-full px-1.5 py-2 text-sm text-gray-600 outline-0 placeholder:text-sm placeholder:text-gray-400"
                />

                <button
                  type="button"
                  @click.stop="hanldeTogglePassword"
                  class="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
                >
                  <IconOff v-if="!eyeCheck" class="mt-1 size-5! text-gray-400" filled />
                  <IconOpen v-else class="mt-1 size-5! text-gray-400" filled />
                </button>
              </div>
              <FormFieldErrorMessage :msg="errors?.password" />
            </div>
          </div>

          <!-- !Submit button -->
          <button
            :disabled="!email || !password || !!errors?.email || !!errors?.password"
            type="submit"
            class="flex w-full cursor-pointer items-center justify-center rounded-lg bg-blue-400 py-2.5 font-medium text-gray-100 transition-colors duration-300 ease-linear select-none hover:bg-blue-500"
            :class="['disabled:cursor-not-allowed! disabled:bg-gray-100/80 disabled:text-gray-300']"
          >
            <div v-if="formState.loading" class="flex items-center gap-1.5">
              <IconLoader class="size-4! animate-spin" filled />
              <span>Waiting ...</span>
            </div>
            <span v-else class="contents">Authenticate</span>
          </button>

          <div class="mt-2 flex flex-col items-center justify-center gap-1.5">
            <span class="text-[13px] text-gray-400/80"
              >©{{ new Date().getFullYear() }} {{ appConfig.copyright }}</span
            >
            <span class="text-sm text-blue-400"
              ><span class="font-semibold text-blue-400">Version</span>
              {{ appConfig.version }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
