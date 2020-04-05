<template>
  <ul class="section-1">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "Section1"
}
</script>

<style scoped>
  .section-1 {
    width: 200px;
    border-right: 1px solid #fff;

    display: flex;
    flex-direction: column;

    /* align-content: space-between; */
    justify-content: center;

    /* text-align: center; */
  }
</style>