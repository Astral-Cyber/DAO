<template>
  <el-container style="">
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
        <el-aside class="side" width="20vw" style="border:1px solid red;">
          <el-empty description="description"/>
        </el-aside>
        <el-main id="articleBody">

          <el-row>
            <el-icon :size="20" style="color: #E57B89;margin-top: 4.5px">
              <Reading/>
            </el-icon>
            <span style="font-weight: bolder;color: #666666;font-size: larger;margin-left: 4.5px;">藏典阁</span>
          </el-row>
          <el-divider border-style="dashed" content-position="left"/>

          <!-- 文章列表-->
          <div v-for="article in tableData">
              <el-row @click="$router.push({ name: 'article', params: { id: article.id }})" style="cursor:pointer;">
                <el-col :span="24" style="margin-top: 10px;margin-bottom: 5px">
                  <el-card shadow="hover">
                    <el-empty description="description"/>
                  </el-card>
                </el-col>
              </el-row>
          </div>
        </el-main>
        <el-aside class="side" width="20vw" style="border:1px solid red;">
          <el-empty description="description"/>
        </el-aside>
      </el-container>
    </el-main>
  </el-container>
</template>

<script setup>
import axios from "axios";
import {onBeforeMount, onMounted, ref} from "vue";

const tableData = ref([{name: 55,}])

onBeforeMount(() => {
  axios.get("api/show").then(function (res) {
    tableData.value = res.data;
  })
})

</script>

<style scoped>
@media screen and (max-width: 1070px) {
  .side {
    display: none;
  }
}
</style>