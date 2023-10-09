import request from '@/utils/request'

/**
 * 部门全部列表
 */
export const departmentAllList = () => {
  return request.get('/dept/alllist')
}
