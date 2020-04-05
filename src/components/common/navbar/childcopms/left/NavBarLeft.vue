<template>
  <div class="nav-bar-left">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "NavLeftBar"
}
</script>

<style scoped>
  .nav-bar-left {
    display: flex;
    align-content: center;

    text-align: center;

  }
</style>