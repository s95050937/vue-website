<template>
  <div class="banner">
    <img src="https://fakeimg.pl/1920x960/" alt="" class="pic">
    <div class="content">
      <h1>標題標題標題標題標題標題</h1>
      <p class="paragraph">內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner"
}
</script>

<style scoped>
  .banner {
    position: relative;
  }
  .pic {
    width: 100%;
    vertical-align: middle;
  }
  .content {
    position: absolute;
    bottom: 50%;
    left: 0;
    transform: translateY(50%);

    width: 70%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    text-align: center;

    background-color: rgba(236, 240, 241,0.75);

    
  }
  .paragraph {
    width: 40%;
    margin: 0 auto;
  }
</style>