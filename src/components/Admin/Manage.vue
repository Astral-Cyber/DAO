<template :key="different">
  <el-table :data="articleList"
            stripe="stripe"
            style="width: 100%;
                background-color: #fff;
                border-radius: 4px;
                box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
                height: 83.4vh;"
            max-height="83.4vh">
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
    <Change :art="toEdit" @finish="finish" :key="toEdit.article"/>
  </el-dialog>
</template>

<script setup>
import {onMounted, reactive, ref} from "vue";
import axios from "axios";
import Change from "@/components/Admin/Change.vue";

const editVisible = ref(false)
const different = ref(false)
const articleList = ref([{}])

let toEdit = reactive({
  article: {}
});

//setup语法糖下需使用reactive绑定，不然子组件无法正常监听值的变化

function getAll() {
  axios.get("http://" + location.hostname + ":8080/api/show").then(function (res) {
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
}

async function finish() {
  editVisible.value = false;
}

function confirmDelete(gotId) {
  axios.delete("http://" + location.hostname + ":8080/admin/delete", {
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