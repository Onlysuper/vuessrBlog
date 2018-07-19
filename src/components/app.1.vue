<style scoped>
</style>
<template>
  <div class="layout">
    <Layout>
      <Sider class="mysider" breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
          <MenuItem name="1-1">
          <Icon type="ios-navigate"></Icon>
          <span>Option 1</span>
          </MenuItem>
          <MenuItem name="1-2">
          <Icon type="search"></Icon>
          <span>Option 2</span>
          </MenuItem>
          <MenuItem name="1-3">
          <Icon type="settings"></Icon>
          <span>Option 3</span>
          </MenuItem>
        </Menu>
        <div slot="trigger"></div>
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </div>
  </div>
</template>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100vh;
}
/* @media screen and (min-width: 992px) {
  .mysider {
    display: none;
  }
} */
</style>
<script>
export default {
  data() {
    return {
      isCollapsed: false
    }
  },
  computed: {
    menuitemClasses: function () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  }
}
</script>
