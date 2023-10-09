import { toRaw } from 'vue'
import store from '@/store'
import { useUserStore } from '@/store/user'
import util from '@/utils'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/components/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
    },
    redirect: '/welcome',
    component: Home,
    beforeEnter: (to, from, next) => {
      generateRoutes()
      next()
    },
    children: [
      {
        name: 'Welcome',
        path: '/welcome',
        meta: {
          title: '欢迎页',
        },
        component: () => import('@/views/Welcome.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录页',
    },
    component: () => import('@/views/Login.vue'),
    beforeEnter: (to, from, next) => {
      // 已经登录，不能进入登录页，跳转到首页
      const { userInfo: userData } = useUserStore()
      const userInfo = toRaw(userData)
      if (userInfo && userInfo.token) {
        next({ path: '/' })
      } else {
        next()
      }
    },
  },
  {
    name: '404',
    path: '/404',
    meta: {
      title: '404',
    },
    component: () => import('@/components/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 跳转前路由检查，不存在转到404 页面， 存在更新页面标题
  const existRoutes = router.getRoutes()
  const route = existRoutes.filter(
    (item) => item.name === to.name && item.path === to.path,
  )

  // 存在
  if (route && route.length > 0 && document) {
    document.title = route[0].meta.title as string
  } else {
    // 不存在
    next({ name: '404', replace: true })
    return
  }
  // 获取用户信息
  const { userInfo: userData } = useUserStore()
  const userInfo = toRaw(userData)
  // 验证是否登录
  if ((userInfo && userInfo.token) || to.path === '/login') {
    next()
  } else {
    next({ name: 'login', replace: true })
  }
})

// 生成动态路由
const generateRoutes = () => {
  // 获取用户菜单权限树
  const { menuPermissionList } = useUserStore(store)
  const menuData = toRaw(menuPermissionList)
  // 将菜单权限树转换为平展数组
  const menuArr = util.spreadTree(menuData)
  // 获取已经定义路由
  const existRoutes = router.getRoutes()
  // 或动态组件模块路径
  const vueModules = import.meta.glob('../(components|views)/**/*.vue')
  // 遍历菜单数组，生成动态路由
  menuArr.forEach((item) => {
    // 菜单
    if ((item.patn || item.menuName) && item.menuType === 1) {
      // 判断是否重复
      const repeatRoutes = existRoutes.filter(
        (route) => route.name === item.menuName && route.path === item.path,
      )
      // 没有重复就添加
      if (repeatRoutes.length === 0) {
        let name = (item.component?.match(/\/([^/.]+)$/) ||
          item.path.match(/\/(\w+)$/))[1]

        let componentPath

        if (name) {
          // 组件名大写
          name = name.replace(/^\w/, (match: any) => match.toUpperCase())
          // 组件路径修改
          if (item.component) {
            componentPath = ''
            // 替换路径
            componentPath = item.component.replace(
              /(.*)(views|components)\//,
              '../$2/',
            )
            // 后缀替换
            componentPath = /(\.\w+)$/.test(componentPath)
              ? componentPath
              : `${componentPath}.vue`
          }

          router.addRoute('home', {
            name,
            path: item.path,
            meta: {
              title: item.menuName,
            },
            // ❗❗❗❗❗动态路由中的异步组件加载， vite 需要提前解析模块路径
            component: vueModules[componentPath],
          })
        }
      }
    }
  })
}

// 每次页面刷新都得执行重新生成路由
generateRoutes()

export default router
