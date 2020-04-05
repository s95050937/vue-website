<template>
  <div>
    <main-content></main-content>
    <final></final>
    <btn-area></btn-area>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainContent from './main-content/MainContent'
import Final from './childcomps/final/Final'
import BtnArea from './childcomps/btnarea/BtnArea'
import MainFooter from '../../components/content/mainfooter/MainFooter'

export default {
  name: "Cart",
  components: {
    MainContent,
    Final,
    BtnArea,
    MainFooter
  }
  
}
</script>

<style scoped>

</style>