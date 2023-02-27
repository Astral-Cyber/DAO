<template>
  <!--  @save(text，html)回调将参数将上传至服务器-->
  <v-md-editor v-model="form.content" height="83.4vh" @save="save"></v-md-editor>
  <!--  未设置表单内容检查-->
  <el-dialog
      v-model="dialogFormVisible"
      title="提交"
      @closed="resetForm(formRef)"
  >
    <el-form
        ref="formRef"
        :model="form"
        label-width="80px"
        :rules="rules"
        status-icon
    >
      <el-form-item label="文章标题" prop="topic">
        <el-input v-model="form.topic"/>
      </el-form-item>
      <el-form-item label="分类" prop="as.name">
        <el-select
            v-model="form.as.name"
            filterable
            allow-create
            default-first-option
            :reserve-keyword="false"
            placeholder="分一个类">
          <el-option v-for="sort in sorts" :label="sort.name" :value="sort.name"/>
        </el-select>
      </el-form-item>
      <el-form-item label="发布日期" prop="releaseDate" style="width:260px">
        <el-date-picker
            v-model="form.releaseDate"
            type="date"
            label="Have a nice day~"
            placeholder="Have a nice day~"
        />
      </el-form-item>
      <el-form-item label="文章简介" prop="intro">
        <el-input v-model="form.intro" type="textarea"/>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible=false">取消</el-button>
        <el-button type="primary" @click="onSubmit(formRef)"
        >发布</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import axios from "axios";
import {onMounted, reactive, ref, watch} from "vue";
import type {FormInstance, FormRules} from 'element-plus'
//setup下使用props
const props = defineProps(['art'])
//监听变化
// watch(() => props.chain, (n, o) => {
//   console.log(n, o);
// })

const emit=defineEmits()

const dialogFormVisible = ref(false)

const sorts = ref(null)

const formRef = ref<FormInstance>()

//在加载时查询数据库分类列表，label设置为opt名称，id设置为opt值
//循环 <el-option label="Zone one" value="shanghai" /> 提交表单时要判断分类是否存在、同名文章等
const form = reactive({
  id: props.art.article.id,
  topic: props.art.article.topic,
  content: props.art.article.content,
  releaseDate: props.art.article.releaseDate,
  as: {
    name: props.art.article.as.name,
  },
  intro: props.art.article.intro,
})

const rules = reactive<FormRules>({
  topic: [
    {required: true, message: '请输入标题', trigger: 'blur'},
    {min: 1, message: '最少输入一个字符', trigger: 'blur'},
  ],
  'as.name': [{required: true, message: '请选择一个分类', trigger: 'change'}],
  releaseDate: [{type: 'date', required: true, message: '请选择发布日期', trigger: 'change'}],
})

onMounted(()=>{
  console.log(89);
})
function save() {
  dialogFormVisible.value = true;
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

function getSorts() {
  axios.get("http://"+location.hostname+":8080/admin/allSorts").then(function (res) {
    sorts.value = res.data;
  })
}

onMounted(() => {
  getSorts();
})

const onSubmit = async (formEl: FormInstance | undefined) => {
  await formEl.validate((valid) => {
    if (valid) {
      axios.patch("http://"+location.hostname+":8080/admin/change", form).then(function (res) {
        console.log(res.data)
        alert(res.data)
      });
      getSorts();
      dialogFormVisible.value = false;
    } else {
      console.log('error submit!')
    }
  })
  emit('finish')
}

</script>