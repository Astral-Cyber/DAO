<script setup>
import {RouterLink, RouterView} from 'vue-router'
import {ElNotification} from 'element-plus'
import {h, ref} from 'vue'

const avatar = "https://avatars.githubusercontent.com/u/72015883?v=4"
const findMe = "https://github.com/Astral-Cyber"

window.onload = function () {
  ElNotification({
    title: 'Welcome',
    message: '<span>欢迎来到思量DAO</span>' +'<span>丨</span>'+
        '<span>一念情似海•一念缘随风</span>',
    showClose: false,
    duration: 4000,
    dangerouslyUseHTMLString: true,
  })
}

</script>

<template>
  <el-affix style="width: 100vw">
    <el-menu
        class="el-menu-header"
        mode="horizontal"
        :ellipsis="false"
        router="router"
        background-color="rgba(255,255,255,.8)"
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
                <p style="margin: 0; font-weight: 500;">思量DAO</p>
                <el-link type="info" :href="findMe">@AstralCyber</el-link>
              </div>
            </el-col>
          </el-row>
        </template>
      </el-popover>
      <div class="flex-grow"/>

      <el-menu-item index="/" class="item">
        <el-icon>
          <House/>
        </el-icon>
        首页
      </el-menu-item>

      <el-menu-item index="/assort" class="item" disabled>
        <el-icon>
          <MessageBox/>
        </el-icon>
        归档
      </el-menu-item>
      <el-menu-item index="/about" class="item">
        <el-icon>
          <Connection/>
        </el-icon>
        关于博客
      </el-menu-item>

      <a :href="findMe" style="position: absolute;right: 10px;top: 13px;width: 30px">
        <img style="width: 100%" src="src/assets/github.svg"/>
      </a>
    </el-menu>
  </el-affix>

  <router-view v-slot="{ Component }" style="margin-top: -59px">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

  <el-divider
      border-style="none"
      style="width: 65vw; margin: 20px auto 30px;">
    <el-icon class="rotate" :size="24" style="margin: auto">
      <Sunny/>
    </el-icon>
  </el-divider>

  <el-divider
      border-style="none"
      style="width: 65vw; margin: auto auto 20px;">
    <span style="color: #b8b9b9;">
      &copy;2022 思量DAO • By 奉眠
    </span>
  </el-divider>
</template>

<style scoped>
.flex-grow {
  flex-grow: 0.45;
}

.item {
  font-weight: bold;
  font-size: large;
}

.el-menu-header {
  z-index: 1;
  border: none;
  box-shadow: none;
  transition: background-color 0.75s, box-shadow 0.75s;
}

.el-menu-header:hover {
  background-color: white;
  box-shadow: 0 1px 40px -8px rgb(0 0 0 / 50%);
}

.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5s;
  transition-timing-function: ease-in-out;
}

.fade-enter-from,
.fade-leave-to{
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
