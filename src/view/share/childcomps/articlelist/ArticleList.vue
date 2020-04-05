<template>
  <div class="article-list">
    <slot></slot>
    <article-nav></article-nav>
  </div>
</template>

<script>
import ArticleNav from './childcomps/ArticleNav'
export default {
  name: "ArticleList",
  components: {
    ArticleNav
  }
}
</script>

<style scoped>
  .article-list {
    width: 85%;
    margin: 35px auto;
  }
  .Item {
    width: 85%;
    margin: 0 auto;
  }
</style>