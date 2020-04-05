<template>
  <form action="#" >
    <h2>會員登入</h2>
    <input type="text" placeholder="會員帳號/電子郵件">
    <input type="password" placeholder="密碼">
    <btn type="submit" bgColor="black" class="Btn">會員登入</btn>
    <btn class="Btn" bgColor="blue">使用臉書登入</btn>
    <btn class="Btn" bgColor="blue">使用google登入</btn>
    <div class="checkArea">
      <label for="maintain-checked">
        <input type="checkbox" id="maintain-checked">保持登入
      </label>
      <label for="forget-checked">
        <input type="checkbox" id="forget-checked">忘記密碼?
      </label>
    </div>
    <btn bgColor="black" class="Btn">註冊</btn>
  </form>
</template>

<script>
import Btn from 'components/common/btn/normal/Btn'
export default {
  name: "MainContent",
  components: {
    Btn
  }

}
</script>

<style scoped>

</style>