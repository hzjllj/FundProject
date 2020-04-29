<template>
  <div>
    <div class="seach-box" ref="seachBar">
      <div class="seach-img"></div>
      <div class="seach-placeholder" @click="tofund('seach')">
        请输入基金代码
      </div>
      <div class="message-img"></div>
      <div class="seach-line"></div>
      <div class="customerService-img"></div>
    </div>
    <div class="block" ref="lunbotu">
      <el-carousel height="150px">
        <el-carousel-item v-for="(item, index) in imgList" :key="index">
          <img v-bind:src="item.img" class="carousel-img" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="column">
      <div class="notice-box">
        <div class="notice-icon-box row">
          <img src="../../assets/public/notice.png" class="notice-icon" />
          <div class="notice-line"></div>
          <div class="notice-text">
            关于举行2020年投资者网上集体接待日活动的通知
          </div>
        </div>
      </div>
    </div>
    <div class="features">
      <div class="flex-1 features-item">
        <div class="features-img paiming"></div>
        <div>严选好基</div>
      </div>
      <div class="flex-1 features-item">
        <div class="features-img zixuan" @click="tofund('quotes')"></div>
        <div>自选基金</div>
      </div>
      <div class="flex-1 features-item">
        <div class="features-img yufang" @click="tofund('prevention')"></div>
        <div>预防课堂</div>
      </div>
      <div class="flex-1 features-item">
        <div class="features-img gengduo"></div>
        <div>更多功能</div>
      </div>
    </div>
    <div class="fundDaren">
      <div class="model-title">
        <div class="model-title-1">达人</div>
        <div class="model-title-2">推荐</div>
      </div>
      <div class="fundDaren-box">
        <div class="fundDaren-box-scoll">
          <div class="fundDaren-item">
            <div class="fundDaren-item-title">经典达人</div>
            <div class="fundDaren-item-user">
              <div class="fundDaren-item-img"></div>
              <div class="fundDaren-item-name">李铁锤</div>
            </div>
            <div class="fundDaren-item-rate">3.89%</div>
            <div class="fundDaren-item-month">月收益</div>
          </div>
          <div class="fundDaren-item">
            <div class="fundDaren-item-title">稳健达人</div>
            <div class="fundDaren-item-user">
              <div class="fundDaren-item-img"></div>
              <div class="fundDaren-item-name">王狗柱</div>
            </div>
            <div class="fundDaren-item-rate">68.2%%</div>
            <div class="fundDaren-item-month">月收益</div>
          </div>
          <div class="fundDaren-item">
            <div class="fundDaren-item-title">趋势达人</div>
            <div class="fundDaren-item-user">
              <div class="fundDaren-item-img"></div>
              <div class="fundDaren-item-name">张阿达</div>
            </div>
            <div class="fundDaren-item-rate">29.5%</div>
            <div class="fundDaren-item-month">月收益</div>
          </div>
          <div class="fundDaren-item">
            <div class="fundDaren-item-title">追高达人</div>
            <div class="fundDaren-item-user">
              <div class="fundDaren-item-img"></div>
              <div class="fundDaren-item-name">黄大仙</div>
            </div>
            <div class="fundDaren-item-rate">-150.67%</div>
            <div class="fundDaren-item-month">月收益</div>
          </div>
          <div class="fundDaren-item">
            <div class="fundDaren-item-title">牛市达人</div>
            <div class="fundDaren-item-user">
              <div class="fundDaren-item-img"></div>
              <div class="fundDaren-item-name">李大钊</div>
            </div>
            <div class="fundDaren-item-rate">-∞%</div>
            <div class="fundDaren-item-month">月收益</div>
          </div>
        </div>
      </div>
    </div>
    <div class="featuredFund">
      <div class="model-title">
        <div class="model-title-1">精选</div>
        <div class="model-title-2">基金</div>
      </div>
      <div class="featuredFund-box" >
        <div class="featuredFund-name">前海开源主题股票</div>
        <div class="featuredFund-class">
          <div class="featuredFund-class-title">债券型</div>
          <div class="featuredFund-class-title">随时买卖</div>
          <div class="featuredFund-class-title">中高风险</div>
        </div>
        <div class="featuredFund-time">2018-11-06至2018-01-24</div>
        <div class="featuredFund-buy" @click="tofund('fund','001178')">
          现金宝0折认购
        </div>
      </div>
    </div>
    <div class="fundIndex">
      <div class="model-title">
        <div class="model-title-1">指数</div>
        <div class="model-title-2">表现</div>
      </div>
      <div class="fundIndex-box">
        <div class="fundIndex-box-scoll">
          <div class="fundIndex-item">
            <div class="fundIndex-item-name">上证指数</div>
            <div class="rise">2875.96</div>
            <div class="rise">
              <span>0.33%</span>&nbsp;&nbsp;<span>9.45</span>
            </div>
          </div>
          <div class="fundIndex-item">
            <div class="fundIndex-item-name">深圳成指</div>
            <div class="decline">10611.55</div>
            <div class="decline">
              <span>-0.10%</span>&nbsp;&nbsp;<span>-10.21</span>
            </div>
          </div>
          <div class="fundIndex-item">
            <div class="fundIndex-item-name">创业板指</div>
            <div class="rise">2015.80</div>
            <div class="rise">
              <span>0.18%</span>&nbsp;&nbsp;<span>3.55</span>
            </div>
          </div>
          <div class="fundIndex-item">
            <div class="fundIndex-item-name">中小板指</div>
            <div class="rise">6996.56</div>
            <div class="rise">
              <span>0.14%</span>&nbsp;&nbsp;<span>9.69</span>
            </div>
          </div>
          <div class="fundIndex-item">
            <div class="fundIndex-item-name">沪深300</div>
            <div class="rise">3899.87</div>
            <div class="rise">
              <span>0.00%</span>&nbsp;&nbsp;<span>0.09</span>
            </div>
          </div>
          <div class="fundIndex-item">
            <div class="fundIndex-item-name">恒生指数</div>
            <div class="decline">27404.27</div>
            <div class="decline">
              <span>-0.33%</span>&nbsp;&nbsp;<span>-89.43</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hotspot">
      <el-carousel height="50px" direction="vertical">
        <el-carousel-item v-for="(item, index) in hotspotList" :key="index">
          <div class="hotspot-item" @click="toUrl(item.url)">
            <img v-bind:src="item.img" class="hotspot-img" />
            <div class="hotspot-title">{{ item.text }}</div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="informationHot">
      <div class="model-title title-padding">
        <div class="model-title-1">资讯</div>
        <div class="model-title-2">热点</div>
        <div class="informationHot-more" @click="tofund('information')"></div>
      </div>
      <div class="infinite-list-wrapper" style="overflow:auto">
        <ul
          class="list"
          v-infinite-scroll="load"
          infinite-scroll-disabled="disabled"
        >
          <li v-for="i in count" class="list-item" :key="i">
            <div
              class="informationHot-item"
              @click="toUrl(informationHotList[i - 1].url)"
            >
              <div class="informationHot-title">
                {{ informationHotList[i - 1].title }}
              </div>
              <div class="informationHot-subtitle">
                <div>{{ informationHotList[i - 1].subtitle }}</div>
                <div class="informationHot-subtitle-line"></div>
                <div class="informationHot-subtitle-provenance">
                  {{ informationHotList[i - 1].provenance }}
                </div>
                <div class="informationHot-subtitle-time">
                  {{ informationHotList[i - 1].time }}
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="informationHot-lookmore" v-if="loading">加载中...</div>
        <div class="informationHot-lookmore" v-if="noMore">没有更多了</div>
      </div>
    </div>
    <div class="isbottom">
      <div class="isbottom-item flex-1">
        <div class="isbottom-item-teamImg"></div>
        <div class="isbottom-item-text">专业团队</div>
      </div>
      <div class="isbottom-item flex-1">
        <div class="isbottom-item-consultantImg"></div>
        <div class="isbottom-item-text">顶级顾问</div>
      </div>
      <div class="isbottom-item flex-1">
        <div class="isbottom-item-professionImg"></div>
        <div class="isbottom-item-text">冠军精神</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        { img: require("../../assets/public/lunbotu1.png") },
        { img: require("../../assets/public/lunbotu2.png") },
        { img: require("../../assets/public/lunbotu3.png") },
        { img: require("../../assets/public/lunbotu4.png") }
      ],
      hotspotList: [
        {
          text: '疫情影响究竟多大？美联储警告"新风险"来临！',
          img: require("../../assets/public/hotspot.png"),
          url:
            "https://baijiahao.baidu.com/s?id=1658013378015293124&wfr=spider&for=pc"
        },
        {
          text: '好消息！餐饮巨头西贝"有救了"：银行终出手。',
          img: require("../../assets/public/hotspot.png"),
          url:
            "https://baijiahao.baidu.com/s?id=1658020557949480738&wfr=spider&for=pc"
        },
        {
          text: '27万人"云蹦迪"，线上娱乐爆发！谁是黑马？',
          img: require("../../assets/public/hotspot.png"),
          url:
            "https://baijiahao.baidu.com/s?id=1658021544541010355&wfr=spider&for=pc"
        },
        {
          text: "王贺胜同志任湖北省委委员、常委!",
          img: require("../../assets/public/hotspot.png"),
          url: "https://zj.zjol.com.cn/news.html?id=1382650"
        },
        {
          text: "机构、股东、高管争相买入这些业绩暴增股。",
          img: require("../../assets/public/hotspot.png"),
          url: "http://data.stcn.com/2020/0208/15631358.shtml"
        }
      ],
      informationHotList: [
        {
          title: " ",
          subtitle: "",
          provenance: "",
          time: "",
          url: ""
        },
        {
          title: "掘金底市值个股 887股流通市值不足20亿",
          subtitle: "要闻",
          provenance: "上海证券报",
          time: "2020-02-11 18:39:06",
          url: "http://data.stcn.com/2020/0210/15632403.shtml"
        },
        {
          title: "掘金底市值个股 887股流通市值不足20亿",
          subtitle: "要闻",
          provenance: "上海证券报",
          time: "2020-02-11 18:39:06",
          url: "http://data.stcn.com/2020/0210/15632403.shtml"
        },
        {
          title: "掘金底市值个股 887股流通市值不足20亿",
          subtitle: "要闻",
          provenance: "上海证券报",
          time: "2020-02-11 18:39:06",
          url: "http://data.stcn.com/2020/0210/15632403.shtml"
        },
        {
          title: "掘金底市值个股 887股流通市值不足20亿",
          subtitle: "要闻",
          provenance: "上海证券报",
          time: "2020-02-11 18:39:06",
          url: "http://data.stcn.com/2020/0210/15632403.shtml"
        },
        {
          title: "掘金底市值个股 887股流通市值不足20亿",
          subtitle: "要闻",
          provenance: "上海证券报",
          time: "2020-02-11 18:39:06",
          url: "http://data.stcn.com/2020/0210/15632403.shtml"
        },
        {
          title: "掘金底市值个股 887股流通市值不足20亿",
          subtitle: "要闻",
          provenance: "上海证券报",
          time: "2020-02-11 18:39:06",
          url: "http://data.stcn.com/2020/0210/15632403.shtml"
        },
        {
          title: "掘金底市值个股 887股流通市值不足20亿",
          subtitle: "要闻",
          provenance: "上海证券报",
          time: "2020-02-11 18:39:06",
          url: "http://data.stcn.com/2020/0210/15632403.shtml"
        },
        {
          title: "掘金底市值个股 887股流通市值不足20亿",
          subtitle: "要闻",
          provenance: "上海证券报",
          time: "2020-02-11 18:39:06",
          url: "http://data.stcn.com/2020/0210/15632403.shtml"
        },
        {
          title: "掘金底市值个股 887股流通市值不足20亿",
          subtitle: "要闻",
          provenance: "上海证券报",
          time: "2020-02-11 18:39:06",
          url: "http://data.stcn.com/2020/0210/15632403.shtml"
        },
        {
          title: "掘金底市值个股 887股流通市值不足20亿",
          subtitle: "要闻",
          provenance: "上海证券报",
          time: "2020-02-11 18:39:06",
          url: "http://data.stcn.com/2020/0210/15632403.shtml"
        },
        {
          title: "掘金底市值个股 887股流通市值不足20亿",
          subtitle: "要闻",
          provenance: "上海证券报",
          time: "2020-02-11 18:39:06",
          url: "http://data.stcn.com/2020/0210/15632403.shtml"
        },
        {
          title: "掘金底市值个股 887股流通市值不足20亿",
          subtitle: "要闻",
          provenance: "上海证券报",
          time: "2020-02-11 18:39:06",
          url: "http://data.stcn.com/2020/0210/15632403.shtml"
        },
        {
          title: "掘金底市值个股 887股流通市值不足20亿",
          subtitle: "要闻",
          provenance: "上海证券报",
          time: "2020-02-11 18:39:06",
          url: "http://data.stcn.com/2020/0210/15632403.shtml"
        }
      ],
      count: 8,
      loading: false
    };
  },
  async mounted() {
    this.informationHotList = await this.getNewsData();
    this.$nextTick(() => {
      window.addEventListener(
        "scroll",
        this.throttle(this.setSeachBarBG),
        true
      );
    });
  },
  methods: {
    //内部链接跳转
    tofund(name,code) {
      this.$router.push({ name: name, query: { code: code } });
    },
    //资讯外部链接跳转
    toUrl(url) {
      this.$router.push({ name: "informationPage", query: { url: url } });
    },
    //节流
    throttle(fn) {
      let canRun = true; // 通过闭包保存一个标记
      return function() {
        if (!canRun) return; // 在函数开头判断标记是否为 true，不为 true 则 return
        canRun = false; // 立即设置为 false
        setTimeout(() => {
          // 将外部传入的函数的执行放在 setTimeout 中
          fn.apply(this, arguments);
          // 最后在 setTimeout 执行完毕后再把标记设置为 true(关键) 表示可以执行下一次循环了。当定时器没有执行的时候标记永远是 false，在开头被 return 掉
          canRun = true;
        }, 10);
      };
    },
    //搜索条颜色改变事件
    setSeachBarBG() {
      if (!this.$refs.lunbotu) return;
      const lunbotuTop = this.$refs.lunbotu.getBoundingClientRect().top;
      // console.log(lunbotuTop);
      if (lunbotuTop < -35) {
        this.$refs.seachBar.style.backgroundColor = "#d3a664";
        this.$refs.seachBar.style.opacity = -lunbotuTop / 150;
      } else {
        this.$refs.seachBar.style.backgroundColor = "transparent";
        this.$refs.seachBar.style.opacity = 1;
      }
    },
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 2;
        this.loading = false;
      }, 2000);
    },

    /**
     * @param {Object} param 获取热点新闻信息  {}获取全部信息  {_id:"xxx"}可选字段 _id 、title、subtitle、provenance、time、url、img
     * @return {Object}
     */
    async getNewsData(param) {
      let req = param;
      console.log("param: ", param);
      const { data } = await this.$ajax.post(this.$urlMap.getNewsData, req);
      if (data.code == "000") {
        const list = [];
        const newslist = data.data;
        for (let i = 0; i < newslist.length; i++) {
          let temp = {};
          temp.id = newslist[i]._id;
          temp.title = newslist[i].title;
          temp.subtitle = newslist[i].subtitle;
          temp.provenance = newslist[i].provenance;
          temp.time = newslist[i].time;
          temp.url = newslist[i].url;
          list.push(temp);
        }
        return list;
      } else {
        console.log("获取新闻列表失败");
      }
    }
  },
  computed: {
    noMore() {
      return this.count >= 14;
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
