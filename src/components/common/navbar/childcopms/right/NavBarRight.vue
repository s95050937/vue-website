<template>
  <div class="nav-bar-right">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "NavBarRight"
}
</script>

<style scoped>
  .nav-bar-right {
    display: flex;
  }
</style>