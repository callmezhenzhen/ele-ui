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
        <el-breadcrumb-item>{{curMenu.title}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{curMenu.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <div class="cmpt-content">
      <component :is="currentComponent"></component>
    </div>
  </el-drawer>
</template>
<script>
import { ref, toRefs, watch } from 'vue'
import viButtonBasic from '@/views/button/basic.vue'
import viIconBasic from '@/views/icon/basic.vue'
import viEmpty from '@/views/empty/empty.vue'
export default {
  name: 'leftDrawer',
  emits: ['drawerClosed'],
  components: { viButtonBasic, viIconBasic, viEmpty },
  props: {
    showDrawer: Boolean,
    curMenu: Object
  },
  setup(props, context) {
    const direction = ref('ltr')
    const currentComponent = ref('')
    // 监听drawer关闭
    const closed = () => { context.emit('drawerClosed')}
    const { curMenu } = toRefs(props)
    const getComponentName = (key) => {
      return ({
        'button-basic': 'viButtonBasic',
        'icon-basic': 'viIconBasic'
      })[key] || 'viEmpty'
    }
    watch(curMenu, (curMenu, prevMenu) => {
      if (curMenu.file !== prevMenu.file) {
        currentComponent.value = getComponentName(`${curMenu.name}-${curMenu.file}`)
        console.log(currentComponent)
      }
    })
    return {
      direction,
      closed,
      currentComponent,
      getComponentName
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
.cmpt-content {
  position: relative;
  left: 20%;
  padding: 20px;
}
</style>
