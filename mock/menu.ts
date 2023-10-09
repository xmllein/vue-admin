import type { MockConfig } from 'vite-plugin-mock'
import Mock from 'mockjs'

export default (config?: MockConfig) => {
  return [
    {
      url: '/api/menu/permissionList',
      method: 'get',
      response: ({ body, query }: any) => {
        console.log('body>>>>>>>>', body)
        console.log('query>>>>>>>>', query)

        return {
          code: 0,
          message: 'ok',
          data: {
            menuList: [
              {
                _id: '64a3bc169b67a932c18c414d',
                menuType: 1,
                menuState: 1,
                menuName: '系统管理',
                menuCode: '',
                icon: 'el-icon-menu',
                path: '/system',
                component: '',
                parentId: [],
                createTime: '2023-07-04T06:25:48.205Z',
                updateTime: '2023-07-06T01:52:42.085Z',
                __v: 0,
                children: [
                  {
                    _id: '64a3bf5e2226458dd8ec1c10',
                    menuType: 1,
                    menuState: 1,
                    menuName: '用户管理',
                    menuCode: '',
                    icon: 'users',
                    path: '/system/users',
                    component: '../views/user/User.vue',
                    parentId: ['64a3bc169b67a932c18c414d'],
                    createTime: '2023-07-04T06:37:08.690Z',
                    updateTime: '2023-07-06T01:42:37.405Z',
                    __v: 0,
                  },
                  {
                    _id: '64a3c0692226458dd8ec1c1e',
                    menuType: 1,
                    menuState: 1,
                    menuName: '菜单管理',
                    menuCode: '',
                    icon: 'menu',
                    path: '/system/menu',
                    component: '../views/menu/Menu.vue',
                    parentId: ['64a3bc169b67a932c18c414d'],
                    createTime: '2023-07-04T06:37:08.690Z',
                    updateTime: '2023-07-06T01:53:55.943Z',
                    __v: 0,
                  },
                  {
                    _id: '64a499e56b54998a9e0ba25c',
                    menuType: 1,
                    menuState: 1,
                    menuName: '角色管理',
                    menuCode: '',
                    icon: '',
                    path: '/system/role',
                    component: '../views/role/Role.vue',
                    parentId: ['64a3bc169b67a932c18c414d'],
                    createTime: '2023-07-04T07:04:40.012Z',
                    updateTime: '2023-07-06T01:53:39.761Z',
                    __v: 0,
                  },
                  {
                    _id: '64a50f65dda4912fed07ca52',
                    menuType: 1,
                    menuState: 1,
                    menuName: '部门管理',
                    menuCode: '',
                    icon: '',
                    path: '/system/dept',
                    component: '../views/department/Department.vue',
                    parentId: ['64a3bc169b67a932c18c414d'],
                    createTime: '2023-07-05T03:59:27.314Z',
                    updateTime: '2023-07-06T01:45:52.671Z',
                    __v: 0,
                  },
                ],
              },
              {
                _id: '64a65254a8da378d329c23ae',
                menuType: 1,
                menuState: 1,
                menuName: '审批管理',
                menuCode: '',
                icon: 'el-icon-menu',
                path: '/apply',
                component: '',
                parentId: [],
                createTime: '2023-07-06T05:33:38.058Z',
                updateTime: '2023-07-06T05:33:38.058Z',
                __v: 0,
                children: [
                  {
                    _id: '64a652aea8da378d329c23b7',
                    menuType: 1,
                    menuState: 1,
                    menuName: '休假申请',
                    menuCode: '',
                    icon: '',
                    path: '/apply/leave',
                    component: '../views/apply/Leave.vue',
                    parentId: ['64a65254a8da378d329c23ae'],
                    createTime: '2023-07-06T05:33:38.058Z',
                    updateTime: '2023-07-06T05:33:38.058Z',
                    __v: 0,
                  },
                  {
                    _id: '64a652e9a8da378d329c23bb',
                    menuType: 1,
                    menuState: 1,
                    menuName: '待我审批',
                    menuCode: '',
                    icon: '',
                    path: '/apply/audit',
                    component: '../views/apply/Audit.vue',
                    parentId: ['64a65254a8da378d329c23ae'],
                    createTime: '2023-07-06T05:33:38.058Z',
                    updateTime: '2023-07-06T05:33:38.058Z',
                    __v: 0,
                  },
                ],
              },
            ],
            btnList: [
              'menu_add',
              'user_add',
              'user_batch_delete',
              'user_edit',
              'user_delete',
              'leave-view',
              'leave-delete',
              'leave-add',
            ],
          },
        }
      },
    },
    {
      url: '/api/leave/count',
      method: 'get',
      response: ({ body, query }: any) => {
        console.log('body>>>>>>>>', body)
        console.log('query>>>>>>>>', query)

        return {
          code: 0,
          message: 'ok',
          data: 10,
        }
      },
    },
  ]
}
