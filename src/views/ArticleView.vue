<template>
  <p>{{ $route.params.id }}</p>
</template>

<script>
export default {
  name: "ArticleView",
  mounted() {
    console.log(this.$route.params.id)
  }
}
</script>

<style scoped>

</style>