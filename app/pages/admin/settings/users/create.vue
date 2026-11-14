<script setup lang="ts">
useHead({
  title: 'Create User',
});

definePageMeta({
  layout: 'admin',
});
</script>

<template>
  <PageWrapper page-label="Create User" container-class="pl-0 py-0">
    <div class="grid w-full! grid-cols-12">
      <div class="col-span-9 border-r border-r-gray-200/70 min-[1537px]:col-span-10">
        <div class="border-b border-b-gray-100 px-5 pb-2 pt-3">
          <button class="cursor-pointer text-blue-400">Go Back</button>
        </div>

        <div class="mt-3 grid grid-cols-2 gap-2.5 pt-2 pb-4 pr-4 pl-4">
          <InputFieldSet label="First Name">
            <BaseInput placeholder="Insert first name ..." />
          </InputFieldSet>
          <InputFieldSet label="Last Name">
            <BaseInput placeholder="Insert last name ..." />
          </InputFieldSet>
          <InputFieldSet label="Email">
            <BaseInput placeholder="Insert email ..." />
          </InputFieldSet>
          <InputFieldSet label="Employee Code">
            <BaseInput placeholder="Insert code ..." />
          </InputFieldSet>
          <InputFieldSet label="Password" class="col-span-2">
            <BaseInput placeholder="Insert password ..." />
          </InputFieldSet>
          <InputFieldSet label="Biography" class="col-span-2">
            <BaseTextArea placeholder="Write biography ..." :rows="5" :maxlength="500" />
          </InputFieldSet>
        </div>
      </div>

      <div class="col-span-3 flex flex-col gap-2 pt-3 pr-1 pl-4 min-[1537px]:col-span-2">
        <div>
          <h4 class="text-gray-60 text-sm font-medium">Commit Action</h4>
        </div>

        <div class="flex flex-col items-center gap-2">
          <button class="w-full cursor-pointer rounded-md bg-blue-500 py-2 text-sm text-white">
            Create User
          </button>
          <button
            class="w-full cursor-pointer rounded-md bg-blue-50 py-2 text-sm font-medium text-blue-500"
          >
            Clear Form
          </button>
        </div>
      </div>
    </div>
  </PageWrapper>
</template>
