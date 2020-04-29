const regPassword = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/;
const regiIDCard = /(^[1-9]\d{14}$)|(^[1-9]\d{17}$)|(^[1-9]\d{16}(\d|X|x)$)/;
const regTel = /^1[3|4|5|6|7|8|9][0-9]{9}$/

const util = {
  //验证是否为有效密码
  isPassword(num) {
    return regPassword.test(num)
  },
  //验证是否为有效身份证
  isIDCard(num) {
    return regiIDCard.test(num)
  },
  //验证是否为有效手机号码
  isTel(num) {
    return regTel.test(num)
  },
  //判断数值是正还是负
  PoN(str){
    return ~(str)>=0?true:false
  },
  isNumber(val) {
    var regPos = /^\d+(\.\d+)?$/; //非负浮点数
    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    if(regPos.test(val) || regNeg.test(val)) {
        return true;
        } else {
        return false;
        }
    }
}
export default {
  util
}
