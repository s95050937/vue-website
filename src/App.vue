<template>
  <div id="app">
    <main-nav-bar></main-nav-bar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MainNavBar from './components/content/mainnavbar/MainNavBar'
export default {
  name: 'App',
  components: {
    MainNavBar
  }
}
</script>

<style>
  @import url("./assets/css/base.css");
</style>
