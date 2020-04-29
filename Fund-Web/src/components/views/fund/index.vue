<template>
  <div class="column background">
    <div class="title-box row">
      <img
        src="../../../assets/public/back.png"
        class="shutDown-img"
        @click="backPage"
      />
      <div class="title-text">
        <div>{{this.fundData.fundName}}</div>
        <div class="fundcode">{{this.fundData.code}}</div>
      </div>
    </div>
    <div class="body-box">
      <div class="Performance">
        <div class="Performance-data">
          <div class="Performance-data-left">
            <div class="Performance-data-left-title">日涨跌幅</div>
            <div class="Performance-data-left-digital">{{this.fundData.dayrate}}%</div>
          </div>
          <div class="Performance-data-center"></div>
          <div class="Performance-data-right">
            <div class="Performance-data-right-title">单位净值</div>
            <div class="Performance-data-right-digital">{{this.fundData.baseNum}}</div>
          </div>
        </div>
        <div class="Performance-bar">
          <div class="Performance-bar-text">剩余份额：{{this.barNum}}万</div>
          <el-progress
            class="Performance-bar-content"
            :percentage="percentage"
            :color="customColor"
            :stroke-width="strokeWidth"
            :show-text="false"
          ></el-progress>
        </div>
        <div class="Performance-line"></div>
        <div class="Performance-label">
          <div class="Performance-label-MHrisk">中高风险</div>
          <div class="Performance-label-MillionOfSell">一万起购</div>
        </div>
      </div>
      <div class="net-worth-trend">
        <div class="net-worth-trend-title">
          <div class="net-worth-trend-title-text">净值走势</div>
          <!-- <div class="net-worth-trend-title-img"></div> -->
        </div>
        <canvas
          class="net-worth-trend-echart"
          id="netWorthTrendEchart"
        ></canvas>
        <div class="net-worth-trend-dateSelect">
          <div
            :class="[recordDate==30?'recordIsClick':'recordNoClick']"
            @click="getRecordDate(30)"
          >30天净值</div>
          <div
            :class="[recordDate==180?'recordIsClick':'recordNoClick']"
            @click="getRecordDate(180)"
          >半年净值</div>
          <div
            :class="[recordDate==365?'recordIsClick':'recordNoClick']"
            @click="getRecordDate(365)"
          >一年净值</div>
          <div
            :class="[recordDate==1000?'recordIsClick':'recordNoClick']"
            @click="getRecordDate(1000)"
          >历史净值</div>
        </div>
        <div class="look-historyData">查看历史细明</div>
      </div>
      <div class="trading-rules">
        <div class="net-worth-trend-title">
          <div class="net-worth-trend-title-text">交易规则</div>
        </div>
        <div class="event-bar"></div>
        <div class="event-bar-data">
          <div class="event-bar-data-text">
            <div>申购</div>
            <div>T日15：00前</div>
          </div>
          <div class="event-bar-data-text">
            <div>确认份额</div>
            <div>T+1</div>
          </div>
          <div class="event-bar-data-text">
            <div>查看盈亏</div>
            <div>T+1更新后</div>
          </div>
        </div>
      </div>
      <div
        class="rate-rules"
        @click="switchPage('rateRulesTable')"
      >
        <div class="net-worth-trend-title">
          <div class="net-worth-trend-title-text">费率规则</div>
          <div class="net-worth-trend-title-img"></div>
        </div>
      </div>
      <div class="fundData-bar">
        <div class="fundData-bar-box">
          <div
            class="fundData-bar-title"
            @click="switchPage('fundDetails')"
          >基金信息</div>
          <div
            class="fundData-bar-title"
            @click="switchPage('portfolio')"
          >投资组合</div>
          <div
            class="fundData-bar-title"
            @click="switchPage('fundAnnouncement')"
          >基金公告</div>
          <div
            class="fundData-bar-title"
            @click="switchPage('historicalDividend')"
          >历史分红</div>
          <div
            class="fundData-bar-title"
            @click="switchPage('legalDocument')"
          >法律文件</div>
          <div
            class="fundData-bar-title"
            @click="switchPage('personnelConference')"
          >持有人大会事项</div>
        </div>
      </div>
      <router-view></router-view>
      <div class="risk-arning">
        风险提示：基金的过往业绩不预示其未来表现，相关数据仅供参考，不构成投资建议。投资人请详阅<span class="manual">《基金合同和基金招募说明书》</span>，并自行承担投资基金的风险。
      </div>
    </div>
    <div class="purchase-button">
      <div
        v-if="isAddZixuan"
        @click="addZixuan"
      >
        <div class="purchase-button-addimg"></div>
        <div class="purchase-button-addZixuan">添加自选</div>
      </div>
      <div
        v-if="!isAddZixuan"
        @click="addZixuan"
      >
        <div class="purchase-button-reduceimg"></div>
        <div class="purchase-button-reduceZixuan">删除自选</div>
      </div>
      <div class="purchase-button-box">
        <div class="purchase-button-dingtou flex-1">定投</div>
        <div class="purchase-button-shenggou flex-1" @click="switchPage('buy')">申购</div>
      </div>
    </div>
  </div>
