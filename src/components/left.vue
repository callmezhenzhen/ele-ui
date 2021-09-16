<template>
    <div class="left-side">
      <el-menu
        default-active="1-1-1"
      >
        <el-sub-menu index="1">
          <template #title>
            <i class="el-icon-location"></i>
            <span>Button 按钮</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1-1">基础用法</el-menu-item>
            <el-menu-item index="1-2-1">禁用状态</el-menu-item>
            <el-menu-item index="1-3-1">图标按钮</el-menu-item>
            <el-menu-item index="1-4-1">按钮组</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="2">Icon 图标</el-menu-item>
        <el-menu-item index="3">Input 输入框</el-menu-item>
        <el-menu-item index="4">Switch 开关</el-menu-item>
      </el-menu>
    </div>
</template>
<script>
export default {
    name: 'leftModule',
    setup() {
        
    }
}
</script>
<style lang="scss" scoped>
.left-side {
  position: fixed;
  left: 0;
  top: 0;
  width: 20%;
  height: 100%;
}
</style>
