<template>
  <div class="pagelost">
    <el-empty description="未知路径">
      <h1>404 Not Found</h1>
      <el-button type="primary" @click="handleBackHome">返回首页</el-button>
    </el-empty>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const handleBackHome = () => {
  router.push({ name: 'home' })
}
</script>

<style lang="scss" scoped>
.pagelost {
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-content: center;
}
</style>
