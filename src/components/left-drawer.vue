<template>
  <el-drawer
    class="drawer"
    title="我是标题"
    v-model="drawer"
    :direction="direction"
    destroy-on-close>
    <span>我来啦!</span>
  </el-drawer>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'leftDrawer',
  setup() {
    const drawer = ref(false)
    const direction = ref('ltr')
    return {
      drawer,
      direction
    }
  }
}
</script>
<style lang="scss" scoped>
.drawer {
  z-index: 2020;
  width: 100%;
}
</style>