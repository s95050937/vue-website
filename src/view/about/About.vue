<template>
  <div>
    <banner></banner>
    <short-banner></short-banner>
    <section1 class="about-section"></section1>
    <section1 class="about-section"></section1>
    <main-footer></main-footer>
  </div>
</template>

<script>
import Banner from './childcomps/banner/Banner'
import ShortBanner from './childcomps/shortbanner/ShortBanner'
import Section1 from './section/Section'
import MainFooter from 'components/content/mainfooter/MainFooter'

export default {
  name: "About",
  components: {
    Banner,
    ShortBanner,
    Section1,
    MainFooter
  }
}
</script>

<style >
  .about-section:nth-child(2n) .pic {
    order: 2;
  }
  .about-section:nth-child(2n+1) .content h1 {
    text-align: right;
  } 
</style>