<template>
  <div>
    <div
      class="seach-box"
      ref="seachBar"
    >
      <div class="seach-img">
      </div>
      <div
        class="seach-placeholder"
        @click="tofund('seach')"
      >请输入基金代码</div>
      <div class="message-img"></div>
      <div class="seach-line"></div>
      <div class="customerService-img"></div>
    </div>
    <div class="body-box">
      <div class="fundIndex-box">
        <div class="fundIndex-item">
          <div class="fundIndex-item-name">上证指数</div>
          <div class="rise">2875.96</div>
          <div class="rise"><span>0.33%</span>&nbsp;&nbsp;<span>9.45</span></div>
        </div>
        <div class="fundIndex-item">
          <div class="fundIndex-item-name">深圳成指</div>
          <div class="decline">10611.55</div>
          <div class="decline"><span>-0.10%</span>&nbsp;&nbsp;<span>-10.21</span></div>
        </div>
        <div class="fundIndex-item">
          <div class="fundIndex-item-name">创业板指</div>
          <div class="rise">2015.80</div>
          <div class="rise"><span>0.18%</span>&nbsp;&nbsp;<span>3.55</span></div>
        </div>
      </div>
      <div class="item-table">
        <el-table
          :data="tableData"
          style="width: 100%"
          :header-cell-style="tableHeader"
        >

          <el-table-column
            label="基金名称"
            width="130"
          >
            <template slot-scope="scope">
              <div class="fundname">{{scope.row.name}}</div>
              <div class="fundcode">({{scope.row.code}})</div>
            </template>
          </el-table-column>
          <el-table-column
            prop='price'
            width="80"
            label="现价"
            sortable
          >
            <template slot-scope="scope">
              <div>{{scope.row.price}}</div>
              <div :class="[scope.row.todayRate[0]=='+'?'rise':'decline','fundrate']">{{scope.row.todayRate}}%</div>
            </template>
          </el-table-column>
          <el-table-column
            width="80"
            label="估价"
          >
            <template slot-scope="scope">
              <div>{{scope.row.valuation}}</div>
              <div :class="[scope.row.yedayRate[0]=='+'?'rise':'decline','fundrate']">{{scope.row.yedayRate}}%</div>
            </template>
          </el-table-column>
          <el-table-column
            width="100"
            label="历史增长"
            sortable
            prop='income'
          >
            <template slot-scope="scope">
              <div :class="[scope.row.income[0]=='+'?'rise':'decline']">{{scope.row.income}}</div>
            </template>
          </el-table-column>
          <el-table-column
            width="90"
            label="周增长"
            sortable
            prop='weekup'
          ><template slot-scope="scope">
              <div :class="[scope.row.weekup[0]=='+'?'rise':'decline']">{{scope.row.weekup}}</div>
            </template>
          </el-table-column>
          <el-table-column
            width="90"
            label="月增长"
            sortable
            prop='monthup'
          ><template slot-scope="scope">
              <div :class="[scope.row.monthup[0]=='+'?'rise':'decline']">{{scope.row.monthup}}</div>
            </template>
          </el-table-column>

        </el-table>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          code: "001630",
          name: "天弘中证计算机主题ETF联接C",
          price: "0.8181",
          valuation: "0.8180",
          yedayRate: "-1.26",
          todayRate: "-1.25",
          income: "-16.30",
          weekup: "-3.26",
          monthup: "-14.40"
        },
        {
          code: "161027",
          name: "富国中证全指证券公司",
          price: "0.9080",
          valuation: "0.9080",
          yedayRate: "-1.26",
          todayRate: "-1.25",
          income: "-1.09",
          weekup: "-1.26",
          monthup: "-9.92"
        },
        {
          code: "001707",
          name: "诺安高端制造股票",
          price: "1.0580",
          valuation: "1.0555",
          yedayRate: "-1.03",
          todayRate: "-1.69",
          income: "-11.83",
          weekup: "-3.02",
          monthup: "-14.47"
        },
        {
          code: "501016",
          name: "国泰中证申万证券行业指数(LOF)",
          price: "1.0010",
          valuation: "1.0009",
          yedayRate: "-0.03",
          todayRate: "+0.16",
          income: "-6.52",
          weekup: "-1.15",
          monthup: "-9.99"
        },
        {
          code: "001178",
          name: "前海开源再融资主题精选股票",
          price: "1.5102",
          valuation: "1.5948",
          yedayRate: "+1.89",
          todayRate: "+1.30",
          income: "+12.44",
          weekup: "+0.76",
          monthup: "-5.69"
        },
        {
          code: "004224",
          name: "南方军工改革灵活配置混合",
          price: "0.7899",
          valuation: "0.7895",
          yedayRate: "+0.98",
          todayRate: "+0.88",
          income: "+4.97",
          weekup: "-1.72",
          monthup: "-9.90"
        },
        {
          code: "005886",
          name: "华夏鼎沛债券A",
          price: "1.2249",
          valuation: "1.2544",
          yedayRate: "+0.54",
          todayRate: "-0.14",
          income: "+10.74",
          weekup: "-0.85",
          monthup: "-3.84"
        },
        {
          code: "161725",
          name: "招商中证白酒指数分级",
          price: "0.8871",
          valuation: "0.8856",
          yedayRate: "+2.60",
          todayRate: "+2.63",
          income: "+2.32",
          weekup: "+5.92",
          monthup: "-6.35"
        },
        {
          code: "002264",
          name: "华夏乐享健康灵活配置混合",
          price: "1.8180",
          valuation: "1.8025",
          yedayRate: "+0.26",
          todayRate: "+0.36",
          income: "-1.09",
          weekup: "+1.56",
          monthup: "-0.87"
        },
        {
          code: "162703",
          name: "广发小盘成长混合(LOF)A",
          price: "2.3824",
          valuation: "2.3856",
          yedayRate: "-2.69",
          todayRate: "-2.54",
          income: "-1.38",
          weekup: "-1.08",
          monthup: "-16.11"
        },
        {
          code: "206108",
          name: "锦顺长城新兴成长混合",
          price: "1.6740",
          valuation: "1.6680",
          yedayRate: "-0.06",
          todayRate: "+0.09",
          income: "+0.81",
          weekup: "+3.33",
          monthup: "-5.64"
        },
        {
          code: "005311",
          name: "万家经济新动能混合A",
          price: "1.6841",
          valuation: "1.6589",
          yedayRate: "+0.26",
          todayRate: "+0.25",
          income: "-0.94",
          weekup: "-1.81",
          monthup: "-16.16"
        }
      ]
    };
  },
  methods: {
    //内部链接跳转
    tofund(name) {
      this.$router.push({ name: name });
    },
    //表格头部样式
    tableHeader() {
      return {
        "background-color": "#f9f9f9",
        padding: "0",
        "text-align": "center"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>