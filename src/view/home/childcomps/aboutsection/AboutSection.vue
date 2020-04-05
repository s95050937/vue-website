<template>
  <div class="about-section">
    <div class="text">
      <div class="content">
        <h1>標題標題標題</h1>
        <p>內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文</p>
        <btn-more class="btn-more"></btn-more>
      </div>
    </div>
    <div class="pic">
      <img src="https://fakeimg.pl/1150x1150/" alt="">
    </div>
  </div>
</template>

<script>
import btnMore from 'components/common/btn/more/More'
export default {
  name: "AboutSection",
  components: {
    btnMore
  }
}
</script>

<style scoped>
  .about-section {
    display: flex;
  }
  .text {
    flex: 1;

    display: flex;
    justify-content: center;
    align-content: center;
  }
  .content {
    width: 80%;
    text-align: center;
    /* height: 300px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .pic {
    width: 50%;
  }
  .pic img {
    width: 100%;
    vertical-align: middle;
  }
  .btn-more {
    width: 30%;
    
  }
</style>