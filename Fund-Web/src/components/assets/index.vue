<template>
  <div class="page">
    <div class="asset-body">
      <div class="login-padding">
        <div class="login-box" v-if="!isLogin">
          <div class="noLogin-box">
            <div class="noLogin-box-text">您还没有登录交易，请点击下面按钮登录</div>
            <div class="login-button" @click="toUrl('login')">登录</div>
            <div>
              没有证券账号？马上
              <span class="kaihu" @click="toUrl('register')">注册</span>
            </div>
          </div>
        </div>

       <div class="login-box" v-if="isLogin">
          <div class="Login-box">
            <div class="allPrice-box">
              <div>资产总额（人民币）</div>
              <div :class="[$util.PoN(this.allPrice)?'decline':'rise']">{{this.allPrice}}</div>
            </div>
            <div class="otherParam-box">
              <div>持有收益（人民币）</div>
              <div :class="[$util.PoN(this.holdingIncome)?'decline':'rise']">{{this.holdingIncome}}</div>
            </div>
            <div class="otherParam-box">
              <div>昨日收益（人民币）</div>
              <div :class="[$util.PoN(this.yesterdayIncome)?'decline':'rise']">{{this.yesterdayIncome}}</div>
            </div>
            <div class="otherParam-box">
              <div>累计收益（人民币）</div>
              <div :class="[$util.PoN(this.cumulativeIncome)?'decline':'rise']">{{this.cumulativeIncome}}</div>
            </div>
            <div class="otherParam-box">
              <div>持有基金数</div>
              <div >{{this.fundNum}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="operate-box">
        <div class="operate-item">
          <div class="buy-img"></div>
          <div class="operate-item-text">买入</div>
        </div>
        <div class="operate-item">
          <div class="sell-img"></div>
          <div class="operate-item-text">卖出</div>
        </div>
        <div class="operate-item">
          <div class="record-img"></div>
          <div class="operate-item-text">交易记录</div>
        </div>
      </div>
      <div class="myFund-box" v-if="isLogin">
        <div class="myFund-item" v-for="(item,index) in myFundList" :key="index">
          <div class="myFund-item-title">{{item.fundName}}</div>
          <div class="myFund-item-content">
            <div class="myFund-item-content-price">
              <div class="myFund-item-content-text">金额</div>
              <div>{{item.price}}</div>
            </div>
            <div class="myFund-item-content-dayincome">
              <div class="myFund-item-content-text">昨日收益</div>
              <div :class="[$util.PoN(item.dayIncome)?'decline':'rise']">{{item.dayIncome}}</div>
            </div>
            <div class="myFund-item-content-allincome">
              <div class="myFund-item-content-text">持有收益</div>
              <div :class="[$util.PoN(item.allIncome)?'decline':'rise']">{{item.allIncome}}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="nologin-box" v-if="!isLogin">
          <div class="nologin-img"></div>
          <div class="nologin-text">您还未登陆，请先登陆...</div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myFundList:[
        { 
          fundCode:'001630',
          fundName:'天宏中证计算机主ETF联接C',
          price:'1036.48',
          dayIncome:'18.20',
          allIncome:'36.48'
        },
        {
          fundCode:'001178',
          fundName:'前海开源再融资主题精选股',
          price:'639.80',
          dayIncome:'-23.40',
          allIncome:'39.80'
        },
        {
          fundCode:'001707',
          fundName:'诺安高端制造股票',
          price:'350.00',
          dayIncome:'--',
          allIncome:'0.00'
        },
        {
          fundCode:'004224',
          fundName:'南方军工改革灵活配置混合',
          price:'1410.40',
          dayIncome:'54.08',
          allIncome:'-89.60'
        }
      ],
      //资产总值
      allPrice:0,
      //持有收益
      holdingIncome:0,
      //累计收益
      cumulativeIncome:0,
      //昨日收益
      yesterdayIncome:0,
      //持有基金数
      fundNum:0
    };
  },
  computed:{
    isLogin(){
      return this.$g.id?true:false 
    }
  },
  mounted(){
    this.getBaseData(this.myFundList)
  },
  methods: {
    toUrl(url) {
      this.$router.push({ name: url });
    },
    getBaseData(list){
      for(let i = 0;i < list.length; i++){
        this.allPrice += +list[i].price
        this.holdingIncome += +list[i].allIncome
        if(list[i].dayIncome == '--'){
        this.yesterdayIncome += 0
        }
        else{
        this.yesterdayIncome += +list[i].dayIncome
        }
      }
      this.allPrice= this.allPrice.toFixed(2);
      this.holdingIncome= this.holdingIncome.toFixed(2);
      this.yesterdayIncome= this.yesterdayIncome.toFixed(2);
      this.cumulativeIncome = ((Math.random()-0.5)*this.allPrice*0.1).toFixed(2);
      this.fundNum = list.length
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
