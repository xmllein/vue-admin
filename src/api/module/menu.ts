import request from '@/utils/request'

/**
 * 获取用户权限
 */
export const getPermissionList = () => {
  return request.get('/menu/permissionList')
}

/**
 * 获取通知待审批数量
 */
export const leaveCount = () => {
  return request.get('/leave/count')
}
