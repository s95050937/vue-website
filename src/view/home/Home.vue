<template>
  <div id="home">
    <banner></banner>
    <shop-section></shop-section>
    <share-section>
      <share-item></share-item>
      <share-item></share-item>
      <share-item></share-item>
    </share-section>
    <news-section></news-section>
    <about-section></about-section>
    <main-footer bgColor="#3498db" class="footer"></main-footer>
  </div>
</template>

<script>
import Banner from './childcomps/banner/Banner'
import ShopSection from './childcomps/shopsection/ShopSection'
import ShareSection from './childcomps/sharesection/ShareSection'
import ShareItem from './childcomps/sharesection/ShareItem'
import NewsSection from './childcomps/newssection/NewsSection'
import AboutSection from './childcomps/aboutsection/AboutSection'

import MainFooter from 'components/content/mainfooter/MainFooter'

export default {
  name: "Home",
  components: {
    Banner,
    ShopSection,
    ShareSection,
    ShareItem,
    NewsSection,
    AboutSection,
    MainFooter,
  }
}
</script>

<style scoped>
  /* #home {
    padding-top: 80px;
  } */
  /* .footer {
    width: 100%;
  } */
</style>