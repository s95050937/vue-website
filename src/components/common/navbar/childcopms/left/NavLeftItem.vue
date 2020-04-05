<template>
  <h1 class="nav-bar-item" @click="itemClick">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: "NavBarItem",
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch(err => {
      })
    }
  },
  props: {
    path: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>

<style scoped>
  .nav-bar-item {
    flex: 1;

    font-size: 1.5rem;
    font-weight: 500;

    line-height: 40px;
  }
  .nav-bar-item:hover {
    cursor: pointer;
  }
</style>