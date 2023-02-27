<template>
  <el-container style="top: 59px;margin-bottom: 80px">
    <el-aside class="side" width="20vw"></el-aside>
    <el-main>
      <el-card class="articleCard">
        <!--      @copy-code-success="handleCopyCodeSuccess"-->
        <v-md-preview :text="article.content" @copy-code-success="handleCopyCodeSuccess"></v-md-preview>
      </el-card>
    </el-main>
    <el-aside class="side" width="20vw"></el-aside>
  </el-container>
</template>

<script setup>
import axios from "axios";
import {onMounted, ref} from "vue";
import {useRoute} from 'vue-router'

const route = useRoute()
const article = ref({});

function handleCopyCodeSuccess() {
  console.log("copy");
}

onMounted(() => {
  // var rendererMD = new marked.Renderer();
  // marked.setOptions({
  //   renderer: rendererMD,
  //   highlight: function(code) {
  //     return hljs.highlightAuto(code).value;
  //   },
  //   pedantic: false,
  //   gfm: true,
  //   tables: true,
  //   breaks: false,
  //   sanitize: false,
  //   smartLists: true,
  //   smartypants: false,
  //   xhtml: false,
  // })
  axios.get("http://"+location.hostname+":8080/api/getOne", {params: {id: route.params.id}})
      .then(function (res) {
        // var Md2html=marked(res.data)
        article.value = res.data
      })
})
</script>

<style scoped>

</style>