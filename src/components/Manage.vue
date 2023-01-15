<template>
  <el-table :data="articleList"
            stripe="stripe"
            style="width: 100%;" max-height="83.4vh">
    <el-table-column type="index" :index="indexMethod"/>
    <el-table-column prop="releaseDate" label="发布日期" width="150"></el-table-column>
    <el-table-column prop="as.name" label="分类" width="150"></el-table-column>
    <el-table-column prop="topic" label="标题"></el-table-column>
    <el-table-column fixed="right" label="管理" width="150">
      <template #default="scope">
        <el-button link type="primary" size="default" @click="edit(scope.row)">
          <el-icon>
            <Edit/>
          </el-icon>
          Edit
        </el-button>
        <el-popconfirm title="确定要删除吗？" cancel-button-text="取消" confirm-button-text="确认"
                       @confirm="confirmDelete(scope.row.id)">
          <template #reference>
            <el-button link type="danger" size="default">
              <el-icon>
                <Delete/>
              </el-icon>
              Delete
            </el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog v-model="editVisible" :title="toEdit.article.url" fullscreen="fullscreen" @close="getAll">
    <Change :art="toEdit" @finish="finish"/>
  </el-dialog>
</template>

<script setup>
import {onMounted, reactive, ref} from "vue";
import axios from "axios";
import Change from "@/components/Change.vue";

const editVisible = ref(false)
const articleList = ref(null)

let toEdit = reactive({
  article: '',
  content: '',
});

//setup语法糖下需使用reactive绑定，不然子组件无法正常监听值的变化

function getAll() {
  axios.get("api/show").then(function (res) {
    articleList.value = res.data;
  })
}

onMounted(() => {
  getAll();
})

const indexMethod = (number) => {
  return number + 1;
}

function edit(art) {
  editVisible.value = true;
  toEdit.article = art;
  axios.get('/article/' + toEdit.article.url + '.md').then((res) => {
    toEdit.content = res.data;
  })
}

function finish() {
  editVisible.value=false;
  getAll();
}

function confirmDelete(gotId) {
  axios.delete("/admin/delete", {
    params: {
      id: gotId,
    }
  }).then((res) => {
    getAll();
    alert(res.data);
  });
}
</script>

<style scoped>

</style>