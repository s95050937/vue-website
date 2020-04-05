<template>
  <div class="video-section">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VideoSection"
}
</script>

<style scoped>
  .video-section {
    width: 90%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>