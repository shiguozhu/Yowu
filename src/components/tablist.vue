<template>
  <div class="tab">
    <div @click="toTab(1)">
      <i></i>Yo推
    </div>
    <div @click="toTab(2)">
      <i></i>广场
    </div>
    <div @click="toTab(3)">
      <i></i>发布
    </div>
    <div @click="toTab(4)">
      <i></i>寻宝
    </div>
    <div @click="toTab(5)">
      <i></i>我的
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toTab (type) {
      if (+type === 1) {
        this.$router.push('/home')
      }
      if (+type === 2) {
        this.$router.push('/square')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.tab {
  width: 100%;
  height: 50px;
  background: #ffd84d;
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: 10;

  >div {
    width: 20%;
    float: left;
    font-size: 14px;
    color: #fff;

    i {
      display: block;
      width: auto;
      height: 28px;
      margin-top: 3px;
      margin-bottom: 3px;
      background: url('./../../static/img/gntj.svg');
      background-size: 100% 100%;
    }
  }

  >div:nth-of-type(2) {
    i {
      background: url('./../../static/img/quanzhi.svg');
      background-size: 100% 100%;
    }
  }

  >div:nth-of-type(4) {
    i {
      background: url('./../../static/img/sousuo.svg');
      background-size: 100% 100%;
    }
  }

  >div:nth-of-type(5) {
    i {
      background: url('./../../static/img/wode.svg');
      background-size: 100% 100%;
    }
  }
}
</style>
