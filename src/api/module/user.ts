import request from '@/utils/request'
import type { User } from 'types/index'

interface IUserList {
  pageNum?: number
  pageSize?: number
  userId?: string
  userName?: string
  state?: number
}
/**
 * 用户列表
 */
export const userList = (data: IUserList) => {
  return request.get('/user/list', data)
}

/**
 * 用户新增与编辑
 * @param data
 * @returns
 */
export const userOperate = (data: User) => {
  return request.post('/user/operate', data)
}

/**
 * 用户删除
 */
export const userDelete = (data: Array<string>) => {
  return request.post('/user/delete', data)
}
