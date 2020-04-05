<template>
  <div class="footer">
    <h1>123123</h1>
    <!-- <slot></slot> -->
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    bgColor: {
      type: String,
      default() {
        return "blue"
      }
    }
  },
  computed: {
    // bgStyle() {
    //   return {background-color: this.bgColor}
    // }
  }
  
}
</script>

<style scoped>
</style>