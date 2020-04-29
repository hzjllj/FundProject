<template>
  <div class="column">
    <div class="title-box row">
      <img
        src="../../../assets/public/back.png"
        class="shutDown-img"
        @click="backPage"
      />
      <div class="title-text">
        <div>交易费率</div>
      </div>
    </div>
    <div class="body-box">
      <div class="body-box-text">交易确认日</div>
      <table class="table-style">
        <tr>
          <td>申购确认日</td>
          <td>T+1</td>
        </tr>
        <tr>
          <td>赎回确认日</td>
          <td>T+1</td>
        </tr>
      </table>
      <div class="body-box-text">前端申购费</div>
      <table class="table-style">
        <tr class="th-style">
          <td>申购金额(M)</td>
          <td>申购费率</td>
        </tr>
        <tr>
          <td>M&lt;100万</td>
          <td>1.50%</td>
        </tr>
        <tr>
          <td>100万≤M&lt;500万</td>
          <td>1.00%</td>
        </tr>
        <tr>
          <td>500万≤M&lt;1000万</td>
          <td>0.30%</td>
        </tr>
        <tr>
          <td>1000万≤M</td>
          <td>2000元/笔</td>
        </tr>
      </table>
      <div class="body-box-text">后端申购费</div>
      <table class="table-style">
        <tr class="th-style">
          <td>持有时间(Y)</td>
          <td>申购费率</td>
        </tr>
        <tr>
          <td>Y&lt;1年</td>
          <td>1.80%</td>
        </tr>
        <tr>
          <td>1年≤Y&lt;2年</td>
          <td>1.60%</td>
        </tr>
        <tr>
          <td>2年≤Y&lt;3年</td>
          <td>0.50%</td>
        </tr>
        <tr>
          <td>3年≤M</td>
          <td>0.00%</td>
        </tr>
      </table>
      <div class="body-box-text">认购费</div>
      <table class="table-style">
        <tr class="th-style">
          <td>认购金额(M)</td>
          <td>认购金额(M)</td>
        </tr>
        <tr>
          <td>M&lt;100万</td>
          <td>1.20%</td>
        </tr>
        <tr>
          <td>100万≤M&lt;500万</td>
          <td>1.00%</td>
        </tr>
        <tr>
          <td>500万≤M&lt;1000万</td>
          <td>1.00%</td>
        </tr>
        <tr>
          <td>1000万≤M</td>
          <td>1.00%</td>
        </tr>
      </table>
      <div class="body-box-text">赎回费</div>
      <table class="table-style">
        <tr class="th-style">
          <td>持有时间(Y)</td>
          <td>申购费率</td>
        </tr>
        <tr>
          <td>Y&lt;1年</td>
          <td>0.5%</td>
        </tr>
        <tr>
          <td>1年≤Y&lt;2年</td>
          <td>0.35%</td>
        </tr>
        <tr>
          <td>2年≤Y&lt;3年</td>
          <td>0.10%</td>
        </tr>
        <tr>
          <td>3年≤M</td>
          <td>0.00%</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    backPage() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>