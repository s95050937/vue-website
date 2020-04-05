<template>
  <div class="section-2">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Section2"
}
</script>

<style scoped>
  .section-2 {
    width: 560px;
    border-right: 1px solid #fff;
    align-content: center;

    display: flex;
    flex-direction: column;
  }
</style>