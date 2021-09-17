<template>
  <el-drawer
    :model-value="showDrawer"
    :direction="direction"
    @closed="closed"
    :z-index="2020"
    size="100%"
    destroy-on-close>
    <template #title>
      <el-breadcrumb class="dra-breadcrumb" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>{{curMenu.menuTitle}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{curMenu.groupTitle}}</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
  </el-drawer>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'leftDrawer',
  emits: ['drawerClosed'],
  props: {
    showDrawer: Boolean,
    curMenu: Object
  },
  setup(props, context) {
    const direction = ref('ltr')
    const closed = () => { context.emit('drawerClosed')}
    return {
      direction,
      closed
    }
  }
}
</script>
<style lang="scss" scoped>
.dra-breadcrumb {
  position: relative;
  left: 20%;
  top: 0;
}
</style>
