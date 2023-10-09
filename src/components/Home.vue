<script setup lang="ts">
import { ref, onMounted, computed, inject } from 'vue'
import { RouterView, useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/store/user'
import TreeMenu from './TreeMenu.vue'
import api from '@/api'
import BreadCrumb from './BreadCrumb.vue'

const router = useRouter()
const route = useRoute()
const { userInfo: userData, setUserInfo, menuPermissionList } = useUserStore()

// 菜单列表
const menuList = computed(() => menuPermissionList)
// 菜单折叠
const menuCollapsed = ref(false)
// 当前激活菜单
const activeIndex = computed(() => route.path)
// 获取用户信息
const userInfo = computed(() => userData)
// 待审批通知数量
const noticeCount = ref(0)

onMounted(() => {
  // 请求获取通知待审批数量
  getNoticeCount()
})

/**
 * 获取通知待审批数量
 */
const getNoticeCount = async () => {
  try {
    const res = await api.leaveCount()
    noticeCount.value = res
  } catch (error) {
    console.log(error)
  }
}

// 切换菜单折叠
const handleMenuFoldClick = () => {
  menuCollapsed.value = !menuCollapsed.value
}

// 下拉菜单点击事件
const handleUserCommand = (command: string | number | object) => {
  if (command === 'logout') {
    // 清空用户信息
    setUserInfo({})
    // 跳转到登录
    router.push('/login')
  }
}
</script>

<template>
  <div class="layout">
    <el-container>
      <!-- 左侧栏 -->
      <el-aside
        class="layout-left"
        :width="''"
        :class="{ collapsed: menuCollapsed }"
      >
        <div class="logo">
          <img src="../assets/logo.png" alt="logo" class="logo_img" />
          <h2 class="logo_title">管理系统</h2>
        </div>
        <!-- 菜单 -->
        <el-menu
          background-color="#001529"
          text-color="#fff"
          active-text-color="#ffd04b"
          unique-opened
          :default-active="activeIndex"
          :collapse="menuCollapsed"
          router
        >
          <TreeMenu :menuList="menuList" />
        </el-menu>
      </el-aside>

      <!-- 右边内容 -->
      <el-container class="layout-right">
        <!-- 头部 -->
        <el-header>
          <div class="header_container">
            <div class="header-left">
              <!-- 侧边栏伸缩按钮 -->
              <el-button link class="menu_btn" @click="handleMenuFoldClick">
                <el-icon v-if="!menuCollapsed"><Fold /></el-icon>
                <el-icon v-else><Expand /></el-icon>
              </el-button>
              <!-- 面包屑导航 -->
              <BreadCrumb />
            </div>
            <div class="header-right">
              <!-- 通知 -->
              <div class="notice">
                <el-badge :value="noticeCount" class="item" type="danger">
                  <el-icon>
                    <Bell />
                  </el-icon>
                </el-badge>
              </div>
              <!-- 用户功能区 -->
              <el-dropdown class="user" @command="handleUserCommand">
                <el-avatar class="user_avatar">
                  {{ userInfo.userName }}
                </el-avatar>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item command="loginUserDetail"
                      >个人中心</el-dropdown-item
                    >
                    <el-dropdown-item command="logout"
                      >退出登录</el-dropdown-item
                    >
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
        </el-header>
        <el-main class="main">
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
kf
<style lang="scss" scoped>
.layout {
  &-left {
    width: 200px;
    height: 100vh;
    overflow: hidden auto !important;
    color: #fff;
    background: #001529;
    transition: width 0.5s;
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 56px;
      &_img {
        width: 32px;
        height: 32px;
        border-radius: 30px;
      }
      &_title {
        margin: 0 10px;
        font-size: 20px;
      }
    }
    .el-menu {
      border-color: #001529;
    }
    // 侧边栏折叠时
    &.collapsed {
      width: 65px;
      .logo_title {
        display: none;
      }
    }
  }
  &-right {
    height: 100vh;
    .main {
      background: #eee;
    }
    .header_container {
      height: 100%;
      display: flex;
      justify-content: space-between;
      .header-left {
        display: flex;
        align-items: center;
        .menu_btn {
          padding-right: 20px;
          font-size: 20px;
          color: #333;
        }
      }
      .header-right {
        display: flex;
        align-items: center;
        .notice {
          padding: 12px 20px;
          cursor: pointer;
          :hover {
            font-weight: bold;
          }
        }
        .user {
          &_avatar {
            cursor: pointer;
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
