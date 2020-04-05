<template>
  <div>
    <div class="pic">
      <img src="https://fakeimg.pl/500x500/" alt="">
    </div>
    <div class="text">
      <h1 class="title">標題標題標題標題標題</h1>
      <p class="content">內文內文內文內文內文內文內文內文內文內文內文內文內文內文</p>
      <div class="btn-area">
        <btn-green class="btn">加入購物車</btn-green>
        <btn-green class="btn">立即購物</btn-green>
      </div>
    </div>
  </div>
</template>

<script>
import BtnGreen from 'components/common/btn/green/BtnGreen'
export default {
  name: "GoodsItem",
  components: {
    BtnGreen
  }
}
</script>

<style scoped>
  .pic {
    width: 100%;
  }
  .pic img {
    width: 100%;
  }
  .text {
    display: flex;
    flex-direction: column;

    align-content: center;
    justify-content: center;
    text-align: center;
  }
  .title {
    width: 80%;
    margin: 0 auto;
  }
  .content {
    width: 60%;
    margin: 0 auto;

  }
  .btn-area {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .btn-area .btn {
    width: 45%;
  }
</style>