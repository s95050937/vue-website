<template>
  <div class="shop-section">
    <swiper class="swiper">
      <div class="content">
        <div class="left">
          
        </div>
        <div class="img">
          <img src="https://fakeimg.pl/900x900/" alt="">
        </div>
        <div></div>
      </div>
    </swiper>
  </div>  
</template>

<script>
import Swiper from 'components/common/swiper/Swiper'


export default {
  name: "ShopSection",
  components: {
    Swiper
  }
}
</script>

<style scoped>
  
  .swiper {
    width: 100%;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left {
    width: 55%;
    padding: 30%;
  }
  .img {
    width: 45%;

    position: absolute;
    top: 0;
    right: 0;

    z-index: -1;
  }
  .img img {
    width: 100%;
    vertical-align: middle;
  }
  .content {
    width: 90%;
  }
  /* .content img {
    position: absolute;
    right: 0;

  } */

</style>