<template>
  <div class="column">
    <div class="title-box row">
      <img
        src="../../assets/login/icon_close_big@3x.png"
        class="shutDown-img"
        @click="shutDownPage"
      />
      <span class="title-text">登陆</span>
    </div>
    <div class="notice-box">
      <div class="notice-icon-box row">
        <img src="../../assets/login/icon_tonz@3x.png" class="notice-icon" />
        <div class="notice-line"></div>
        <div class="notice-text">XX银行卡实行……</div>
      </div>
    </div>
    <section class="body-box">
      <div class="logo-box">
        <img src="../../assets/login/logo@3x.png" class="logo-img" />
      </div>

      <div class="login-box column">
        <div class="flex-1 row login-item">
          <input placeholder="手机号/身份证号/基金账号" class="login-input" type="text" v-model="username" />
          <img src="../../assets/login/icon_arow_down@3x.png" class="password-img" />
        </div>
        <div class="flex-1 row login-item">
          <input
            placeholder="请输入6到18位由 英文、数字的组合密码"
            class="login-input"
            :type="passwordType"
            v-model="password"
          />
          <img
            :src="eyesImg"
            class="password-img"
            @click="passwordEyes=!passwordEyes"
          />
        </div>
        <div class="flex-1 row remainUser-box">
          <img src="../../assets/login/icon_xuanz.png" class="remainUser-checkbox" />
          <div class="remain-text">记住账号</div>
          <div class="remain-text forget-password">忘记密码?</div>
        </div>
        <div class="flex-1 login-button-box">
          <div :class="loginButtonClass" @click="loginButton">
            <!-- <div class="login-button-text">立即登陆</div> -->
            <div>立即登陆</div>
          </div>
        </div>
        <div class="flex-1 register-button-box">
          <div class="register-button">
            <div class="register-button-text" @click="register">10秒快速注册</div>
          </div>
        </div>
      </div>
      <div class="cooperation-box">
        <div class="cooperation-text">合作渠道登录</div>
        <ul class="row cooperation-item">
          <li class="flex-1 column" v-for="(item, index) in cooperationItem" :key="index">
            <div>
              <img class="cooperation-item-icon" :src="item.icon" />
            </div>
            <div class="cooperation-item-name">{{item.name}}</div>
          </li>
        </ul>
      </div>
    </section>
    <footer class="footer-box">
      <div class="other-login row">
        <div class="line"></div>
        <div class="other-login-text">其他登陆方式</div>
        <div class="line"></div>
      </div>
      <div class="other-login-icon row">
        <div>
          <img class="other-login-icon-weixin" src="../../assets/login/icon_weixin@2x.png" />
        </div>
        <div>
          <img class="other-login-icon-qq" src="../../assets/login/icon_qq@2x.png" />
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cooperationItem: [
        {
          name: "蚂蚁财富",
          icon: require("../../assets/login/icon1.png")
        },
        {
          name: "天天基金",
          icon: require("../../assets/login/icon2.png")
        },
        {
          name: "民生直销",
          icon: require("../../assets/login/icon3.png")
        },
        {
          name: "银行",
          icon: require("../../assets/login/icon4.png")
        },
        {
          name: "券商",
          icon: require("../../assets/login/icon5.png")
        },
        {
          name: "其他",
          icon: require("../../assets/login/icon6.png")
        }
      ],
      passwordIshindden: true,
      password: "",
      username: "",
      passwordEyes:true
    };
  },
  methods: {
    //跳转注册按钮
    register() {
      this.$router.push({ name: "register" });
    },

    //用户登陆验证
    async loginButton() {
      try {
        let req = {
          username:this.username,
          password:this.password
        }
        let { data } = await this.$ajax.post(this.$urlMap.login,req);
        if (data.code !== '000') {
          this.$createToast({
              type: "text",
              txt: "账号或者密码错误",
              time: 2000
            }).show();
        } else {
          //全局id,用户的身份标识
            this.$g.setID(data.id)
            this.$router.push({ name: "home" });
        }
      } catch (e) {
        console.log(e);
      }
    },

  
    //关闭页面，跳转至‘首页’页面
    shutDownPage() {
      this.$router.push({ name: "home" });
    }
  },
  computed:{
      //点击眼睛图标查看密码
    eyesImg() {
      return this.passwordEyes
        ? require("../../assets/login/icon_biyan2@3x.png")
        : require("../../assets/login/openeye.png");
    },
    passwordType(){
      return this.passwordEyes
        ? 'password'
        : 'text';
    },
    loginButtonClass(){
      return this.password?'login-button':'ready-login-button'
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>