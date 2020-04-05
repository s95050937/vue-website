<template>
  <div class="article-item">
    <img src="https://fakeimg.pl/920x510/" alt="" class="pic">
    <div class="content">
      <div class="main">
        <h2>文章分類</h2>
        <h1>標題標題標題標題</h1>
        <h1>標題標題標題標題</h1>
        <p>by 喜之丹編輯部 - 0000/00/00 000</p>
      </div>
      <h2 class="continue">繼續閱讀---------></h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleList"
}
</script>

<style scoped>
  .article-item {
    width: 100%;
    display: flex;

    margin: 50px auto;
  }
  .pic {
    width: 52%;
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .main {
    width: 65%;
    margin-left: 50px;
  }
  .continue {
    margin: auto 0 20px 0;
    text-align: right;
  }
</style>