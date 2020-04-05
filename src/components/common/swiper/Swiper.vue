<template>
  <div class="swiper">
    <div class="left-icon">
      <img src="../../../assets/img/angle-left.svg" alt="">
    </div>
    <slot></slot>
    <div class="right-icon">
      <img src="../../../assets/img/angle-right.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper"
}
</script>

<style scoped>
.swiper {
  display: flex;
  justify-content: center;

}
  .left-icon {
    width: 40px;
    
    display: flex;  
    align-items: center;
  }
  .left-icon img {
    width: 100%;
  }
  .right-icon {
    width: 40px;
    
    display: flex;  
    align-items: center;
  }
  .right-icon img {
    width: 100%;
  }
</style>