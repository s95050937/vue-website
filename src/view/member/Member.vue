<template>
  <div id="member">
    <main-content class="main-content"></main-content>
  </div>
</template>

<script>
import MainContent from './childcomps/maincontent/MainContent'
import MainFooter from '../../components/content/mainfooter/MainFooter'
export default {
  name: "Member",
  components: {
    MainContent,
    MainFooter,
  }
}
</script>

<style scoped>
  .main-content {
    width: 50%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
  }
</style>