</template>

<script>
import draw from "@/lib/draw";
export default {
  data() {
    return {
      code:'',
      fundData:{},
      strokeWidth: 4,
      barNum:0,
      percentage: 60,
      customColor: "#EE5000",
      data: [],
      recordDate: 30,
      isAddZixuan: false,
      baseNum: 1.0416,//基金的价钱
      endNum: 1.0416,//曲线图结束时的价钱
      dayrate: 0.86
    };
  },
  async mounted() {
    //曲线图随机数据
    this.fundData =await this.getFundBaseData()
    this.baseNum = this.fundData.baseNum;
    this.endNum = this.fundData.baseNum;
    this.data = this.getFundLineData(30);
    draw.line("netWorthTrendEchart", this.data);
    
  },
  methods: {

    /** 生产随机数据
    *   @param {Date} now 时间戳
    *   @param {Number} baseNum 基金的价格
    *   @returns 
    **/
    randomData(now) {
      let dataValue = Math.random() * 1000;
      let value = 0;
      value = dataValue - 500 + Math.random() * 10 - 10;
      if (this.baseNum < 0.4) {
        value = dataValue - 400 + Math.random() * 10 - 10;
      }
      this.baseNum = parseFloat(
        (this.baseNum + Math.round(value) / 10000).toFixed(4)
      );
      return {
        x: [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("-"),
        y: this.baseNum
      };
    },

    /**随机产生基金数据
     *@param {Number} dateNum 产生基金数据的天数
     *@return {Object} 返回echart曲线图数据
     **/
    getFundLineData(dateNum) {
      let oneDate = 24 * 3600 * 1000;
      let now = new Date();
      var data = [];
      for (let i = 0; i < dateNum; i++) {
        now = new Date(now - oneDate);
        data[dateNum - i - 2] = this.randomData(now);
      }
      data[data.length - 1].y = this.endNum;
      return data;
    },
    //获得0-100内的随机数
    getRandomNum(){
      this.barNum = parseInt(Math.random().toFixed(2)*100)
      this.percentage = parseInt(Math.random().toFixed(2)*100)
    },
    //返回home页
    backPage() {
      this.$router.push({ name: "home"});
    },

    //选择基金信息、投资组合、基金经理等信息页面
    switchPage(name) {
      this.$router.push({ name: name,query:{code:this.code}});
    },

    //点击添加自选按钮事件
    addZixuan() {
      this.isAddZixuan = !this.isAddZixuan;
    },

    //切换Echart曲线图时间 num天数
    getRecordDate(num) {
      this.recordDate = num;
      this.baseNum = this.endNum;
      this.data = this.getFundLineData(num);
      draw.line("netWorthTrendEchart", this.data);
    },
    /**
     * 对基金的基础信息初始化
     */
    async getFundBaseData() {
      this.code = this.$route.query.code
      let fundData =await this.getFundData({'code':this.code})
      //对申购分额初始化
      this.getRandomNum()
      return fundData[0]
    },

    /**
     * @param {Object} fundParam 基金参数  {}代表查询所有基金  {code:'001707'}代表查询code为001707的基金   {fundName:'南方军工改革灵活配置混合'}等
     * @returns {Object} 基金详情
     */
    async getFundData(fundParam){
      let req = fundParam
      let {data} = await this.$ajax.post(this.$urlMap.getFundData,req)
      if(data.code == '000'){
      return data.data
      }else{
        console.log("基金查询错误")
      }
    },
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>