<template>
  <div class="content">
    <div class="main">
      <h1>標題標題</h1>
      <p>內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScetionContent"
}
</script>

<style scoped>
  .content {
    flex: 1;

    display: flex;
  }
  .main {
    width: 80%;
    margin: 0 auto;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-content: flex-start; */
    /* text-align: right; */
  }


</style>