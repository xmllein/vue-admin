import { nextTick, toRaw } from 'vue'
import store from '@/store'
import { useUserStore } from '@/store/user'

interface Binding {
  arg?: string
  value?: string
}

type EL = HTMLElement | any

export default {
  mounted(el: EL, binding: Binding) {
    const { buttonPermissionList } = useUserStore(store)
    const buttonPermissionListData = toRaw(buttonPermissionList)

    // console.log('binding', binding.value)

    try {
      // 如果没有指令值，或者 buttonPermissionList 中没有指令值，就不存在
      if (
        !(
          binding.value &&
          buttonPermissionListData &&
          buttonPermissionListData.includes(binding.value)
        )
      ) {
        el.style.display = 'none'
        nextTick(() => {
          el.parentNode.removeChild(el)
        })
      }
    } catch (error) {
      console.log(error)
    }
  },
}
