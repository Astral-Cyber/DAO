<script setup lang="ts">
import {ref} from 'vue'

const currentDate = ref(new Date())
</script>

<template>
  <el-container style="top: -59px">
    <el-header style="height: 100vh;
    background-image: url(https://api.ghser.com/random/fengjing.php);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    z-index: -1">
    </el-header>
    <el-main style="height: 200vh">

    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<style>

</style>