<template>
  <div class="final">
    <div class="wrapper">
      <div class="section">
        <h1>商品總計</h1>
        <h1>NT$0000</h1>
      </div>
      <div class="section">
        <h1>共xx件 總金額</h1>
        <h1>NT$0000</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .final {
    width: 85%;
    margin: 0 auto;

    background-color: #ddd;
  }
  .wrapper {
    width: 87%;
    margin: 0 auto;

  }
  .section {
    display: flex;
    justify-content: space-between;
  }
</style>