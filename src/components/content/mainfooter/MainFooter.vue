<template>
  <footer class="footer" :style ="{backgroundColor: bgColor}">
    <main-content>
      <section1>
        <item1 class="item-1">訂購美麗</item1>
        <item1 class="item-1">美麗分享</item1>
        <item1 class="item-1">影音消息</item1>
        <item1 class="item-1">關於喜之丹</item1>
        <item1 class="item-1">版權聲明&copy;</item1>
        <item1 class="item-1">聯絡我們</item1>
      </section1>
      <section2>
        <item2>週一~週五</item2>
        <item2>9.00am~12:00item2m/1:30~6:30item2m</item2>
        <item2>電子信箱 : joyofred@joyofred.com</item2>
        <item2>客服電話 : 02 8522 8360</item2>
        <item2>常見問題</item2>
      </section2>
      <section3></section3>
    </main-content>
    <copy-right></copy-right>
  </footer>
    
</template>

<script>
import Footer from 'components/common/footer/Footer'
import MainContent from 'components/common/footer/childcomps/maincontent/Maincontent'
import Section1 from 'components/common/footer/childcomps/maincontent/childcomps/section-1/Section1'
import Item1 from 'components/common/footer/childcomps/maincontent/childcomps/section-1/Item1'
import Section2 from 'components/common/footer/childcomps/maincontent/childcomps/section-2/Section2'
import Item2 from 'components/common/footer/childcomps/maincontent/childcomps/section-2/Item2'
import Section3 from 'components/common/footer/childcomps/maincontent/childcomps/section-3/Section3'
import CopyRight from '../../common/footer/childcomps/copyright/CopyRight'


export default {
  name: "MainFooter",
  props: {
    bgColor: {
      type: String,
      default() {
        return "#cd6133"
      }
    }
  },




  components: {
    Footer,
    MainContent,
    Section1,
    Item1,
    Section2,
    Item2,
    Section3,
    CopyRight
  }
}
</script>

<style scoped>
  .footer {
  }
</style>