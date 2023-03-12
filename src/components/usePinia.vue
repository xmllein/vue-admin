<template>
  <div>
    <p>userStore.name: {{ userStore.name }}</p>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user';

const userStore = useUserStore();

// 修改 state
userStore.name = 'xxx';
</script>

<style scoped></style>
