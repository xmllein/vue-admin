import type { MockConfig } from 'vite-plugin-mock'
import Mock from 'mockjs'

export default (config?: MockConfig) => {
  return [
    {
      url: '/api/getRoleById',
      method: 'get',
      response: ({ query }: any) => {
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
      url: '/api/dept/alllist',
      method: 'get',
      response: ({ query }: any) => {
        console.log('id>>>>>>>>', query.id)
        return {
          code: 0,
          message: 'ok',
          data: [
            {
              _id: '64a5246d77cc482ce0232d5c',
              parentId: [],
              deptName: 'Manager 科技集团',
              userInfo: {
                _id: '64a287e9948d940cc745af02',
                userId: 1002,
                userName: 'admin',
                userEmail: 'admin@manager.com',
                mobile: '13800013800',
                deptId: ['60d054042ca3f91270b08417'],
                job: '管理员',
                state: 2,
                role: 0,
                roleList: ['60d0544d2ca3f91270b08419'],
                createTime: '2023-07-03T08:33:45.755Z',
                lastLoginTime: '2023-07-03T08:33:45.755Z',
                __v: 0,
              },
              createTime: '2023-07-05T08:04:00.389Z',
              updateTime: '2023-07-05T08:20:35.904Z',
              __v: 0,
              children: [
                {
                  _id: '64a5269e1b6b8afe22677312',
                  parentId: ['64a5246d77cc482ce0232d5c'],
                  deptName: '产品研发部',
                  userInfo: {
                    _id: '64a2884e948d940cc745af08',
                    userId: 1003,
                    userName: 'guest',
                    userEmail: 'guest@manager.com',
                    mobile: '13800013800',
                    deptId: [
                      '60d054042ca3f91270b08417',
                      '60d056572ca3f91270b0841c',
                      '60d0567c2ca3f91270b0841d',
                    ],
                    job: 'guest',
                    state: 2,
                    role: 0,
                    roleList: ['60d058b72ca3f91270b08424'],
                    createTime: '2023-07-03T08:35:26.718Z',
                    lastLoginTime: '2023-07-03T08:35:26.718Z',
                    __v: 0,
                  },
                  createTime: '2023-07-05T08:13:47.719Z',
                  updateTime: '2023-07-05T08:13:47.719Z',
                  __v: 0,
                  children: [
                    {
                      _id: '64a526c71b6b8afe2267731b',
                      parentId: [
                        '64a5246d77cc482ce0232d5c',
                        '64a5269e1b6b8afe22677312',
                      ],
                      deptName: '后端开发课',
                      userInfo: {
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
                      createTime: '2023-07-05T08:13:47.719Z',
                      updateTime: '2023-07-05T08:13:47.719Z',
                      __v: 0,
                    },
                    {
                      _id: '64a526df1b6b8afe22677323',
                      parentId: [
                        '64a5246d77cc482ce0232d5c',
                        '64a5269e1b6b8afe22677312',
                      ],
                      deptName: '前端开发课',
                      userInfo: {
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
                      createTime: '2023-07-05T08:13:47.719Z',
                      updateTime: '2023-07-05T08:20:44.103Z',
                      __v: 0,
                    },
                    {
                      _id: '64a526f51b6b8afe2267732b',
                      parentId: [
                        '64a5246d77cc482ce0232d5c',
                        '64a5269e1b6b8afe22677312',
                      ],
                      deptName: '运维测试课',
                      userInfo: {
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
                      createTime: '2023-07-05T08:13:47.719Z',
                      updateTime: '2023-07-05T08:13:47.719Z',
                      __v: 0,
                    },
                  ],
                },
                {
                  _id: '64a5270e1b6b8afe22677333',
                  parentId: ['64a5246d77cc482ce0232d5c'],
                  deptName: '财务部',
                  userInfo: {
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
                  createTime: '2023-07-05T08:13:47.719Z',
                  updateTime: '2023-07-05T08:13:47.719Z',
                  __v: 0,
                },
              ],
            },
          ],
        }
      },
    },
  ]
}
