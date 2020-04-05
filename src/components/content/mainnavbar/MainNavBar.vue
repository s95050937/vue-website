<template>
  <nav-bar class="nav-bar">
    <nav-bar-left class="left">
      <!-- <img src="#" alt="" class="brand"> -->
      <nav-left-item class="tag" path="/home">喜之丹</nav-left-item>
      <nav-left-item class="tag" path="/shop">訂購美麗</nav-left-item>
      <nav-left-item class="tag" path="/share">美麗分享</nav-left-item>
      <nav-left-item class="tag" path="/news">影音消息</nav-left-item>
      <nav-left-item class="tag" path="/about">關於喜之丹</nav-left-item>
      <nav-left-item class="tag" path="/cart">購物車</nav-left-item>
      <nav-left-item class="tag" path="/member">會員登入</nav-left-item>
    </nav-bar-left>
    <nav-bar-right class="right">
      123
    </nav-bar-right>
  </nav-bar>
</template>

<script>
/**
 * 公共區
 */
import NavBar from '../../common/navbar/NavBar'

import NavBarLeft from '../../common/navbar/childcopms/left/NavBarLeft'
import NavLeftItem from '../../common/navbar/childcopms/left/NavLeftItem'
import NavBarRight from '../../common/navbar/childcopms/right/NavBarRight'
import NavRightItem from '../../common/navbar/childcopms/right/NavRightItem'

export default {
  name: "MainNavBar",
  data() {
    return {
      navList: [
        "訂購美麗",
        "美麗分享",
        "影音消息",
        "關於喜之丹",
        "購物車",
        "會員登入/註冊",
      ]
    }
  },
  components: {
    NavBar,

    NavBarLeft,
    NavLeftItem,
    NavBarRight,
    NavRightItem
  }
}
</script>

<style scoped>
  .nav-bar {
    height: 80px;
  }
  .left {
    flex: 3;
  }
  .tag {
    padding: 20px 0;
    /* margin: 20px 0; */
  }
  .tag + .tag {
    font-size: 18px;

  }
  .right {
    flex: 1;
  }
</style>