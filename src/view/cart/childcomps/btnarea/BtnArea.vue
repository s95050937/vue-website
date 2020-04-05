<template>
  <div class="btn-area">
    <btn bgColor="black" class="btn">已是會員一鍵登入</btn>
    <btn bgColor="red" class="btn">非會員付款填資料</btn>
  </div>
</template>

<script>
import Btn from 'components/common/btn/normal/Btn'
export default {
  name: "BtnArea",
  components: {
    Btn
  }
}
</script>

<style scoped>
  .btn-area {
    width: 85%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
  }
  .btn {
    width: 47%;
  }
</style>