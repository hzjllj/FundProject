<template>
  <div class="page">
    <div class="title-box row">
      <div class="back-img-box">
        <img
          src="../../../../assets/public/back.png"
          class="back-img"
          @click="toBack()"
        />
      </div>
      <div class="title-text">买入</div>
    </div>
    <div class="body-box">
      <div class="fundNeme">{{fundData.fundName?fundData.fundName:'天宏基金'}}</div>
      <div class="transaction">
        <div class="transaction-text">买入金额</div>
        <div class="transaction-rule" @click="toUrl('rateRulesTable')">交易规则</div>
      </div>
      <div class="price">
        <div class="price-icon">￥</div>
        <div>
          <input
            type="text"
            class="price-num"
            placeholder="最低买入100元..."
            v-model="buyPrice"
          />
        </div>
      </div>
      <div class="statement">
        买入0费率，预计{{ new Date().getMonth() + 1 }}月{{
          new Date().getDate() + 1
        }}净值确认份额(卖出手续详情见交易规则)
      </div>
      <div class="transaction">
        <div class="transaction-text">付款方式</div>
        <div class="transaction-pay">
          <div>中国银行储蓄卡(尾号0001)</div>
          <div class="maxpay">最多支付30000.0元</div>
        </div>
      </div>
      <div :class="buyButtonClass"  @click="showBtn">确定</div>
      <div class="permit">
        基金销售由XX(无人)基金销售有限公司提供销售资格：证监许可[0000]000号(纯虚构)
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      buyPrice: "",
      code:'',
      fundName:'',
      fundData:'',
      userData:''
    };
  },
  methods: {
    toBack() {
      this.$router.go(-1);
    },
    toUrl(name){
      this.$router.push({
        name:name
      })
    },
    /**
     * 对基金的基础信息初始化
     */
    async getFundBaseData() {
      this.code = this.$route.query.code
      let fundData =await this.getFundData({'code':this.code})
      this.fundData = fundData[0]
    },
    /**
     * 对用户的基础信息初始化
     */
    async getUserBaseData() {
      let userData =await this.getUserData({'id':this.$g.id})
      this.userData = userData
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
    /**
     * @param {Object} userParam 用户参数  {}代表查询所有用户  {id:'dfsdfsf321s32df13s'}代表查询id为dfsdfsf321s32df13s的用户
     * @returns {Object} 基金详情
     */
    async getUserData(userParam){
      let req = userParam
      let {data} = await this.$ajax.post(this.$urlMap.getUserData,req)
      if(data.code == '000'){
      return data.data
      }else{
        console.log("用户查询错误")
      }
    },

    showBtn() {
      const that = this
      if(this.buyPrice < 100 || !that.$util.isNumber(this.buyPrice)){
        this.$createToast({
          txt: '请输入正确的金额',
          time: 1000,
          type:'txt'
        }).show()
        return
      }
      if(!this.$g.id){
        this.$createDialog({
        type: 'confirm',
        title: '购买失败',
        content: '您似乎还未完成登录，点击确定跳转到登录页面',
        confirmBtn: {
          text: '确定',
          active: true,
          disabled: false,
          href: 'javascript:;'
        },
        cancelBtn: {
          text: '取消',
          active: false,
          disabled: false,
          href: 'javascript:;'
        },
        onConfirm: () => {
          this.toUrl('login')
        },
        onCancel: () => {}
      }).show()
      }else{
        this.$createDialog({
        type: 'confirm',
        content: `是否购买基金<${that.fundData.fundName}><br><br>购买金额为${that.buyPrice}元`,
        confirmBtn: {
          text: '确定',
          active: true,
          disabled: false,
          href: 'javascript:;'
        },
        cancelBtn: {
          text: '取消',
          active: false,
          disabled: false,
          href: 'javascript:;'
        },
        onConfirm: () => {       
          if(that.userData.ownPrice<that.buyPrice){
            this.$createToast({
          txt: '用户余额不足，请有自知之明。',
          time: 1000,
          type:'txt'
        }).show()
        return
          }
          else{
            this.$createToast({
          txt: '购买成功',
          time: 1000,
          type:'txt',
          onTimeout: () => {
          console.log('页面跳转')
        }
        }).show()
          }
        },
        onCancel: () => {}
      }).show()
      }
    },
    //基金购买
    // async buyFund(id,buyFund){
    //   let req = {
    //     id : id,
    //     funddata : buyFund
    //   }
    //   let data = this.$ajax.post(this.$urlMap.buyFund,req)
    //   if(data.code == '000'){
    //   console.log('购买成功')
    //   }else{
    //     console.log("购买失败")
    //   }
    // }
  },
  mounted(){
    this.getFundBaseData()
    this.getUserBaseData()
  },
  computed: {
    //确定按钮
    buyButtonClass() {
      return this.buyPrice > 100 ? "buy-button" : "ready-buy-button";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
