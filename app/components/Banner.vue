<script setup lang="ts">
import IconShieldForBan from '~~/public/icons/form/shield.svg';
import IconCircleForError from '~~/public/icons/form/circle-warning.svg';
import IconTriangleForWarning from '~~/public/icons/form/warning-triangle.svg';
import IconTickForSuccess from '~~/public/icons/form/success.svg';

interface BannerProps {
  open?: boolean;
  type?: 'ban' | 'warning' | 'error' | 'success';
  message: string;
}

const props = withDefaults(defineProps<BannerProps>(), { type: 'success', open: false });

const getIcon = (type: BannerProps['type']) => {
  switch (type) {
    case 'ban':
      return IconShieldForBan;
    case 'error':
      return IconCircleForError;
    case 'warning':
      return IconTriangleForWarning;
    case 'success':
    default:
      return IconTickForSuccess;
  }
};
</script>

<template>
  <Transition name="fade" mode="out-in">
    <div
      v-if="open"
      class="relative flex items-center gap-2.5 rounded-lg bg-amber-50 px-3 py-2.5"
      :class="[
        { 'bg-orange-50': type === 'ban' },
        { 'bg-red-50': type === 'error' },
        { 'bg-amber-50': type === 'warning' },
        { 'bg-green-50': type === 'success' },
      ]"
    >
      <component
        :is="getIcon(type)"
        class="size-5!"
        :class="[
          { 'text-orange-600': type === 'ban' },
          { 'text-red-600': type === 'error' },
          { 'text-amber-600': type === 'warning' },
          { 'text-green-500': type === 'success' },
        ]"
        filled
      />
      <p
        class="text-center text-xs text-amber-600"
        :class="[
          { 'text-orange-600': type === 'ban' },
          { 'text-red-600': type === 'error' },
          { 'text-amber-600': type === 'warning' },
          { 'text-green-600': type === 'success' },
        ]"
      >
        {{ message }}
      </p>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 500ms ease;
}

.fade-enter-from,
.fade.leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
