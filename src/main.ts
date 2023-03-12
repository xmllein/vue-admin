import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router';
import store from './store'
import './style.css'
import './styles/index.css'
// 创建实例
const app = createApp(App)

// 挂载pinia
app.use(store)

// 路由
app.use(router);

// 挂载应用
app.mount('#app')
