<template>
  <div class="page">
    <div class="head-box">
    </div>
    <div class="login-box">
      <div class="noLogin-box" v-if='!isLogin'>
        <div>您还没有登录交易，请点击下面按钮登录</div>
        <div
          class="login-button"
          @click="toUrl('login')"
        >登录</div>
        <div>没有证券账号？马上 <span
            class="kaihu"
            @click="toUrl('register')"
          >注册</span></div>
      </div>
      <div class="hasLogin-box" v-if="isLogin">
        <div class="safeout" @click="safeout">安全退出</div>
        <div class="userimg"></div>
        <div>欢迎您，{{this.username}}</div>
      </div>
    </div>

    <div class="body">
      <div class="body-bill-box">
        <div class="body-bill">2019年度账单...</div>
        <div class="body-newImg"></div>
      </div>
    </div>
    <div
      class="function-box"
      v-for="(item,index) in functionList"
      :key="index"
    >
      <div
        class="function-item"
        @click="toUrl(item.url)"
      >
        <div class="function-item-box">
          <div class="function-item-title">{{item.title}}</div>
          <div class="function-item-subtitle">{{item.subtitle}}</div>
        </div>
        <span class="function-item-img"></span>
      </div>
    </div>
    <div class="body-bill-box">
      <div class="body-bill">帮助设置</div>
      <div class="body-newImg"></div>
    </div>
    <div class="body-bill-box">
      <div class="body-bill">客服中心</div>
      <div class="body-newImg"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      functionList: [
        {
          title: "资讯中心",
          subtitle: "查看热点资讯",
          url: "information"
        },
        {
          title: "活动中心",
          subtitle: "折扣进行中"
        },
        {
          title: "财富日记",
          subtitle: "一览财富全景"
        },
        {
          title: "投诉建议",
          subtitle: "欢迎提供宝贵的建议"
        },
        {
          title: "常见问题",
          subtitle: "有不懂？快来了解吧"
        }
      ],
      username:'13112192418',
      id : ''
    };
  },
  mounted(){
    this.id = this.$g.id
  },
  computed:{
    isLogin(){
      return this.id?true:false
    }
  },
  methods: {
    register() { 
      this.$router.push({ name: "register" });
    },
    //url跳转
    toUrl(url) {
      this.$router.push({ name: url });
    },
    //安全退出事件，实际应该清除缓存和事件，但这里仅清除了用户id
    safeout(){
      this.$g.setID('')
      this.id = this.$g.id
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>