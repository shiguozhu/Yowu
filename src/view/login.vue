<template>
  <div class="main">
    <div class="heard">
      <div>
        <img src="./../../static/img/left(3).svg" alt />
      </div>
    </div>
    <div class="logo">
      <img src="./../../static/img/logo.png" alt />
    </div>
    <div class="name">
      <p class="title">Yo 物</p>
      <p class="txt">- 专注品质绿色生活 -</p>
    </div>
    <div class="input">
      <div class="accounts">
        <input v-model="username" type="text" placeholder="手机号/用户名/邮箱" @input="enter"/>
      </div>
      <div class="password">
        <input v-model="pasword" type="password" placeholder="请输入密码" @input="enter"/>
      </div>
      <p><span @click="pageJump(1)">快速注册</span><span @click="pageJump(2)">忘记密码</span></p>
    </div>
    <div class="tologo" :class="type? 'active':''" @click="tologo($event)">
      <span :class="type? 'span-c':''">Go</span>
      <img v-show="!type" src="./../../static/img/xiao.svg" alt />
    </div>
    <!-- 第三方 -->
    <div class="third-part">
      <div>- 其他登录方式 -</div>
      <div>
        <img src="./../../static/img/rlsb.svg" alt />
        <img src="./../../static/img/zw.svg" alt />
      </div>
      <div>
        <span>人脸识别</span>
        <span>指纹认证</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: false,
      pasword: null,
      username: null
    }
  },
  methods: {
    pageJump (num) {
      if (num === 1) {
        this.$router.push('/registered')
      }
    },
    enter () {
      if (this.username !== null && this.username !== '' && this.pasword !== null && this.pasword !== '') {
        this.type = true
      } else {
        this.type = false
      }
    },
    tologo (e) {
      if (this.username === '' || this.username == null) {
        window.$utils.msg.warn('手机号码不能为空')
        return false
      } else {
        if (!(/^1[3456789]\d{9}$/.test(this.username))) {
          console.log(this.username)
          window.$utils.msg.warn('手机号码格式不正确')
          return false
        }
      }
      if (this.pasword === '' || this.pasword == null) {
        window.$utils.msg.warn('请输入密码')
        return false
      }
      var postData = {
        userName: this.username,
        userPwd: this.$md5(this.pasword)
      }
      window.$api.login.userLogin(postData).then(() => {
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.main {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: linear-gradient(to bottom right, #ffffff, #f7fcfe);

  .heard {
    width: 100%;
    height: 44px;

    div {
      width: 44px;
      height: 44px;
      line-height: 54px;
      float: left;

      img {
        width: 20px;
      }
    }
  }

  .logo {
    width: 100%;
    padding-top: 50px;

    img {
      width: 26%;
    }
  }

  .name {
    margin-top: 20px;
    margin-bottom: 20px;

    .title {
      font-size: 22px;
      color: #161823;
    }

    .txt {
      margin-top: 10px;
      font-size: 13px;
      color: #808080;
    }
  }

  .input {
    width: 100%;
    padding: 20px;
    padding-bottom: 10px;
    > p{
        width 80%;
        margin auto;
        padding-right 10px;
        text-align right;
        font-size 12px;
        color #808080;
        span {
            margin 0 2px;
        }
    }
    div {
      width: 80%;
      margin: auto;
      height: 44px;
      border-radius: 44px;
      border: 1px solid #50616d;
      margin-bottom: 10px;

      input {
        width: 100%;
        height: 100%;
        font-size: 16px;
        border: none;
        padding: 0 20px;
        background: none;
        color: #161823;
        letter-spacing: 1px;
      }

      input::-webkit-input-placeholder {
        color: #758a99;
        font-size: 13px;
      }
    }
  }

  .tologo {
    width: 44px;
    height: 44px;
    margin: auto;
    margin-top 50px;
    border-radius: 50%;
    background: #fff143;
    transition: 0.5s;
    padding: 1px;

    img {
      width: 42px;
      height: 42px;
      transition: 0.5s;
    }

    span {
      display: none;
      font-size: 18;
      color: #161823;
      line-height: 44px;
      opacity: 0;
      transition: 0.3s;
    }

    .span-c {
      display: block;
      opacity: 1;
    }
  }

  .third-part {
    width: 100%;
    padding: 20px;
    margin-top 30px;
    div:nth-of-type(1) {
      font-size: 14px;
      color: #808080;
    }

    div:nth-of-type(2) {
      margin-top: 20px;

      img {
        width: 50px;
        margin 0 6px;
      }
    }

    div:nth-of-type(3) {
      span {
        display: inline-block;
        font-size: 14px;
        color: #808080;
      }
    }
  }

  .active {
    width: calc(80% - 30px);
    border-radius: 44px;
  }
}
</style>
