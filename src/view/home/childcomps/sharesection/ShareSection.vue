<template>
  <div>
    <swiper>
      <div class="content">
        <slot></slot>
      </div>
    </swiper>
    <div class="btnArea">
      <btn-more class="btn">看更多</btn-more>
    </div>
  </div>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper'
import Btn from 'components/common/btn/normal/Btn'
import BtnMore from '../../../../components/common/btn/more/More'

export default {
  name:　"ShareSection",
  components: {
    Swiper,
    Btn,
    BtnMore
  }
}
</script>

<style scoped>
  .content {
    width: 90%;

    display: flex;
    justify-content: space-between;
  }
  .btnArea {
    width: 100%;
    margin: 30px 0;

    display: flex;
    justify-content: center;
  }
  .btn {

    width: 15%;

    
  }
</style>