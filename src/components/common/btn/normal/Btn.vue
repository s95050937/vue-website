<template>
  <button class="Btn" :style="{backgroundColor: bgColor,color: color}">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Btn",
  props: {
    bgColor: {
      type: String,
      default() {
        return "#fff"
      }
    },
    color: {
      type: String,
      default() {
        return "#fff"
      }
    }
  },

}
</script>

<style scoped>
  .Btn {
    border: none;
    border-radius: 3px;
    padding: 10px 5px;
  }
  .Btn:hover {
    cursor: pointer;
  }
  .Btn {
    outline: none;
  }
</style>