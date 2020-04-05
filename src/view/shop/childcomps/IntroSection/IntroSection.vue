<template>
  <div class="Intro-section">
    <div class="img">
      <img src="https://fakeimg.pl/900x900/" alt="">
    </div>
    <div class="content">
      <h1>標題標題標題標題標題標題</h1>
      <p>內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文</p>
      <btn class="Btn" color="black">探索保濕系列</btn>
    </div>
  </div>  
</template>

<script>
import Btn from 'components/common/btn/normal/Btn'

export default {
  name: "IntroSection",
  components: {
    Btn
  }
}
</script>

<style scoped>
  .Intro-section {
    display: flex;
  }
  .img {
    width: 45%;

  }
  .img img {
    width: 100%;
    vertical-align: middle;
  }
  .content {

  }
  .Btn {
    border: 1px solid black;
  }
  
</style>