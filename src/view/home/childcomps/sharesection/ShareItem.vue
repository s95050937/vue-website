<template>
  <div class="share-item">
    <img src="https://fakeimg.pl/500x300/" alt="" class="pic">
    <div class="content">
      <div>
        <h2>標題標題標題</h2>
        <h1>標題標題標題</h1>
      </div>
      <btn color="black" class="btn">看更多</btn>
    </div>
  </div>
</template>

<script>
import Btn from 'components/common/btn/normal/Btn'
export default {
  name: "ShareItem",
  components: {
    Btn
  }
}
</script>

<style scoped>
  .share-item {
    width: 30%;

    position: relative;
  }
  .pic {
    width: 100%;
    vertical-align: middle;
  }
  .content {
    width: 100%;
    height: 75%;

    position: absolute;
    bottom: 0;

    background-color: rgba(236, 240, 241, 0.288);

    display: flex;
    flex-direction: column;
  }
  .btn {
    width: 40%;
    margin: 0 auto;

    border: 1px solid black;
    background-color: rgba(236, 240, 241, 0);
    /* opacity: 0; */
  }
</style>