/* eslint-disable */
import {
  hxMd5
} from './md5'

const BASE_PARAM_LIST = [
  'channel',
  'market',
  'deviceId',
  'version'
]
export const encrypt = {
  getSign: function (obj) { //生成签名
    if (obj.sign) delete obj.sign;
    var a = [];

    for (var name in obj) {
      a.push(name + '=' + (encrypt.isBaseParams(name) ? obj[name] : encodeURI(obj[name])))
    }
    var seq = a.join('&').replace(/~/g, "%7E");

    var arr = seq.split("&");

    var keyString = arr.sort().join("&");


    if (keyString.indexOf(":") != -1) {
      keyString = keyString.replace(/:/g, "%3A");
    }

    if (keyString.indexOf("@") != -1) {
      keyString = keyString.replace(/@/g, "%40");
    }
    if (keyString.indexOf(",") != -1) {
      keyString = keyString.replace(/,/g, "%2C");
    }

    var md5key = hxMd5(keyString).toUpperCase();

    return this.encryptSign(md5key);
  },
  encryptSign: function (md5key) { //加密
    var chars = ["a", "b", "c", "d", "e", "f", "g", "h",
      "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
      "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5",
      "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H",
      "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
      "U", "V", "W", "X", "Y", "Z"
    ];

    var sTempSubString = md5key.substring(0, 8);

    var lHexLong = 0x3FFFFFFF & parseInt(sTempSubString, 16);

    var outChars = "";

    for (var j = 0; j < 6; j++) {
      var index = 0x0000003D & lHexLong;
      outChars += chars[parseInt(index)];
      lHexLong = lHexLong >> 5;
    }

    return outChars;
  },
  getParams: function (data) {
    let params = JSON.parse(JSON.stringify(data))
    if (params) {
      params.channel = "web";
      params.market = "appstore";
      params.deviceId = '1235sadf134rawd13dewad32';
      params.version = '1.0';
      params.sign = encrypt.getSign(params);
    }
    return params;
  },
  isBaseParams(key) {
    return BASE_PARAM_LIST.includes(key)
  }
};
