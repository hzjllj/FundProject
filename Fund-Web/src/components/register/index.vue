<template>
  <div class="column">
    <div class="title-box row">
      <div class="back-img-box">
        <img
          src="../../assets/login/icon_close_big@3x.png"
          class="back-img"
          @click="shutDownPage"
        />
      </div>
      <div class="title-text">注册 1/2</div>
    </div>
    <section class="body-box">
      <div class="input-box">
        <div class="input-remind" v-show="numMessage">请输入手机号</div>
        <input
          placeholder="请输入手机号"
          class="number-input"
          v-model="numMessage"
        />
        <div class="sentNum" v-show="numMessage" @click="sentNum">
          {{ beSentIsHidden ? "发送验证码" : sentTimeDowm + "s" }}
        </div>
      </div>
      <div class="verification-box">
        <div class="expandNum" v-show="numMessage && beSentIsHidden">
          {{ this.numMessage }}
        </div>
        <div v-show="!beSentIsHidden" class="beSent">
          <div class="beSent-num">{{ telNum }}</div>
          <div class="beSent-text">请输入短信验证码</div>
          <div class="beSent-input-box row">
            <div v-for="index in 6" :key="index" class="beSent-input">
              {{ beSentMsg[index - 1] }}
            </div>
          </div>
          <input class="hidden-input" v-model="beSentMsg" />
        </div>
      </div>
      <div class="next-button-box">
        <div :class="nextButtonClass" @click="nextStep">下一步</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      telNum: "",
      numMessage: "",
      beSentMsg: "",
      beSentIsHidden: true,
      sentTimeDowm: "",
      verifytype: "",
      nextButtonClass: "readyNextButton"
    };
  },
  methods: {
    //请求短信验证码
    async sentNum() {
      if (!this.$util.isTel(this.numMessage)) {
        this.$createToast({
          type: "text",
          txt: "请输入正确的手机号码",
          time: 2000
        }).show();
        return;
      }
      try {
        let req = {
          telNum: this.numMessage
        };
        let { data } = await this.$ajax.post(this.$urlMap.mobileauthcode, req);
        if (data.code == "003") {
          this.$createToast({
            type: "text",
            txt: "该手机号码已被注册...",
            time: 2000
          }).show();
          return;
        } else if (data.code == "000") {
          this.telNum =
            this.numMessage.substring(0, 3) +
            "****" +
            this.numMessage.substring(8);
          this.beSentIsHidden = false;
          this.SMSCountdown();
          this.verifytype = data.verifytype;
        } else {
          this.$createToast({
            type: "text",
            txt: "验证码发送出了点问题...",
            time: 2000
          }).show();
        }
      } catch (err) {
        console.error(err);
      }
    },
    //短信倒计时
    SMSCountdown() {
      this.sentTimeDowm = 60;
      const interval = setInterval(() => {
        this.sentTimeDowm--;
        if (this.sentTimeDowm < 0) {
          this.beSentIsHidden = true;
          clearInterval(interval);
        }
      }, 1000);
    },
    //下一步验证
    nextStep() {
      if (!this.$util.isTel(this.numMessage)) {
        this.$createToast({
          type: "text",
          txt: "请输入正确的手机号码",
          time: 2000
        }).show();
        return;
      }
      if (!this.beSentMsg) {
        this.$createToast({
          type: "text",
          txt: "请输入验证码",
          time: 2000
        }).show();
        return;
      }
      if (this.beSentMsg !== this.verifytype) {
        // this.$router.push({ name: "nextStep" });
        this.$createToast({
          type: "text",
          txt: "请输入正确的短信验证码",
          time: 2000
        }).show();
        return;
      }
      sessionStorage.setItem("telNum", this.numMessage);
      this.$router.push({ name: "nextStep" });
    },
    shutDownPage() {
      this.$router.push({ name: "home" });
    }
  },
  watch: {
    //监听短短信证码
    beSentMsg: {
      handler(val) {
        if (val.length >= 6) {
          this.nextButtonClass = "NextButton";
        } else {
          this.nextButtonClass = "readyNextButton";
        }
        if (val.length >= 7) {
          this.beSentMsg = val.substring(0, 6);
          return;
        }
      },
      deep: true
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
