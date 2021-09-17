<template>
  <left-menu @menuSelected="menuSelected"></left-menu>
  <left-drawer :cur-menu="curMenu" :show-drawer="showDrawer" @drawerClosed="drawerClosed"></left-drawer>
</template>
<script>
import { ref } from 'vue'
import leftMenu from '@/components/left-menu.vue'
import leftDrawer from '@/components/left-drawer.vue'
export default {
  name: 'leftModule',
  components: { leftMenu, leftDrawer },
  setup() {
    const showDrawer = ref(false)
    const curMenu = ref({})
    // 子组件选择导航菜单
    const menuSelected = (menu) => {
      if (menu) {
        curMenu.value = menu
        showDrawer.value = true
      }
    }
    // 子组件关闭抽屉
    const drawerClosed = () => { showDrawer.value = false }
    return {
      curMenu,
      showDrawer,
      menuSelected,
      drawerClosed
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
