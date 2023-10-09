import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
import api from '@/api'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@/assets/styles/base.scss'

// 创建实例
const app = createApp(App)

// 引入自定义指令控制按钮权限
import vhas from './directives/v-has'
app.directive('has', vhas)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 挂载pinia
app.use(store)
// 路由
app.use(router)
// 挂载api
app.provide('$api', api)

// 挂载应用
app.mount('#app')

// production mock server (生产环境打包 mock 数据, 用于展示，正式生产务必删除！！！)
if (process.env.NODE_ENV === 'production') {
  import('./mockProdServer').then(({ setupProdMockServer }) => {
    setupProdMockServer()
  })
}
