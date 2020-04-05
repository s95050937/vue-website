<template>
  <div class="main-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MainContent",

}
</script>

<style scoped>
  .main-content {
    width: 80%;
    margin: 0 auto;

    padding: 40px 0 20px 0;
    border-bottom: 1px solid white;

    display: flex;
    /* flex-direction: ; */
  }
</style>