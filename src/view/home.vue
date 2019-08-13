<template>
  <div class="main">
    <div class="banner">
      <cube-slide ref="slide" :data="items" @change="changePage">
        <cube-slide-item
          v-for="(item, index) in items"
          :key="index"
          @click.native="clickHandler(item, index)"
        >
          <a :href="item.url">
            <img :src="item.image" />
          </a>
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          url: '#',
          image:
            'https://image.suning.cn/uimg/aps/material/156464961996081734.jpg'
        },
        {
          url: '#',
          image: 'https://image4.suning.cn/uimg/cms/img/156472579376734525.jpg'
        },
        {
          url: '#',
          image:
            'https://image.suning.cn/uimg/aps/material/156500501491347397.jpg'
        }
      ]
    }
  },
  methods: {

    changePage (current) {
      console.log('当前轮播图序号为:' + current)
    },
    clickHandler (item, index) {
      console.log(item, index)
    }
  }
}
</script>

<style lang="stylus" scoped>
.main {
  width: 100%;
  padding-top 44px;
  padding-bottom 50px;
  height: 100%;
  background: #fff;
  position: absolute;
  top: 0;
  bottom: 0;

  .header {
    width: 100%;
    height: 44px;
    background: #ffd84d;

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

  .banner {
    img {
      width: 100%;
    }
  }
}
</style>
