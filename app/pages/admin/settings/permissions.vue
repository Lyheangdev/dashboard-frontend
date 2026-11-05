<script setup lang="ts">
import { EPermission } from '~/shared/utils/authorities';

definePageMeta({
  layout: 'admin',
  middleware: [
    function () {
      const auth = useAuthStore();
      if (!auth.user?.permissions?.includes(EPermission.PERMISSION_READ)) {
        return showError({
          statusCode: 403,
          statusMessage: 'Access Denied',
          message: 'Sorry, you do not have permission to access this page.',
        });
      }
    },
  ],
});
</script>

<template>
  <PageWrapper page-label="Manage Permission">
    <PermissionPageTable />
  </PageWrapper>
</template>
