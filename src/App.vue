<template>
  <el-container>
    <el-aside width="200px">
      <el-col>
        <h1 class="mb-2" style="text-align: center">DashBoard</h1>
        <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            router="router"
        >
          <el-menu-item index="1">
            <template #title>
              <el-icon>
                <location/>
              </el-icon>
              <span>概览</span>
            </template>
          </el-menu-item>
          <el-menu-item index="editor">
            <el-icon>
              <icon-menu/>
            </el-icon>
            <span>上传文章</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon>
              <document/>
            </el-icon>
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon>
              <setting/>
            </el-icon>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-aside>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
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

</style>
