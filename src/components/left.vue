<template>
  <left-menu @menuSelected="menuSelected"></left-menu>
  <left-drawer></left-drawer>
</template>
<script>
import leftMenu from '@/components/left-menu.vue'
import leftDrawer from '@/components/left-drawer.vue'
export default {
  name: 'leftModule',
  components: { leftMenu, leftDrawer },
  setup() {
    const menuSelected = (menu) => {
      console.log(menu)
    }
    return {
      menuSelected
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
