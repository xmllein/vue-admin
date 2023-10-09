import { createProdMockServer } from 'vite-plugin-mock/client'
import roleMock from '../mock/role'
import userMockFn from '../mock/user'
import loginMockFn from '../mock/login'
import deptMockFn from '../mock/dept'
import menuMockFn from '../mock/menu'

export async function setupProdMockServer() {
  const mockModules = [
    ...roleMock,
    ...userMockFn(),
    ...loginMockFn(),
    ...deptMockFn(),
    ...menuMockFn(),
  ]
  await createProdMockServer(mockModules)
}
