<template>
  <div class="seachPage">
    <div class="title-box row">
      <div class="back-img-box">
        <img
          src="../../../assets/public/back.png"
          class="back-img"
          @click="backPage()"
        />
      </div>
      <div class="title-text">搜索</div>
    </div>
    <el-autocomplete
      class="inline-input"
      v-model="state2"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      :trigger-on-focus="false"
      @select="handleSelect"
    >
      <el-button
        slot="append"
        icon="el-icon-search"
      ></el-button>
    </el-autocomplete>
    <div class="hotFund">
      <div class="hotFund-title">
        <div class="hotImg"></div>
        <div>热点</div>
      </div>
      <div class="hotFund-box">
        <div
          class="hotFund-item"
          v-for="(item,index) in hotFundList"
          :key="index"
          @click="toUrl(item.code)"
        >
          <div class="hotFund-item-name">{{item.name}}</div>
          <div :class="{'hotFund-item-varietyFall':item.rate<=0,'hotFund-item-varietyRise':item.rate>=0}">
            <div class="hotFund-item-price">{{item.price}}</div>
            <div class="hotFund-item-price">{{item.rate}}%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotFundList: [],
      funds: [],
      state1: "",
      state2: "",
      fundList:''
    };
  },
  methods: {
    /**
     * @param {Object} fundData 基金参数  {}代表查询所有基金  {code:'001707'}代表查询code为001707的基金   {fundName:'南方军工改革灵活配置混合'}等
     * @returns {Object} 基金详情
     */
    async getFundData(fundData){
      let req = fundData
      let {data} = await this.$ajax.post(this.$urlMap.getFundData,req)
      if(data.code == '000'){
      return data.data
      
      }else{
        console.log("基金查询错误")
      }
    },
    backPage() {
      this.$router.go(-1);
    },
    /**
     * 搜索事件
     */
    querySearch(queryString, cb) {
      var funds = this.funds;
      var results = queryString
        ? funds.filter(this.createFilter(queryString))
        : funds;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    /**
     * 搜索筛选
     */
    createFilter(queryString) {
      return fund => {
        return (
          fund.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    loadAll() {

      return [
        { value: "001707", name: "诺安高端制造股票" },
        { value: "161027", name: "富国中证全指证券公司" },
        { value: "006627", name: "山西证券超短债债券C" },
        { value: "501016", name: "国泰中证申万证券行业指数" },
        { value: "001178", name: "前海开源再融资主题精选股" },
        { value: "000755", name: "富安达新兴成长灵活配置混合" },
        { value: "004224", name: "南方军工改革灵活配置混合" }
      ];
    },
    /**
     * 查询处理
     * @param item 查询点击的item对象
     */
    handleSelect(item) {
      this.$router.push({name:'fundDetails',query:{code:item.value}})
    },
    /**
     * 获取热门基金列表
     */
    getHotFund(){
      for(let i = 0;i<this.fundList.length;i++){
        let temp = {}
        temp.name = this.fundList[i].fundName;
        temp.price = this.fundList[i].baseNum;
        temp.rate = this.fundList[i].dayrate;
        temp.code = this.fundList[i].code;
        this.hotFundList.push(temp)
      }
    },
    toUrl(code){
      this.$router.push({name:'fundDetails',query:{code:code}})
    }
  },
  async mounted() {
    this.fundList =await this.getFundData()
    this.getHotFund()
    this.funds = this.loadAll();
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>