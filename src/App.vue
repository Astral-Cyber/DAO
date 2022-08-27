<script lang="ts" setup>
import {RouterLink, RouterView} from 'vue-router'
import {ElNotification} from 'element-plus'
import {h} from 'vue'

const avatar = "https://avatars.githubusercontent.com/u/72015883?v=4"
const findMe = "https://github.com/Astral-Cyber"

window.onload = function () {
  ElNotification({
    title: 'Welcome',
    message: h('i', {style: 'color: teal'}, '欢迎来到思量DAO'),
    showClose: false,
  })
}
</script>

<template>
  <el-affix target=".main-container">
    <el-menu
        class="el-menu-header"
        mode="horizontal"
        :ellipsis="false"
        router="router"
        default-active="/"
    >
      <el-popover
          :width="200"
          popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 10px;"
      >
        <template #reference>
          <el-avatar :size="48" style="margin-top: 5px;margin-left: 10px" :src="avatar"/>
        </template>
        <template #default>
          <el-row>
            <el-col :span="10">
              <el-avatar :size="60" :src="avatar" style="margin-top: 4px;margin-left: 4px;"/>
            </el-col>
            <el-col :span="14">
              <div style="margin-top: 14px;margin-left: 2px">
                <p style="margin: 0; font-weight: 500;">思量DAO(岛)</p>
                <el-link type="info" :href="findMe">@AstralCyber</el-link>
              </div>
            </el-col>
          </el-row>
        </template>
      </el-popover>

      <div class="flex-grow"/>
      <el-menu-item index="/" class="item">首页</el-menu-item>
      <el-menu-item index="/assort" class="item">归档</el-menu-item>
      <el-menu-item index="/about" class="item">关于博客</el-menu-item>
      <!--    <el-sub-menu index="2">-->
      <!--      <template #title>Workspace</template>-->
      <!--      <el-menu-item index="2-1">item one</el-menu-item>-->
      <!--      <el-menu-item index="2-2">item two</el-menu-item>-->
      <!--      <el-menu-item index="2-3">item three</el-menu-item>-->
      <!--      <el-sub-menu index="2-4">-->
      <!--        <template #title>item four</template>-->
      <!--        <el-menu-item index="2-4-1">item one</el-menu-item>-->
      <!--        <el-menu-item index="2-4-2">item two</el-menu-item>-->
      <!--        <el-menu-item index="2-4-3">item three</el-menu-item>-->
      <!--      </el-sub-menu>-->
      <!--    </el-sub-menu>-->
    </el-menu>
  </el-affix>
  <el-scrollbar height="100vh" wrap-class="main-container">
    <RouterView/>
  </el-scrollbar>
</template>

<style scoped>
.flex-grow {
  flex-grow: 0.45;
}

.item {
  font-weight: bold;
  font-size: large;
}
</style>
