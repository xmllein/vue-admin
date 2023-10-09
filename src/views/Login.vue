<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
import { Lock, Key } from '@element-plus/icons-vue'
import api from '@/api'
const router = useRouter()
const store = useUserStore()

const userInfo = reactive({
  userName: 'admin',
  userPwd: 'admin123456',
})

const onLogin = ref(false)

const loginForm = ref()

const rules = {
  userName: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    // { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
  ],
  userPwd: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    // { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
  ],
}

const login = async () => {
  onLogin.value = true
  // 验证表单
  loginForm.value.validate(async (valid: boolean) => {
    if (!valid) {
      onLogin.value = false
      return
    }
    // 请求接口
    try {
      const res = await api.login(userInfo)
      if (res) {
        console.log(res)
        onLogin.value = false
        // pinia 保存用户信息
        store.setUserInfo(res)
        // 菜单和按钮 权限信息(根据用户)
        const permissionList = await api.getPermissionList()
        // pinia 保存菜单和按钮 权限信息
        store.setPermissionList(permissionList)
        // 跳转到首页
        router.push('/system/users')
      }
    } catch (error) {
      console.log(error)
      onLogin.value = false
    }
  })
}
</script>

<template>
  <div class="login_wrapper">
    <div class="login_container">
      <h2 class="login_title">后台管理系统</h2>
      <el-form
        ref="loginForm"
        label-width="4em"
        :model="userInfo"
        :rules="rules"
        status-icon
      >
        <el-form-item label="账号" prop="userName">
          <el-input
            type="text"
            autocomplete="off"
            :prefix-icon="Lock"
            v-model="userInfo.userName"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="userPwd">
          <el-input
            type="password"
            autocomplete="off"
            :prefix-icon="Key"
            show-password
            v-model="userInfo.userPwd"
          ></el-input>
        </el-form-item>
        <el-form-item class="login_button_container">
          <el-button type="primary" :loading="onLogin" @click="login"
            >登录</el-button
          >
          <el-button link>忘记密码</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login_wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login_container {
    border-radius: 4px;
    padding: 50px;
    width: 350px;
    background: #fff;
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);
    .login_title {
      margin: 0 0 30px;
      line-height: 1.5;
      font-size: 30px;
      text-align: center;
      color: #000;
    }
  }
}
</style>
