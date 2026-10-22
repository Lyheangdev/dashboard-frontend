<script setup lang="ts">
import IconLogo from "~~/public/icons/logo.svg";
import IconEmail from "~~/public/icons/email.svg";
import IconKey from "~~/public/icons/key.svg";
import IconOff from "~~/public/icons/eye-off.svg";
import IconOpen from "~~/public/icons/eye-open.svg";
import IconSignIn from "~~/public/icons/sign-in.svg";
import IconContact from "~~/public/icons/contact.svg";
definePageMeta({
    layout: 'auth'
})

const eyeCheck = ref(false)

const hanldeTogglePassword = () => {
    eyeCheck.value = !eyeCheck.value
}
</script>

<template>
    <div class="bg-primary w-screen h-screen flex items-center justify-center">
        <div class=" relative grid grid-cols-2 drop-shadow-2xl outline-4 outline-blue-400 outline-offset-8 bg-white max-w-7xl rounded-4xl overflow-hidden">
            <div class="relative max-w-md p-12">
                <NuxtImg src="/images/production_login.png" class="aspect-[1.1/1] object-cover" :quality="70" alt="Production" />
            </div>
            <div class="relative bg-linear-to-r from-transparent to-blue-400 p-6 flex items-center justify-center">
                <div class="relative bg-white w-full backdrop-blur-md px-2 pt-8 pb-4 rounded-3xl drop-shadow-2xl">
                    <div role="button" class="cursor-pointer absolute bottom-2 right-3">
                        <IconContact class="size-6! text-blue-400" filled/>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <IconLogo class="size-10!" filled />
                        <h2 class="text-gray-700 text-[22px] font-bold text-center">System Authentication</h2>
                        <p class="text-xs text-gray-400">Leverage digital into production</p>
                    </div>
                    <div class="w-5/6 mx-auto h-px bg-linear-to-r from-transparent via-blue-400/30 to-transparent mt-4" />
                    <div class="mt-2 flex flex-col gap-5 p-2.5">
                        <div class="flex flex-col gap-2.5">
                            <div class="relative pr-1.5 py-1.5 pl-2.5 focus-within:outline-3 focus-within:outline-blue-400 bg-blue-400/15 flex items-center gap-2.5 rounded-xl border border-gray-100">
                                <IconEmail class="size-5! text-blue-400" filled />
                                <input type="type" placeholder="Enter email address ..." class="placeholder:text-gray-400 text-gray-600 bg-white w-full px-3 py-2 text-sm outline-0 rounded-md placeholder:text-sm" />
                            </div>
    
                            <div class="relative pr-1.5 py-1.5 pl-2.5 focus-within:outline-3 focus-within:outline-blue-400 bg-blue-400/15 flex items-center gap-2.5 rounded-xl border border-gray-100">
                                <IconKey class="size-5! text-blue-400" filled />
                                <input :type="eyeCheck ? 'text' : 'password'" placeholder="Enter password ..." class="placeholder:text-gray-400 text-gray-600 bg-white w-full px-3 py-2 text-sm outline-0 rounded-md placeholder:text-sm" />
                                <button @click.stop="hanldeTogglePassword" class="absolute top-1/2 -translate-y-1/2 right-4">
                                    <IconOff v-if="!eyeCheck" class="size-5! mt-1 text-gray-400" filled/>
                                    <IconOpen v-else class="size-5! mt-1 text-gray-400" filled/>
                                </button>
                            </div>
                        </div>
                        <button class="bg-linear-to-r from-blue-400 via-blue-500 to-blue-400 drop-shadow-lg px-10 mx-auto cursor-pointer py-2 rounded-lg flex items-center gap-2.5 w-fit"><IconSignIn class="size-5! text-white" filled /> <span class="text-white text-sm font-medium uppercase">Sign In</span></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>