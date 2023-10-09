import type { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/getRoleById',
    method: 'get',
    response: ({ query }) => {
      console.log('id>>>>>>>>', query.id)
      return {
        code: 0,
        message: 'ok',
        data: {
          roleName: 'admin',
          roleValue: 'admin',
        },
      }
    },
  },
  {
    url: '/api/role/alllist',
    method: 'get',
    response: ({ query }) => {
      console.log('id>>>>>>>>', query.id)
      return {
        code: 0,
        message: 'ok',
        data: [
          {
            _id: '64a4b12da504f94997f0eb76',
            roleName: '系统超级管理员',
          },
          {
            _id: '64a4b144a504f94997f0eb79',
            roleName: '产品研发部部长',
          },
          {
            _id: '64a4b155a504f94997f0eb7c',
            roleName: '前端开发课课长',
          },
          {
            _id: '64a4b16da504f94997f0eb7f',
            roleName: '前端开发课职员',
          },
          {
            _id: '64a4b17ba504f94997f0eb82',
            roleName: '公司总经理',
          },
          {
            _id: '64a4b187a504f94997f0eb85',
            roleName: '系统运维科课长',
          },
        ],
      }
    },
  },
] as MockMethod[]
