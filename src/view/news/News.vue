<template>
  <div>
    <video-section>
      <video-item></video-item>
      <video-item></video-item>
      <video-item></video-item>
      <video-item></video-item>
      <video-item></video-item>
      <video-item></video-item>
      <video-item></video-item>
      <video-item></video-item>
      <video-item></video-item>
      <video-item></video-item>
    </video-section>
    <video-nav class="video-nav"></video-nav>
    <main-footer></main-footer>
  </div>
</template>

<script>
import VideoSection from './childcomps/videosection/VideoSection'
import VideoItem from './childcomps/videosection/VideoItem'
import VideoNav from './childcomps/videonav/VideoNav'

import MainFooter from 'components/content/mainfooter/MainFooter'
export default {
  name: "News",
  components: {
    VideoSection,
    VideoItem,
    VideoNav,
    MainFooter
  }
}
</script>

<style scoped>
  .video-nav {
    margin-bottom: 50px;
  }
</style>