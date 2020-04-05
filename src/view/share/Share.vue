<template>
  <div>
    <banner></banner>
    <key-words></key-words>
    <article-list>
      <article-list-item></article-list-item>
      <article-list-item></article-list-item>
      <article-list-item></article-list-item>
      <article-list-item></article-list-item>
      <article-list-item></article-list-item>
      <article-list-item></article-list-item>
    </article-list>
    <main-footer></main-footer>
  </div>
</template>

<script>
import Banner from './childcomps/banner/Banner'
import KeyWords from './childcomps/keywords/KeyWords'
import ArticleList from './childcomps/articlelist/ArticleList'
import ArticleListItem from './childcomps/articlelist/ArticleListItem'
import MainFooter from 'components/content/mainfooter/MainFooter'
export default {
  name: "Share",
  components: {
    Banner,
    KeyWords,
    ArticleList,
    ArticleListItem,
    MainFooter
  }
}
</script>

<style scoped>

</style>