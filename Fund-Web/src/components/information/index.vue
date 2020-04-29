<template>
  <div class="page">
    <div
      class="seach-box"
      ref="seachBar"
    >
      <div class="seach-img">
      </div>
      <div class="seach-placeholder">热点资讯搜索</div>
      <div class="message-img"></div>
      <div class="seach-line"></div>
      <div class="customerService-img"></div>
    </div>
    <div ref="lunbotu">
      <el-carousel height="150px">
        <el-carousel-item
          v-for="(item,index) in imgList"
          :key="index"
        >
          <img
            v-bind:src="item.img"
            class="carousel-img"
          >
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="informationHot">
      <div
        class="infinite-list-wrapper"
        style="overflow:auto"
      >
        <ul
          class="list"
          v-infinite-scroll="load"
          infinite-scroll-disabled="disabled"
        >
          <li
            v-for="i in count"
            class="list-item"
            :key="i"
          >
            <div
              class="informationHot-item"
              @click="toUrl(informationHotList[i-1].url)"
            >
              <div>
                <div class="informationHot-title">
                  {{informationHotList[i-1].title}}
                </div>
                <div class="informationHot-subtitle">
                  <div>{{informationHotList[i-1].subtitle}}</div>
                  <div class="informationHot-subtitle-line"></div>
                  <div class="informationHot-subtitle-provenance">{{informationHotList[i-1].provenance}}</div>
                  <div class="informationHot-subtitle-time">{{informationHotList[i-1].time}}</div>
                </div>
              </div>
              <div>
                <img
                  class="informationHot-img"
                  v-bind:src="informationHotList[i-1].img"
                  alt=""
                >
              </div>
            </div>
          </li>
        </ul>
        <div
          class="informationHot-lookmore"
          v-if="loading"
        >加载中...</div>
        <div
          class="informationHot-lookmore"
          v-if="noMore"
        >没有更多了</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        { img: require("../../assets/public/zixunlunbotu4.png") },
        { img: require("../../assets/public/zixunlunbotu2.png") },
        { img: require("../../assets/public/zixunlunbotu3.png") },
        { img: require("../../assets/public/zixunlunbotu1.png") }
      ],
      informationHotList: [
        {
          title: "掘金底市值个股 887股流通市值不足20亿",
          subtitle: "要闻",
          provenance: "上海证券报",
          time: "2020-02-11 18:39:06",
          url: "http://data.stcn.com/2020/0210/15632403.shtml",
          img: require("../../assets/information/informationImg1.png")
        },
        {
          title: "36家公司重要股东开启增持模式，累计增持32.00亿元(附股)",
          subtitle: "政经",
          provenance: "证券时报网",
          time: "2020-02-11 09:58:16",
          url: "http://data.stcn.com/2020/0210/15632491.shtml",
          img: require("../../assets/information/informationImg2.png")
        },
        {
          title:
            "刚刚，有人在股指数期货上丢了一个1500万元的大皮夹！被谁捡走了？",
          subtitle: "要闻",
          provenance: "银行证券网",
          time: "2020-02-10 14:30:44",
          url:
            "http://finance.sina.com.cn/roll/2020-02-10/doc-iimxxstf0249473.shtml",
          img: require("../../assets/information/informationImg3.png")
        },
        {
          title: "南向资金高比例持有港股名单",
          subtitle: "港股",
          provenance: "证券时报网",
          time: "2020-02-19 12:36:65",
          url:
            "http://finance.sina.com.cn/stock/relnews/hk/2019-07-23/doc-ihytcerm5607419.shtml",
          img: require("../../assets/information/informationImg4.png")
        },
        {
          title:
            " 机构炒作拐点前提！早盘医药股大幅分化,十多只个股跌停,还有机会吗？",
          subtitle: "要闻",
          provenance: "上海证券报",
          time: "2020-02-19 9:31:36",
          url:
            "http://finance.sina.com.cn/roll/2020-02-10/doc-iimxxstf0247076.shtml",
          img: require("../../assets/information/informationImg5.png")
        },
        {
          title: "习近平同印尼总统佐科通电话",
          subtitle: "政经",
          provenance: "证券时报网",
          time: "2020-02-18 19:12:35",
          url: "http://www.xinhuanet.com//2020-02/11/c_1125561325.htm",
          img: require("../../assets/information/informationImg6.png")
        },
        {
          title: "中政协:104个股票配售对象列入黑名单",
          subtitle: "政经",
          provenance: "银行证券网",
          time: "2020-02-18 16:56:09",
          url:
            "https://baijiahao.baidu.com/s?id=1658246005419117591&wfr=spider&for=pc",
          img: require("../../assets/information/informationImg7.png")
        },
        {
          title: " 大动作！万事达卡携手网联或将拿下中国银行卡清算牌照",
          subtitle: "要闻",
          provenance: "证券时报网",
          time: "2020-02-18 13:45:26",
          url:
            "http://finance.sina.com.cn/stock/relnews/cn/2020-02-11/doc-iimxyqvz2045458.shtml",
          img: require("../../assets/information/informationImg8.png")
        },
        {
          title: " 獐子岛集团再次向驰援武汉大连医护人员捐赠海鲜食品",
          subtitle: "要闻",
          provenance: "上海证券报",
          time: "2020-02-17 23:11:15",
          url: "http://kuaixun.stcn.com/2020/0211/15636412.shtml",
          img: require("../../assets/information/informationImg9.png")
        },
        {
          title: "阿里巴巴将被排除在港股通名单之外？港交所这么回应",
          subtitle: "要闻",
          provenance: "深度报道网",
          time: "2020-02-15 16:51:23",
          url: "http://kuaixun.stcn.com/2020/0211/15635558.shtml",
          img: require("../../assets/information/informationImg10.png")
        },
        {
          title: "MLCC板块又异动 部分厂商开启涨价模式",
          subtitle: "港股",
          provenance: "上海证券报",
          time: "2020-02-14 22:17:46",
          url: "http://kuaixun.stcn.com/2020/0211/15636391.shtml",
          img: require("../../assets/information/informationImg11.png")
        },
        {
          title: "热门概念熄火后，这三大疫情相关板块有望迎来补涨！（附名单）",
          subtitle: "要闻",
          provenance: "证券时报网",
          time: "2020-02-13 9:31:36",
          url: "http://news.stcn.com/2020/0211/15634492.shtml",
          img: require("../../assets/information/informationImg12.png")
        },
        {
          title: "秒触涨停！期指IC2006疑现乌龙指，机构操作失误所致？",
          subtitle: "港股",
          provenance: "深度报道网",
          time: "2020-02-12 01:44:12",
          url: "http://news.stcn.com/2020/0203/15634524.shtml",
          img: require("../../assets/information/informationImg13.png")
        },
        {
          title: "中一签赚17万？A股史上最贵新股来了，明日申购",
          subtitle: "要闻",
          provenance: "上海证券报",
          time: "2020-02-11 21:11:36",
          url: "http://news.stcn.com/2020/0210/15634228.shtml",
          img: require("../../assets/information/informationImg14.png")
        },
        {
          title: "投资大咖：市场压力测试基本完成 不必担忧二次探底",
          subtitle: "要闻",
          provenance: "深度报道网",
          time: "2020-02-10 07:49:12",
          url: "http://stock.stcn.com/2020/0211/15634514.shtml",
          img: require("../../assets/information/informationImg15.png")
        }
      ],
      count: 5,
      loading: false
    };
  },
  methods: {
    toUrl(url) {
      this.$router.push({ name: "informationPage", query: { url: url } });
    },
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 2;
        this.loading = false;
      }, 2000);
    },
  },
  computed: {
    noMore() {
      return this.count >= 15;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>