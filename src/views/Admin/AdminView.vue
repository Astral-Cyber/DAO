<template>
  <el-container>
    <el-aside width="200px" style="text-align: center;">
      <el-col>
        <h1 class="mb-2" style="font-size: x-large;margin: 16px;color: #409EFF;font-style: italic">DashBoard</h1>
        <el-menu
            default-active="/admin"
            class="el-menu-vertical-demo"
            router="router"
            style="height: 85vh"
        >
          <el-menu-item index="/admin">
            <template #title>
              <el-icon>
                <Monitor/>
              </el-icon>
              <span>概览</span>
            </template>
          </el-menu-item>
          <el-sub-menu>
            <template #title>
              <el-icon>
                <Memo/>
              </el-icon>
              <span>文章</span>
            </template>
            <el-menu-item index="/admin/editor">
              <el-icon size="16px">
                <DocumentAdd/>
              </el-icon>
              <span class="subItem">
                发布
              </span>
            </el-menu-item>
            <el-menu-item index="/admin/manage">
              <el-icon size="16px">
                <Collection/>
              </el-icon>
              <span class="subItem">
                管理
              </span>
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item index="/admin/comment" disabled>
            <el-icon>
              <document/>
            </el-icon>
            <span>评论</span>
          </el-menu-item>
          <el-menu-item index="/admin/setting">
            <el-icon>
              <setting/>
            </el-icon>
            <span>设置</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-aside>


    <el-main style="margin-top: 50px">
      <router-view/>
    </el-main>

  </el-container>


  <el-divider
      border-style="none"
      style="margin: 20px auto 30px;">
    <el-icon class="rotate" :size="24" style="margin: auto">
      <Sunny/>
    </el-icon>
  </el-divider>

  <el-divider
      border-style="none"
      style="margin: auto auto 20px;">
    <span style="color: #b8b9b9;text-align: center">
      &copy;思量DAO • By 奉眠
    </span>
  </el-divider>
</template>

<script lang="ts" setup>
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>


<style scoped>
.subItem {
  font-size: small;
  margin-top: 1px;
  margin-left: -4px;
}

.el-menu {
  background-color: rgba(255, 255, 255, 0) !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  transition-timing-function: ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.rotate {
  animation: myRotate 12s linear infinite;
}

@keyframes myRotate {
  0% {
    -webkit-transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>
