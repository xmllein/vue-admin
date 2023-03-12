<template>
  <div>
    <h2>vite + vue3 + ts + pinia + vueuse , <span>打造企业级前端项目</span></h2>
    <usePinia />
  </div>
</template>

<script setup lang="ts">
import usePinia from '@/components/usePinia.vue';
</script>

<style lang="less" scoped>
h2 {
  color: red;
  span {
    color: blue;
  }
}
</style>
