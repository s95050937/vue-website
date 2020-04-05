<template>
  <div class="nav-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "NavBar",
}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    align-content: center;

    text-align: center;

  }
</style>