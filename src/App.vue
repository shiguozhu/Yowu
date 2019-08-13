<template>
  <div id="app">
    <navcount v-if="$store.state.nav"></navcount>
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <tabcount  v-if="$store.state.tab"></tabcount>
  </div>
</template>

<script>
import navcount from './components/header'
import tabcount from './components/tablist'
export default {
  name: 'App',
  data () {
    return {
      transitionName: ''
    }
  },
  components: {
    navcount,
    tabcount
  },
  watch: {
    // 使用watch 监听$router的变化
    $route (to, from) {
      // 如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        // 设置动画名称
        this.transitionName = 'slide-left'
      } else if (to.meta.index < from.meta.index) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = ''
      }
    }
  }
}
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  letter-spacing: 1px;
}
input,
textarea,
select,
a:focus {
  outline: none;
}
#app {
  height: 100%;
  background: #eee;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  /* 启用硬件加速 */
  will-change: transform;
  transition: all 300ms;
  position: fixed;
}
.slide-right-enter {
  opacity: 0;
  transform: translate(-100%, 0);
  transition-timing-function: ease-in;
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate(100%, 0);
  transition-timing-function: cubic-bezier(0.5, 0, 1, 1);
}
.slide-left-enter {
  opacity: 0;
  transform: translate(100%, 0);
  transition-timing-function: ease-in;
}
.slide-left-leave-active {
  opacity: 0;
  transition-timing-function: cubic-bezier(0.5, 0, 1, 1);
  transform: translate(-100%, 0);
}
</style>
