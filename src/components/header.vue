<template>
  <div class="header">
    <div class="back">
      <img src="./../../static/img/left(2).svg" alt />
    </div>
    <div class="title">Yo 推</div>
  </div>
</template>

<script>
export default {
  name: 'navCount',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="stylus" scoped>
.header {
  width: 100%;
  height: 44px;
  background: #ffd84d;
  position relative;
  z-index 10
  .back {
    width: 44px;
    height: 44px;
    line-height: 54px;
    float: left;

    img {
      width: 20px;
    }
  }

  .title {
    width: 50%;
    height: 44px;
    line-height: 44px;
    font-size: 18px;
    margin: auto;
    color: #fff;
  }
}
</style>
