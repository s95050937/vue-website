<template>
  <div class="banner">
    <h1 class="title">美麗分享 文章列表</h1>
    <div class="container">
      <img src="https://fakeimg.pl/1140x635/" alt="" class="pic">
      <div class="tag">

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
  .title {
    text-align: center;
  }
  .container {
    width: 100%;
    position: relative;

    display: flex;
  }
  .pic {
    width: 80%;
    margin: 0 auto;

    vertical-align: middle;
  }
  .tag {
    width: 70px ;
    height: 251px ;
    background-color: red;

    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    
  }
</style>