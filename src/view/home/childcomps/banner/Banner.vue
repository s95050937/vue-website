<template>
  <div class="background">
    <img src="https://fakeimg.pl/1920x960/" class="img">
    <div class="content">
      <div class="main">
        <h1>標題標題標題標題</h1>
        <p>內文內文內文內文內文內文內文內文內文內文內文內文內文</p>
      </div>
      <div class="guide-btn">
        <div class="guide-btn-item"></div>
        <div class="guide-btn-item"></div>
        <div class="guide-btn-item"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner"
}
</script>
  
<style scoped>
  .background {
    /* width: 100%; */
    /* height: 900px; */
    /* background: url("https://fakeimg.pl/1920x960/"); */
    /* background-image: url("https://fakeimg.pl/1920x960/");
    background-size: cover ;
    background-repeat: no-repeat; */
    position: relative;
  }
  .img {
    width: 100%;
    vertical-align: middle;
  }
  .content {
    /* width: 100%; */

    display: flex;
    flex-direction: column;
    /* align-items: flex-end; */

    position: absolute;
    top: 0;
    left: 0;
  }
  .main {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .guide-btn {
    display: flex;
    justify-content: center;
  }
  .guide-btn-item {
    width: 15px ;
    height: 15px ;
    border-radius: 50%;
    background-color: #ddd;
    background-color: black;
  }
</style>