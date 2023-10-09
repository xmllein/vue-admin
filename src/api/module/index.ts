import request from '@/utils/request'
interface IUserList {
  pageSize: number
}
/**
 * 获取用户列表
 */
export const userList = (data: IUserList) => {
  return request.get('/userList', data)
}
