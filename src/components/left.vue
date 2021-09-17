<template>
  <left-menu @menuSelected="menuSelected"></left-menu>
  <left-drawer :show-drawer="showDrawer"></left-drawer>
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
    const menuSelected = (menu) => {
      if (menu) showDrawer.value = true
    }
    return {
      showDrawer,
      menuSelected
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
