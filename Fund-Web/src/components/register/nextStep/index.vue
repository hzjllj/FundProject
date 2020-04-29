<template>
  <div class="column">
    <div class="title-box row">
      <div class="back-img-box">
        <img
          src="../../../assets/login/icon_close_big@3x.png"
          class="back-img"
          @click="shutDownPage"
        />
      </div>
      <div class="title-text">注册 2/2</div>
    </div>
    <section class="body-box flex-1">
      <div class="input-item">
        <div class="input-item-password row">
          <input
            placeholder="设置6到18位由 英文、数字的组合密码"
            class="input-item-password-text"
            :type="passwordType1"
            v-model="password"
          />
          <img
            :src="eyesImg1"
            class="input-item-password-icon"
            @click="passwordEyes1 = !passwordEyes1"
          />
        </div>
        <div class="input-item-password row">
          <input
            placeholder="再次输入确认密码"
            class="input-item-password-text"
            :type="passwordType2"
            v-model="confirmPassword"
          />
          <img
            :src="eyesImg2"
            class="input-item-password-icon"
            @click="passwordEyes2 = !passwordEyes2"
          />
        </div>
        <div class="row protocol" @click="protocolImgButton">
          <div>
            <img :src="protocolImg" class="protocol-img" />
          </div>
          <div class="protocol-agree">本人已阅读，同意</div>
          <div class="protocol-name" @click="protocolButton">《德邦基金用户注册协议》</div>
        </div>
      </div>
      <div class="complete-register-box">
        <div :class="registerButtonClass" @click="completeRegister">完成注册</div>
      </div>
    </section>
    <div class="protocol-box"  v-show="ishiddenProtocol">
      <div class="protocol-content-box">
        <div class="protocol-head row">
          <div class="protocol-head-text">德邦基金用户注册协议</div>
          <div>
            <img src="../../../assets/login/icon_close_big@3x.png" class="protocol-close" @click="ishiddenProtocol = false"/>
          </div>
        </div>
        <div class="protocol-content-text">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      position: "",
      password: "",
      confirmPassword: "",
      passwordEyes1: true,
      passwordEyes2: true,
      protocolImg: require("../../../assets/login/icon_xuanz@3x.png"),
      protocolIsClick: false,
      isAgreeProtocol: false,
      ishiddenProtocol:false,
    };
  },
  methods: {
    //点击完成注册按钮后事件
    async completeRegister() {
      if (!this.$util.isPassword(this.password)) {
        this.$createToast({
          type: "text",
          txt: "请输入由6到18位由 英文、数字的组合密码",
          time: 2000
        }).show();
        return;
      }
      if (this.password !== this.confirmPassword) {
        this.$createToast({
          type: "text",
          txt: "请确认两次密码输入一致",
          time: 2000
        }).show();
        return;
      }
      if(this.isAgreeProtocol !== true){
        this.$createToast({
          type: "text",
          txt: "请同意《德邦基金用户注册协议》",
          time: 2000
        }).show();
        return;
      }
      try {
        let req = {
          username : sessionStorage.getItem('telNum'),
          password : this.password
        }
        let { data } = await this.$ajax.post(this.$urlMap.register,req);
        if (data.code !== "000") {
          this.$createToast({type: 'text', txt: '用户添加失败',time: 2000}).show()
          return
        }else{
              this.$router.push({ name: "login" });
        }
      } catch (err) {
        console.error(err);
      } 
    },
    //关闭页面
    shutDownPage() {
      this.$router.push({ name: "home" });
    },
     //通过点击单选框打开协议（可多次）
    protocolButton(){
      this.ishiddenProtocol = true
      window.event.stopPropagation()
      window.event.cancelBubble  = true
    },
    //通过点击单选框打开协议（只能一次）
    protocolImgButton() {
      this.isAgreeProtocol
        ? (this.protocolImg = require("../../../assets/login/icon_xuanz@3x.png"))
        : (this.protocolImg = require("../../../assets/login/icon_xuanz.png"));
        this.isAgreeProtocol = !this.isAgreeProtocol;
      if (this.protocolIsClick) {
        return;
      } else {
        this.ishiddenProtocol = true
        this.protocolIsClick = true;
      }
    }
  },
  computed: {
    passwordType1() {
      return this.passwordEyes1 ? "password" : "text";
    },
    passwordType2() {
      return this.passwordEyes2 ? "password" : "text";
    },
    eyesImg1() {
      return this.passwordEyes1
        ? require("../../../assets/login/icon_biyan2@3x.png")
        : require("../../../assets/login/openeye.png");
    },
    eyesImg2() {
      return this.passwordEyes2
        ? require("../../../assets/login/icon_biyan2@3x.png")
        : require("../../../assets/login/openeye.png");
    },
    registerButtonClass(){
      return (this.confirmPassword&&this.password)?'complete-register-button':'register-button'
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>