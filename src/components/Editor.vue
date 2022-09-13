<template>
  <!--  @save(text，html)回调将参数将上传至服务器-->
  <v-md-editor v-model="text" height="90vh" @save="save"></v-md-editor>
  <el-dialog v-model="dialogFormVisible" title="保存">
    <el-form :model="form" label-width="70px">
      <el-form-item label="文章标题">
        <el-input v-model="form.topic"/>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="form.as.id" placeholder="please select your zone">
          <el-option label="Zone one" value="1"/>
          <el-option label="Zone two" value="0"/>
        </el-select>
      </el-form-item>
      <el-form-item label="发布日期">
        <el-col>
          <el-date-picker
              v-model="form.releaseDate"
              type="date"
              placeholder="Pick a date"

          />
        </el-col>
      </el-form-item>
      <el-form-item label="文章简介">
        <el-input v-model="form.intro" type="textarea"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">发布</el-button>
        <el-button @click="dialogFormVisible=false">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script setup>
import axios from "axios";
import {reactive, ref} from "vue";

const dialogFormVisible = ref(false)

//在加载时查询数据库分类列表，label设置为opt名称，id设置为opt值
//循环 <el-option label="Zone one" value="shanghai" /> 提交表单时要判断分类是否存在、同名文章等
const form = reactive({
  topic: '',
  url: '',
  releaseDate: '',
  as: {
    id: '',
  },
  intro: '',
})

let text = '';

let content = '';

function save(text, html) {
  dialogFormVisible.value = true;
  content = text;
}

const onSubmit = () => {
  console.log(content)
  form.url = form.topic
  axios.post("/admin/submit",{content,form}).then(function (res) {
    console.log(res.data)
    alert(res.data)
  });
  dialogFormVisible.value=false;
}
</script>