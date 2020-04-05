<template>
<div class="section">
  <section-img class="pic"></section-img>
  <section-content ></section-content>
</div>
</template>

<script>
import SectionImg from './childcopms/SectionImg'
import SectionContent from './childcopms/SectionContent'
export default {
  name: "Section",
  components: {
    SectionImg,
    SectionContent
  }
} 
</script>

<style scoped>
  .section {
    display: flex;
  }
  
</style>