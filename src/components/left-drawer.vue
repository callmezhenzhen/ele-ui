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
import { computed, ref, toRefs } from 'vue'
export default {
  name: 'leftDrawer',
  props: {
    showDrawer: Boolean
  },
  setup(props) {
    const direction = ref('ltr')
    const { showDrawer } = toRefs(props)
    const drawer = computed(() => showDrawer.value)
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