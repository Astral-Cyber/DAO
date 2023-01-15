<template>
  <el-container>
    <el-aside width="200px" style="text-align: center;">
      <el-col>
        <h1 class="mb-2" style="font-size: x-large;margin: 16px;color: #409EFF;font-style: italic">DashBoard</h1>
        <el-menu
            default-active="/"
            class="el-menu-vertical-demo"
            router="router"
            style="height: 85vh"
        >
          <el-menu-item index="/">
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
            <el-menu-item index="editor">
              <el-icon size="16px">
                <DocumentAdd />
              </el-icon>
              <span class="subItem">
                发布
              </span>
            </el-menu-item>
            <el-menu-item index="manage">
              <el-icon size="16px">
                <Collection />
              </el-icon>
              <span class="subItem">
                管理
              </span>
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item index="comment" disabled>
            <el-icon>
              <document/>
            </el-icon>
            <span>评论</span>
          </el-menu-item>
          <el-menu-item index="setting">
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
</template>

<script lang="ts" setup>
import {
  Document,
  Setting,
} from '@element-plus/icons-vue'

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
</style>
