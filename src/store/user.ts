import { ref } from 'vue'
import { defineStore } from 'pinia'
import storage from '@/utils/storage'

export const useUserStore = defineStore('user', () => {
  // 用户信息
  const userInfo = ref(storage.getItem('userInfo') || {})
  // 菜单权限
  const menuPermissionList = ref(storage.getItem('menuPermissionList') || [])
  // 按钮权限
  const buttonPermissionList = ref(
    storage.getItem('buttonPermissionList') || [],
  )

  interface IUserInfo {
    username: string
    password: string
  }

  // 设置用户信息
  const setUserInfo = (info: IUserInfo | {}) => {
    userInfo.value = info

    storage.setItem('userInfo', info)
  }

  // 设置权限
  const setPermissionList = (list: any) => {
    if (list) {
      if (list.menuList) {
        menuPermissionList.value = list.menuList
        storage.setItem('menuPermissionList', list.menuList)
      }
      if (list.btnList) {
        buttonPermissionList.value = list.btnList
        storage.setItem('buttonPermissionList', list.btnList)
      }
    } else {
      console.log('权限动态菜单与按钮信息不能为空！', list)
    }
  }

  return {
    userInfo,
    setUserInfo,
    setPermissionList,
    menuPermissionList,
    buttonPermissionList,
  }
})
