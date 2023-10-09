import * as login from './module/login'
import * as menu from './module/menu'
import * as user from './module/user'
import * as dept from './module/dept'
import * as role from './module/role'
import * as index from './module/index'

export default Object.assign({}, login, index, menu, user, dept, role)
