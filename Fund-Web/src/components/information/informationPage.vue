<template>
  <div class="body">
    <div class="title-box row">
      <div class="back-img-box">
        <img
          src="../../assets/public/back.png"
          class="back-img"
          @click="backPage"
        />
      </div>
      <div class="title-text">新闻资讯</div>
    </div>
    <div class="iframe">
      <iframe
        :src="this.informationHotUrl"
        scrolling="auto"
        frameborder="0"
        height="100%"
        class="iframe"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      informationHotUrl: ""
    };
  },
  methods: {
    backPage() {
      this.$router.go(-1);
    }
  },
  created() {
    this.informationHotUrl = this.$route.query.url;
  }
};
</script>

<style lang="scss" scoped>
@import "./informationPage.scss";
</style>