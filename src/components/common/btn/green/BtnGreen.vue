<template>
  <button class="more"><slot></slot></button>
</template>

<script>
export default {
  name: "btnMore"
}
</script>

<style scoped>
  .more {
    background-color: rgb(48, 182, 92);
    color: #fff;
    border: none;
    border-radius: 3px;
    padding: 10px 5px;
  }
</style>