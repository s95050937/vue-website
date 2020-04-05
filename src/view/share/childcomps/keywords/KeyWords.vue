<template>
  <div class="key-words">
    <h1>熱門關鍵字</h1>
    <btn class="btn" color="black">關鍵字</btn>
    <btn class="btn" color="black">關鍵字</btn>
    <btn class="btn" color="black">關鍵字</btn>
    <btn class="btn" color="black">關鍵字</btn>
  </div>
</template>

<script>
import Btn from 'components/common/btn/normal/Btn'
export default {
  name: "KeyWords",
  components: {
    Btn
  }
}
</script>

<style scoped>
  .key-words {
    width: 100%;

    display: flex;
    justify-content: center;
  }
  .btn {
    border: 1px solid black;
    border-radius: 3px;

    width: 12%;
  }
</style>