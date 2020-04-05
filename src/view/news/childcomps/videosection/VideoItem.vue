<template>
  <div class="video-item">
    <h1 class="title">標題標題標題</h1>
    <img src="https://fakeimg.pl/960x540/" alt="" class="pic">
    <div class="content">
      <h3>內文內文內文內文內文</h3>
      <p>內文內文內文內文內文</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "VideoItem",

}
</script>

<style scoped>
  .title {
    text-align: center;

    margin: 30px 0;
  }
  .video-item {
    width: 48%;

    margin: 25px 0;
  }
  .pic {
    width: 100%;
    vertical-align: middle;
  }
  .content {
    display: flex;
    flex-direction: column;
    text-align: center;

    padding: 50px 0;
  }
</style>