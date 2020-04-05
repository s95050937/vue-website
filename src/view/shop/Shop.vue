<template>
  <div>
    <intro-section></intro-section>
    <goods-section>
      <goods-item class="item"></goods-item>
      <goods-item class="item"></goods-item>
      <goods-item class="item"></goods-item>
    </goods-section>

    <main-footer></main-footer>
    
  </div>
</template>

<script>
import IntroSection from './childcomps/IntroSection/IntroSection'
import GoodsSection from './childcomps/goods/GoodsSection'
import GoodsItem from './childcomps/goods/GoodsItem'
import MainFooter from 'components/content/mainfooter/MainFooter'
export default {
  name: "Shop",
  components: {
    IntroSection,
    GoodsSection,
    GoodsItem,
    MainFooter
  }
}
</script>

<style scoped>
  .item {
    margin: 30px;
  }
</style>