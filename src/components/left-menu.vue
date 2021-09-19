<template>
  <el-menu
    @select="menuSelected"
    class="menu"
  >
    <el-sub-menu v-for="menu in menus" :key="menu.index" :index="menu.index">
      <template #title>
        <i class="el-icon-location"></i>
        <span>{{menu.title}}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item v-for="group in menu.group" :key="group.index" :index="group.index">{{group.label}}</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>
<script>
import { ref } from 'vue'
const menuList = [{
  name: 'button', // 组件文件夹
  title: 'Button 按钮', // 一级菜单
  index: '1',
  group: [{
    file: 'basic', // 组件文件
    label: '基础用法', // 二级菜单
    index: '1-1-1'
  }, {
    file: 'disabled',
    label: '禁用状态',
    index: '1-2-1'
  }, {
    file: 'icon',
    label: '图标按钮',
    index: '1-3-1'
  }, {
    file: 'group',
    label: '按钮组',
    index: '1-4-1'
  }]
}, {
  name: 'icon',
  title: 'Icon 图标',
  index: '2',
  group: [{
    file: 'basic',
    label: '基础用法',
    index: '2-1-1'
  },{
    file: 'disabled',
    label: '禁用状态',
    index: '2-2-1'
  }]
}, {
  name: 'input',
  title: 'Input 输入框',
  index: '3',
  group: [{
    file: 'basic',
    label: '基础用法',
    index: '3-1-1'
  },{
    file: 'disabled',
    label: '禁用状态',
    index: '3-2-1'
  }]
}, {
  name: 'switch',
  title: 'Switch 开关',
  index: '4',
  group: [{
    file: 'basic',
    label: '基础用法',
    index: '4-1-1'
  },{
    file: 'disabled',
    label: '禁用状态',
    index: '4-2-1'
  }]
}]
export default {
  emits: ['menuSelected'],
  setup(props, context) {
    const menus = ref(menuList)
    const menuSelected = (index) => {
      let groupIndex = 0
      const menuItem = menuList.find(item => {
        groupIndex = item.group.findIndex(el => el.index === index)
        return groupIndex > -1
      })
      const createMenuInfo = (menuItem, groupIndex) => {
        const { name, title } = menuItem
        const { label, index, file } = menuItem.group[groupIndex]
        return { name, title, label, index, file }
      }
      if (menuItem) {
        const menuInfo = createMenuInfo(menuItem, groupIndex)
        // 通知父组件选择了导航，并携带相关信息
        context.emit('menuSelected', menuInfo)
      }
    }
    return {
      menus,
      menuSelected
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .el-sub-menu__title {
  text-align: left;
}
.menu {
  z-index: 2021;
  position: fixed;
  left: 0;
  top: 0;
  width: 20%;
  height: 100%;
}
</style>