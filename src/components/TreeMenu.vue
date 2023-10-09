<script setup lang="ts">
import { defineProps, PropType } from 'vue'

interface IMenu {
  menuName: string
  menuType: number
  path: string
  icon: string
  children: IMenu[]
}

defineProps({
  menuList: {
    type: Array as PropType<IMenu[]>,
    default: () => [],
  },
})
</script>

<template>
  <template v-for="menu in menuList" :key="menu.menuName">
    <el-sub-menu
      v-if="
        menu.children &&
        menu.children.length > 0 &&
        menu.children[0].menuType == 1
      "
      :index="menu.path"
    >
      <template #title>
        <el-icon><component :is="menu.icon.split('-')[2]" /></el-icon>
        <span>{{ menu.menuName }}</span>
      </template>
      <tree-menu :menuList="menu.children" />
    </el-sub-menu>
    <el-menu-item v-else-if="menu.menuType == 1" :index="menu.path">
      {{ menu.menuName }}
    </el-menu-item>
  </template>
</template>
