<template>
  <div class="video-nav">
    <btn class="btn"></btn>
    <btn class="btn"></btn>
    <ul class="page-nav">
      <!-- <li>1</li>
      <li>2</li>
      <li>...</li>
      <li>20</li>
      <li>21</li> -->
      <li><span>1</span></li>
      <li><span>2</span></li>
      <li><span>...</span></li>
      <li><span>20</span></li>
      <li><span>21</span></li>
    </ul>
    <btn class="btn"></btn>
    <btn class="btn"></btn>
  </div>
</template>

<script>
import Btn from 'components/common/btn/normal/Btn'
export default {
  name: "VideoNav",
  components: {
    Btn
  }
}
</script>

<style scoped>
  .video-nav {
    display: flex;
    justify-content: center;
    width: 40%;
    margin: 0 auto;
  }
  .page-nav {
    display: flex;
    flex: 6;
  }
  .page-nav li {

    width: 60%;
    text-align: center;
    
    /* line-height: 40px; */
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .page-nav span {
    /* margin-top: auto ; */
    display: block;
    margin: auto;
  }
  .btn {
    /* width: 10%; */
    /* height: 55px; */
    /* padding: 5%; */
    margin: 0 3px;
    border: 1px solid black;
    /* flex: 1; */
    width: 40px;
    height: 40px;
    padding: 0;
  }
</style>