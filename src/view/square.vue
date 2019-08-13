<template>
  <cube-page type="tab-composite-view" title="tab-composite">
    <div class="content" slot="content">
      <cube-tab-bar
        v-model="selectedLabel"
        show-slider
        :use-transition="disabled"
        ref="tabNav"
        :data="tabLabels"
      ></cube-tab-bar>
      <div class="tab-slide-container">
        <cube-slide
          ref="slide"
          :loop="loop"
          :initial-index="initialIndex"
          :auto-play="autoPlay"
          :show-dots="showDots"
          :options="slideOptions"
          @scroll="scroll"
          @change="changePage"
        >
          <!-- 关注 -->
          <cube-slide-item>
            <cube-scroll :data="followersData" :options="scrollOptions">
              <ul class="list-wrapper">
                <li class="list-item">
                  <div class="top"></div>
                  <div class="middle">
                    <p class="name">名字</p>
                    <p class="xiang">
                      <span>期望交换：</span>
                      微单摄像机
                    </p>
                    <p class="text">本人想交换一台微单摄像机不用太好，七八成新就好。可以直接买。</p>
                    <div class="image">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                  </div>
                </li>
                <li class="list-item">
                  <div class="top"></div>
                  <div class="middle">
                    <p class="name">名字</p>
                    <p class="xiang">
                      <span>期望交换：</span>
                      微单摄像机
                    </p>
                    <p class="text">本人想交换一台微单摄像机不用太好，七八成新就好。可以直接买。</p>
                    <div class="image">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                  </div>
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
          <!-- 推荐 -->
          <cube-slide-item>
            <cube-scroll :data="recommendData" :options="scrollOptions">
              <ul class="list-wrapper">
                <li class="list-item">
                  <div class="top">
                    <span class="time">1025</span>
                  </div>
                  <div class="middle is-bold line-height">1010</div>
                  <div>1011</div>
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
          <cube-slide-item>
            <cube-scroll :data="hotData" :options="scrollOptions">
              <ul class="list-wrapper">
                <li class="list-item">
                  <div class="top">
                    <span class="time">1025</span>
                  </div>
                  <div class="middle is-bold line-height">1010</div>
                  <div>1011</div>
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
        </cube-slide>
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      selectedLabel: '推荐',
      disabled: false,
      tabLabels: [
        {
          label: '关注'
        },
        {
          label: '推荐'
        },
        {
          label: '热榜'
        }
      ],
      loop: false,
      autoPlay: false,
      showDots: false,
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        directionLockThreshold: 0
      },
      scrollOptions: {
        directionLockThreshold: 0
      }
    }
  },
  methods: {
    changePage (current) {
      this.selectedLabel = this.tabLabels[current].label
      console.log(current)
    },
    scroll (pos) {
      const x = Math.abs(pos.x)
      const tabItemWidth = this.$refs.tabNav.$el.clientWidth
      const slideScrollerWidth = this.$refs.slide.slide.scrollerWidth
      const deltaX = (x / slideScrollerWidth) * tabItemWidth
      this.$refs.tabNav.setSliderTransform(deltaX)
    },
    resolveTitle (item) {
      return `${item.name}关注了问题 · ${item.postTime} 小时前`
    },
    resolveQuestionFollowers (item) {
      return `${item.answers} 赞同 · ${item.followers} 评论`
    }
  },
  computed: {
    initialIndex () {
      let index = 0
      //   index = findIndex(
      //     this.tabLabels,
      //     item => item.label === this.selectedLabel
      //   )
      return index
    }
  },
  components: {}
}
</script>
<style lang="stylus">
/* 覆盖样式 */
.cube-page {
  &.tab-composite-view {
    .content {
      background: #fff;
    }

    > .wrapper {
      > .content {
        margin: 0;
        background: #fff;
      }
    }
  }
}

.content {
  margin: 0;
  background: #fff;
}

.cube-tab {
  >div {
    font-size: 16px;
  }
}

.tab-composite-view {
  .cube-tab-bar {
    background-color: white;
  }

  .cube-tab, .cube-tab_active {
    color: black;
  }

  .cube-tab-bar-slider {
    background-color: black;
  }

  .tab-slide-container {
    position: fixed;
    top: 74px;
    left: 0;
    right: 0;
    bottom: 0;
  }
}

.list-wrapper {
  overflow: hidden;
  width: 100%;
  padding: 10px;

  li {
    text-align: left;
    margin-bottom 20px;
    background-color: white;
    font-size: 14px;
    color: #999;
    white-space: normal;
    display: flex;

    .line-height {
      line-height: 1.5;
    }

    .is-black {
      color: black;
    }

    .is-grey {
      color: #999;
    }

    .is-bold {
      font-weight: bold;
    }

    .top {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #666;
    }

    .middle {
      width: calc(100% - 50px);
      margin-top: 5px;
      color: #777;
      padding-left: 10px;

      .name {
        font-size: 16px;
      }

      .xiang {
        font-size: 14px;
        color: #555;
        margin-top: 8px;

        span {
          color: #ffd84d;
        }
      }

      .text {
        width: 100%;
        margin-top: 5px;
        color: #333;
        font-size: 14px;
        line-height: 20px;
        text-align: justify;
      }
      .image{
          width 100%
          margin-top 5px;
          display flex;
          justify-content: space-between;
          >div{
            width 32%;
            padding-bottom 33%;
            background #888;
            border-radius 5px;
          }
      }
    }

    .hot-title {
      display: flex;
      align-items: center;
      font-size: 12px;

      .hot-sequence {
        display: inline-block;
        margin-right: 2px;
        padding: 3px 6px;
        border-radius: 2px;
        background-color: darkgoldenrod;
        color: white;
      }
    }

    .hot-content {
      margin-top: 15px;
    }
  }
}
</style>
