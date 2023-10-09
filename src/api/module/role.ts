import request from '@/utils/request'

/**
 * 角色全部列表
 */
export const roleAllList = () => {
  return request.get('/role/alllist')
}
