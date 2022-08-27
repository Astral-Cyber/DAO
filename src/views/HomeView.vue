<script setup lang="ts">

</script>

<template>
  <el-container style="top: -59px">
    <el-header style="height: 100vh;
    background-image: url(https://source.unsplash.com/random/1600x800/?wallpaper);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    z-index: -1">
      <el-icon :size="40" color="rgba(255,255,255,.7)"
               style="z-index: 1; position: absolute;bottom: 10vh;right: 49vw">
        <SortDown/>
      </el-icon>
    </el-header>
    <el-main>
      <el-container>
        <el-aside class="side" width="15vw">
          <el-empty description="description" />
        </el-aside>
        <el-main>

            <el-row>
                <el-icon :size="20" style="color: #E57B89;margin-top: 4.5px"><Reading /></el-icon>
                <span style="font-weight: bolder;color: #666666;font-size: larger;margin-left: 4.5px;">藏典阁</span>
            </el-row>
            <el-divider border-style="dashed" content-position="left"/>

<!-- 文章列表-->
          <div style="height: 100vh"></div>


        </el-main>
        <el-aside class="side" width="15vw">
          <el-empty description="description" />
        </el-aside>
      </el-container>
    </el-main>
      <el-divider
          content-position="right"
          border-style="dashed"
          style="width: 65vw; margin: auto">
        <span style="color: #666666;">By 奉眠</span>
      </el-divider>
    <span style="margin: auto;color: #666666">&copy;2022 思量DAO</span>
  </el-container>
</template>
<style>
@media screen and (max-width: 1070px){
.side{
  display: none;
}
}
</style>