<!--<template>-->
<!--  <el-form :model="form" label-width="120px">-->
<!--    <el-form-item label="文章标题">-->
<!--      <el-input v-model="form.topic"/>-->
<!--    </el-form-item>-->
<!--    <el-form-item label="分类">-->
<!--      <el-select v-model="form.as.id" placeholder="please select your zone">-->
<!--        <el-option label="Zone one" value="1"/>-->
<!--        <el-option label="Zone two" value="0"/>-->
<!--      </el-select>-->
<!--    </el-form-item>-->
<!--    <el-form-item label="发布日期">-->
<!--      <el-col>-->
<!--        <el-date-picker-->
<!--            v-model="form.releaseDate"-->
<!--            type="date"-->
<!--            placeholder="Pick a date"-->
<!--            style="width: 20vw"-->
<!--        />-->
<!--      </el-col>-->
<!--    </el-form-item>-->
<!--    <el-form-item label="文章简介">-->
<!--      <el-input v-model="form.intro" type="textarea"/>-->
<!--    </el-form-item>-->
<!--    <el-form-item label="Markdown文件">-->
<!--      <el-upload-->
<!--          class="upload-demo"-->
<!--          drag-->
<!--          action="admin/upload"-->
<!--          multiple-->
<!--      >-->
<!--        <el-icon class="el-icon&#45;&#45;upload"><upload-filled /></el-icon>-->
<!--        <div class="el-upload__text">-->
<!--          Drop .md file here or <em>click to upload</em>-->
<!--        </div>-->
<!--      </el-upload>-->
<!--    </el-form-item>-->
<!--    <el-form-item>-->
<!--      <el-button type="primary" @click="onSubmit">发布</el-button>-->
<!--      <el-button>取消</el-button>-->
<!--    </el-form-item>-->
<!--  </el-form>-->
<!--</template>-->

<!--<script lang="ts" setup>-->
<!--import {reactive} from 'vue'-->
<!--import axios from "axios";-->
<!--import { UploadFilled } from '@element-plus/icons-vue'-->

<!--//在加载时查询数据库分类列表，label设置为opt名称，id设置为opt值-->
<!--//循环 <el-option label="Zone one" value="shanghai" /> 提交表单时要判断分类是否存在、同名文章等-->
<!--const form = reactive({-->
<!--  topic: '',-->
<!--  url:'',-->
<!--  releaseDate: '',-->
<!--  as: {-->
<!--    id: '',-->
<!--  },-->
<!--  intro: '',-->
<!--})-->

<!--const onSubmit = () => {-->
<!--  console.log(form)-->
<!--  form.url=form.topic-->
<!--  axios.post("admin/submit", form)-->
<!--}-->
<!--</script>-->