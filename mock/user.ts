import type { MockConfig } from 'vite-plugin-mock'
import Mock from 'mockjs'

export default (config?: MockConfig) => {
  return [
    {
      url: '/api/user/operate',
      method: 'post',
      response: ({ body, query }: any) => {
        console.log('body>>>>>>>>', body)
        console.log('query>>>>>>>>', query)

        return {
          code: 0,
          message: 'ok',
          data: {
            ...body,
          },
        }
      },
    },
    {
      url: '/api/user/delete',
      method: 'post',
      response: ({ body, query }: any) => {
        console.log('body>>>>>>>>', body)
        console.log('query>>>>>>>>', query)

        return {
          code: 0,
          message: 'ok',
          data: {
            nModified: body.userIds.length,
            ...body,
          },
        }
      },
    },
    {
      url: '/api/user/list',
      method: 'get',
      timeout: 1000,
      response: ({ body, query }: any) => {
        console.log('body>>>>>>>>', body)
        console.log('query>>>>>>>>', query)
        const { pageNum } = query

        return {
          code: 0,
          message: 'ok',
          data:
            pageNum === '1'
              ? {
                  list: [
                    {
                      _id: '64a52a38df5c644c2ee3a917',
                      userId: 1014,
                      userName: '测试1',
                      userEmail: 'test@manager.com',
                      mobile: '13800013800',
                      deptId: [
                        '64a5246d77cc482ce0232d5c',
                        '64a5269e1b6b8afe22677312',
                        '64a526f51b6b8afe2267732b',
                      ],
                      job: 'test',
                      state: 2,
                      role: 0,
                      roleList: ['64a4b187a504f94997f0eb85'],
                      createTime: '2023-07-05T08:30:48.159Z',
                      lastLoginTime: '2023-07-05T08:30:48.159Z',
                      __v: 0,
                    },
                    {
                      _id: '64a28941948d940cc745af41',
                      userId: 1012,
                      userName: 'guest9',
                      userEmail: 'guest9@manager.com',
                      mobile: '',
                      deptId: ['60d054042ca3f91270b08417'],
                      job: '',
                      state: 2,
                      role: 0,
                      roleList: ['60d058eb2ca3f91270b08426'],
                      createTime: '2023-07-03T08:39:29.348Z',
                      lastLoginTime: '2023-07-03T08:39:29.348Z',
                      __v: 0,
                    },
                    {
                      _id: '64a28923948d940cc745af3b',
                      userId: 1011,
                      userName: 'guest8',
                      userEmail: 'guest8@manager.com',
                      mobile: '',
                      deptId: [
                        '60d054042ca3f91270b08417',
                        '60d056572ca3f91270b0841c',
                        '60d0567c2ca3f91270b0841d',
                      ],
                      job: '',
                      state: 2,
                      role: 0,
                      roleList: ['60d05afc2ca3f91270b08428'],
                      createTime: '2023-07-03T08:38:59.791Z',
                      lastLoginTime: '2023-07-03T08:38:59.791Z',
                      __v: 0,
                    },
                    {
                      _id: '64a288fc948d940cc745af2f',
                      userId: 1009,
                      userName: 'guest6',
                      userEmail: 'guest6@manager.com',
                      mobile: '',
                      deptId: ['60d054042ca3f91270b08417'],
                      job: '',
                      state: 2,
                      role: 0,
                      roleList: ['60d058b72ca3f91270b08424'],
                      createTime: '2023-07-03T08:38:20.859Z',
                      lastLoginTime: '2023-07-03T08:38:20.859Z',
                      __v: 0,
                    },
                    {
                      _id: '64a288ed948d940cc745af29',
                      userId: 1008,
                      userName: 'guest5',
                      userEmail: 'guest5@manager.com',
                      mobile: '',
                      deptId: [
                        '60d054042ca3f91270b08417',
                        '60d05c812ca3f91270b0842b',
                      ],
                      job: '',
                      state: 2,
                      role: 0,
                      roleList: ['60d0544d2ca3f91270b08419'],
                      createTime: '2023-07-03T08:38:05.284Z',
                      lastLoginTime: '2023-07-03T08:38:05.284Z',
                      __v: 0,
                    },
                    {
                      _id: '64a288d4948d940cc745af23',
                      userId: 1007,
                      userName: 'guest4',
                      userEmail: 'guest4@manager.com',
                      mobile: '',
                      deptId: [
                        '60d054042ca3f91270b08417',
                        '60d056572ca3f91270b0841c',
                        '60d0570a2ca3f91270b0841f',
                      ],
                      job: 'guest4',
                      state: 2,
                      role: 0,
                      roleList: ['60d05be52ca3f91270b0842a'],
                      createTime: '2023-07-03T08:37:40.123Z',
                      lastLoginTime: '2023-07-03T08:37:40.123Z',
                      __v: 0,
                    },
                    {
                      _id: '64a288ba948d940cc745af1d',
                      userId: 1006,
                      userName: 'guest3',
                      userEmail: 'guest3@manager.com',
                      mobile: '',
                      deptId: [
                        '60d054042ca3f91270b08417',
                        '60d056572ca3f91270b0841c',
                        '60d0568e2ca3f91270b0841e',
                      ],
                      job: '',
                      state: 2,
                      role: 0,
                      roleList: [
                        '60d058eb2ca3f91270b08426',
                        '60d05afc2ca3f91270b08428',
                      ],
                      createTime: '2023-07-03T08:37:14.552Z',
                      lastLoginTime: '2023-07-03T08:37:14.552Z',
                      __v: 0,
                    },
                    {
                      _id: '64a2888b948d940cc745af14',
                      userId: 1005,
                      userName: 'guest2',
                      userEmail: 'guest2@manager.com',
                      mobile: '13800013801',
                      deptId: [
                        '60d054042ca3f91270b08417',
                        '60d056572ca3f91270b0841c',
                        '60d0568e2ca3f91270b0841e',
                      ],
                      job: 'guest2',
                      state: 2,
                      role: 0,
                      roleList: ['60d058eb2ca3f91270b08426'],
                      createTime: '2023-07-03T08:36:27.540Z',
                      lastLoginTime: '2023-07-03T08:36:27.540Z',
                      __v: 0,
                    },
                    {
                      _id: '64a2886c948d940cc745af0e',
                      userId: 1004,
                      userName: 'guest1',
                      userEmail: 'guest1@manager.com',
                      mobile: '13800013800',
                      deptId: [
                        '60d054042ca3f91270b08417',
                        '60d056572ca3f91270b0841c',
                        '60d0568e2ca3f91270b0841e',
                      ],
                      job: 'guest1',
                      state: 2,
                      role: 0,
                      roleList: ['60d058d82ca3f91270b08425'],
                      createTime: '2023-07-03T08:35:56.057Z',
                      lastLoginTime: '2023-07-03T08:35:56.057Z',
                      __v: 0,
                    },
                    {
                      _id: '64a2884e948d940cc745af08',
                      userId: 1003,
                      userName: 'guest',
                      userEmail: 'guest@manager.com',
                      mobile: '13800013800',
                      deptId: ['64a5246d77cc482ce0232d5c'],
                      job: 'guest',
                      state: 2,
                      role: 0,
                      roleList: ['64a4b144a504f94997f0eb79'],
                      createTime: '2023-07-03T08:35:26.718Z',
                      lastLoginTime: '2023-07-03T08:35:26.718Z',
                      __v: 0,
                    },
                  ],
                  page: {
                    page: 1,
                    limit: 10,
                    total: 11,
                  },
                }
              : {
                  list: [
                    {
                      _id: '64a287e9948d940cc745af02',
                      userId: 1002,
                      userName: 'admin',
                      userEmail: 'admin@manager.com',
                      mobile: '13800013800',
                      deptId: ['60d054042ca3f91270b08417'],
                      job: '管理员',
                      state: 2,
                      role: 1,
                      roleList: ['60d0544d2ca3f91270b08419'],
                      createTime: '2023-07-03T08:33:45.755Z',
                      lastLoginTime: '2023-07-03T08:33:45.755Z',
                      __v: 0,
                    },
                  ],
                  page: {
                    page: 2,
                    limit: 10,
                    total: 11,
                  },
                },
        }
      },
    },
  ]
}
