<template>
  <div class="portfolio">
    <div class="portfolio-distributed">
      <div class="portfolio-distributed-title">
        <div>投资分布</div>
      </div>
      <canvas
        class="portfolio-distributed-pie"
        id='portfolioPie'
        ref="portfolioPie"
      >
      </canvas>
    </div>
    <div class="portfolio-heavyStorage">
      <div class="portfolio-heavyStorage-title">重仓持股</div>
      <div class="portfolio-heavyStorage-name">
        <div>股票名称</div>
        <div>持仓市值(万元)</div>
        <div>持仓占比</div>
      </div>
      <div class="portfolio-heavyStorage-data">
        <div class="portfolio-heavyStorage-dataList" v-for="(item,index) in heavyHoldings" :key="index">
          <div>
            <div>{{item.name}}</div>
            <div class="fundcode">{{item.code}}</div>
          </div>
          <div>{{item.holdingPrice}}</div>
          <div>{{item.holdingProportion}}%</div>
        </div>
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
      pieData: [],
      heavyHoldings:[],
      fundData:{}
    };
  },
  async mounted() {
    this.fundData = await this.getFundBaseData()
    this.pieData = this.fundData.pieData
    console.log('this.pieData: ', this.pieData);
    this.heavyHoldings = this.fundData.heavyHoldings
    this.setPieEchart();
  },
  methods: {
    isNumStr(num) {
      return !isNaN(Number(num));
    },
    //绘制饼图
    async setPieEchart() {
      await this.$nextTick();
      this.pieData = this.pieData
        .filter(d => d.ratio && this.isNumStr(d.ratio))
        .map((d, i) => ({ ...d, percent: Number(d.ratio) }));
      draw.pie({
        id: "portfolioPie",
        data: this.pieData,
        text: "资产配比",
        dom: this.$refs.portfolioPie
      });
    },
    /**
     * 对基金的基础信息初始化，主要获取饼图数据
     */
    async getFundBaseData() {
      this.code = this.$route.query.code
      let fundData =await this.getFundData({'code':this.code})
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