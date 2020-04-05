<template>
  <div class="news-section">
    <div class="title">
      <h1>標題標題標題</h1>
    </div>
    <div class="left">
      <img src="https://fakeimg.pl/965x540/" alt="">
      <div class="content">
        <h1>內文內文內文內文內文內文</h1>
        <p>內文內文內文內文內文內文</p>
      </div>
    </div>
    <div class="right">
      <img src="https://fakeimg.pl/965x540/" alt="">
      <div class="content">
        <h1>內文內文內文內文內文內文</h1>
        <p>內文內文內文內文內文內文</p>
      </div>
    </div>
    <div class="btn-area">
      <btn-more class="btn-more "></btn-more>
    </div>
  </div>
</template>

<script>
import btnMore from 'components/common/btn/more/More'

export default {
  name: "NewsSection",
  components: {
    btnMore
  }
}
</script>

<style scoped>
  .title {
    width: 100%;

  }
  .title h1 {
    text-align: center;
  }
  .news-section {
    display: flex;
    flex-wrap: wrap;
  }
  .left,
  .right {
    width: 50%;
  }
  .left img,
  .right img {
    width: 100%;
    vertical-align: middle;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    text-align: center;
  }
  .btn-area {
    width: 100%;

    display: flex;
    justify-content: center;
  }

  .btn-more {
    width: 30%;
  }
</style>