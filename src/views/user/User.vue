<script setup lang="ts">
import { reactive, ref, onMounted, defineAsyncComponent } from 'vue'
import type { TableColumnCtx } from 'element-plus'
import type { User } from 'types/index'
import dayjs from 'dayjs'

// 异步加载组件
const UserOperateDialog = defineAsyncComponent(
  () => import('./components/UserOperateDialog.vue'),
)

import api from '@/api'

// api 请求
const queryForm = ref()
// dialog ref
const userOperateDialog = ref()

const loading = ref<Boolean>(false)

// 表格展示列项
const tableColumns = [
  {
    label: '用户 ID',
    prop: 'userId',
    width: 80,
  },
  {
    label: '用户名称',
    prop: 'userName',
  },
  {
    label: '用户邮箱',
    prop: 'userEmail',
    width: 200,
  },
  {
    label: '用户手机',
    prop: 'mobile',
    width: 200,
  },
  {
    label: '用户角色',
    prop: 'role',
    formatter(row: User, column: TableColumnCtx<User>, value: number) {
      const dictionary: any = {
        0: '普通用户',
        1: '管理员',
      }
      return dictionary[value]
    },
  },
  {
    label: '用户状态',
    prop: 'state',
    formatter(row: User, column: TableColumnCtx<User>, value: number) {
      const dictionary: any = {
        1: '试用',
        2: '在职',
        3: '离职',
      }
      return dictionary[value]
    },
  },
  {
    label: '注册时间',
    prop: 'createTime',
    formatter(row: User, column: TableColumnCtx<User>, value: string) {
      return dayjs(value).format('YYYY-MM-DD HH:mm:ss')
    },
    width: 180,
  },
  {
    label: '最后登录',
    prop: 'lastLoginTime',
    formatter(row: User, column: TableColumnCtx<User>, value: string) {
      return dayjs(value).format('YYYY-MM-DD HH:mm:ss')
    },
    width: 180,
  },
]
const userList = ref<Array<User>>([])
// 表格数据查询字段
const query = reactive({
  userId: '',
  userName: '',
  state: 2,
})
// 表格数据分页
const pageData = reactive({
  pageNum: 1,
  pageSize: 10,
  total: 0,
})

// 加载表格数据的方法
const getUserList = async () => {
  loading.value = true
  const params = { ...pageData, ...query }
  try {
    const { page, list } = await api.userList(params)
    loading.value = false
    if (page && list) {
      userList.value = list
      pageData.total = page.total
    }
  } catch (error) {
    loading.value = false
    ElMessage.error('获取用户列表失败！')
    console.log(error)
  }
}

// 查询、重置查询数据方法
const handleQuerySubmit = (options: {
  reset?: boolean
  pageNum?: number
  pageSize?: number
}) => {
  const { reset, pageNum, pageSize } = options
  if (reset) {
    queryForm.value.resetFields()
  }
  pageData.pageNum = pageNum || 1
  pageData.pageSize = pageSize || 10
  getUserList()
}

// （调用子组件的方法）弹出用户编辑弹窗
const showDialog = (show: boolean, action: string, userInfo?: User) => {
  // console.log(userOperateDialog.value)
  userOperateDialog.value.handleToggleDialogShow(show, action, userInfo)
}

// 页面初始化的时候自动执行一次加载数据
onMounted(() => {
  getUserList()
})

// 选中的表格数据
const userSelectedList = ref<Array<User>>([])
const handleSelectionChange = (list: Array<User>) => {
  userSelectedList.value = list
}

// 根据用户 Id 删除用户（数组，可删除多个）的具体方法
const userDelete = async (userIds: Array<string>) => {
  if (userIds.length > 0) {
    // 确认删除
    const confirmResult = await ElMessageBox.confirm(
      '此操作将永久删除用户, 是否继续?',
      '提示',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      },
    ).catch(() => false)

    const confirm = confirmResult as boolean
    if (!confirm) {
      return
    }

    const delCount = await api.userDelete({ userIds })
    if (delCount.nModified > 0) {
      ElMessage.success('删除成功！')
      getUserList()
    } else {
      ElMessage.error('删除失败！')
    }
  } else {
    ElMessage.warning('请先选中数据！')
  }
}
// 用户单条数据删除
const handleSingleDel = (row: User) => {
  if (row && row._id) {
    userDelete([row.userId])
  }
}
// 用户批量数据删除
const handlePatchDel = () => {
  const userIds = [] as Array<string>
  userSelectedList.value.forEach((item) => {
    if (item && item._id) {
      userIds.push(item.userId)
    }
  })
  userDelete(userIds)
}
</script>

<template>
  <div class="content_wrapper">
    <div class="query_form_wrapper">
      <el-form :inline="true" :model="query" ref="queryForm">
        <el-form-item label="用户 ID" prop="userId">
          <el-input
            v-model="query.userId"
            placeholder="请输入用户 ID"
          ></el-input>
        </el-form-item>
        <el-form-item label="用户名称" prop="userName">
          <el-input
            v-model="query.userName"
            placeholder="请输入用户名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="用户状态" prop="state">
          <el-select v-model="query.state" placeholder="请选择用户状态">
            <el-option label="所有" :value="0"></el-option>
            <el-option label="试用" :value="1"></el-option>
            <el-option label="在职" :value="2"></el-option>
            <el-option label="离职" :value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleQuerySubmit">查询</el-button>
          <el-button @click="handleQuerySubmit({ reset: true })"
            >重置</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <div class="table_container">
      <div class="table_tools">
        <el-button
          type="primary"
          v-has="'user_add'"
          @click="showDialog(true, 'add')"
          >新增</el-button
        >
        <el-button
          type="danger"
          v-has="'user_batch_delete'"
          @click="handlePatchDel"
          >批量删除</el-button
        >
      </div>
      <div class="table_content">
        <el-table
          height="570px"
          v-loading="loading"
          @selection-change="handleSelectionChange"
          :data="userList"
          stripe
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column
            v-for="col in tableColumns"
            :key="col.prop"
            :prop="col.prop"
            :label="col.label"
            :width="col.width"
            :formatter="col.formatter"
          ></el-table-column>
          <el-table-column label="操作">
            <template #default="scope">
              <el-button
                v-has="'user_edit'"
                @click="showDialog(true, 'edit', scope.row)"
                >编辑</el-button
              >
              <el-button
                v-has="'user_delete'"
                type="danger"
                @click="handleSingleDel(scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="
            (pageSize: number) => {
              handleQuerySubmit({ pageSize })
            }
          "
          @current-change="
            (pageNum: number) => {
              handleQuerySubmit({ pageNum })
            }
          "
          v-model:current-page="pageData.pageNum"
          :page-sizes="[10, 20, 50, 100]"
          v-model:page-size="pageData.pageSize"
          :total="pageData.total"
          class="table_pagination"
          layout="total, sizes, prev, pager, next, jumper"
          background
        >
        </el-pagination>
      </div>
    </div>
    <UserOperateDialog ref="userOperateDialog" :getUserList="getUserList" />
  </div>
</template>

<style lang="scss" scoped></style>
