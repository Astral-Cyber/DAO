<template>

</template>

<script lang="ts" setup>
import {reactive} from 'vue'
import axios from "axios";
import { UploadFilled } from '@element-plus/icons-vue'

//在加载时查询数据库分类列表，label设置为opt名称，id设置为opt值
//循环 <el-option label="Zone one" value="shanghai" /> 提交表单时要判断分类是否存在、同名文章等
const form = reactive({
  topic: '',
  url:'',
  releaseDate: '',
  as: {
    id: '',
  },
  intro: '',
})

const onSubmit = () => {
  console.log(form)
  form.url=form.topic
  axios.post("admin/submit", form)
}
</script>