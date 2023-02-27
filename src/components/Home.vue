<template>
  <el-container style="">
    <!--首屏展示图-->
    <el-header style="height: 100vh;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    z-index: 1"
               :style="{
      'background-image': 'url(https://source.unsplash.com/random/1800x1200/?desktop,wallpeper)'
    }">
      <el-icon :size="40" color="rgba(255,255,255,.7)"
               style="z-index: 2; position: absolute;bottom: 10vh;right: 49vw">
        <SortDown/>
      </el-icon>
    </el-header>
    <el-main>
      <el-container>
        <!--主页左侧-->
        <el-aside class="side" width="25vw">
          <el-empty description="description"/>
        </el-aside>
        <!--主页中心-->
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
            <el-row @click="$router.push({ name: 'art', params: { id: article.id }})" style="cursor:pointer;">
              <el-col :span="24" style="margin-bottom: 20px">
                <el-card class="articleCard">
                  <el-row>
                    <el-col :span="11" style="padding: 20px">
                      <h1 style="top: 0; color: #666666;font-weight: bolder;font-size: 20px;
                      word-break:break-all;
                        word-wrap:break-word">{{ article.topic }}</h1>
                      <div style="height: 100px;">
                        <span style="color: #777777;width:100%;
                        display:block;
                        white-space:pre-wrap;
                        word-break:break-all;
                        word-wrap:break-word;
                        overflow:hidden;">{{ article.intro }}</span>
                      </div>
                      <span style="color: #777777;font-size: small;bottom: 20px;position: absolute;width: 100%">
                        <el-row>
                         <el-col :span="12">
                           <el-icon style="top: 2px">
                             <Paperclip/>
                           </el-icon>
                           发布于{{ article.releaseDate }}
                         </el-col>
                          <el-col :span="12">
                           <el-icon style="top: 2px">
                             <Folder/>
                           </el-icon>
                           分类：{{ article.as.name }}
                         </el-col>
                        </el-row>
                      </span>
                    </el-col>
                    <el-col :span="13" class="articleImgBox">
                      <img :src="articleImg(article.id)" class="articleImg">
                    </el-col>
                  </el-row>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </el-main>
        <!--主页右侧-->
        <el-aside class="side" width="25vw">
          <el-empty description="description"/>
        </el-aside>
      </el-container>
    </el-main>
  </el-container>
</template>

<script setup>
import axios from "axios";
import {onBeforeMount, onMounted, ref} from "vue";

let imgApi = 'https://source.unsplash.com/random/900x600/?desktop,wallparper'
const tableData = ref(null)

onBeforeMount(() => {
  axios.get("http://"+location.hostname+":8080/api/show").then(function (res) {
    tableData.value = res.data;
  })
})

function articleImg(id) {
  // let url;
  // await axios.get('https://api.unsplash.com/photos/random?client_id=TYItb6qDXZniRVRgxRVHDym6xMgGUd35Ae4o0bbqq_0')
  //     .then(function (res) {
  //       console.log(res.data.urls.full);
  //       url = res.data.urls.full;
  //     }.bind(this));
  // return url;
  return imgApi + '?' + id + ')';
}

</script>

<style scoped>

</style>