<template>
  <el-container style="top: 59px;margin-bottom: 80px">
    <el-aside width="20vw"></el-aside>
    <el-main>
<!--      @copy-code-success="handleCopyCodeSuccess"-->
      <v-md-preview :text="article" @copy-code-success="handleCopyCodeSuccess"></v-md-preview>
    </el-main>
    <el-aside width="20vw"></el-aside>
  </el-container>
</template>

<script setup>
import {marked} from 'marked'
import hljs from 'highlight.js'
import "highlight.js/styles/github.css";
import 'github-markdown-css'
import axios from "axios";
import {onMounted, ref} from "vue";
import {useRoute} from 'vue-router'

const route = useRoute()
const article = ref('');

function handleCopyCodeSuccess() {
  console.log("copy");
}

onMounted(() => {
  // var rendererMD = new marked.Renderer();
  let url='/article/'+ route.params.url +'.md';
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
  axios.get(url)
      .then(function (res) {
        // var Md2html=marked(res.data)
        article.value = res.data
        console.log(article.value);
      })
})
</script>

<style scoped>

</style>