<template>
  <!-- <template slot="456"> </template>
  <my-input @verification='getMsg' ref="MyInput"></my-input>-->
  <!-- v-on{input、foces、blur} type{原生} class{class1、class2、class3} placeholder{原生}-->
  <div>
    <div class="body-box">
      <div class="body-box-scroll">
        <router-view />
      </div>
    </div>
    <footer class="footer-box">
      <div class="bottom-flex">
        <div
          class="flex-1 title-box"
          @click="switchPage('home',1)"
        >
          <div :class="['title-img',imgflag==1?'home-img':'home-img96']"></div>
          <div>首页</div>
        </div>
        <div
          class="flex-1 title-box"
          @click="switchPage('quotes',2)"
        >
          <div :class="['title-img',imgflag==2?'quotes-img':'quotes-img96']"></div>
          <div>自选</div>
        </div>
        <div
          class="flex-1 title-box"
          @click="switchPage('assets',3)"
        >
          <div :class="['title-img',imgflag==3?'transaction-img':'transaction-img96']"></div>
          <div>资产</div>
        </div>
        <div
          class="flex-1 title-box"
          @click="switchPage('information',4)"
        >
          <div :class="['title-img',imgflag==4?'information-img':'information-img96']"></div>
          <div>资讯</div>
        </div>
        <div
          class="flex-1 title-box"
          @click="switchPage('self',5)"
        >
          <div :class="['title-img',imgflag==5?'self-img':'self-img96']"></div>
          <div>我的</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bottomData: ["1", "2", "3", "4", "5"],
      imgflag:'1'
    };
  },
  components: {},
  methods: {
    /**
     * 切换页面按钮
     * @param {String} name 路由name
     * @param {Number} index 点击页面的索引，用来更换图片
     */
    switchPage(name,index) {
      this.imgflag = index
      this.$router.push({ name: name });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>