// import qiniu from "qiniu";

export const DBpath = "mongodb://47.100.58.125:27017/Fund";
export const DBUsername = "fund";
export const DBPassword = "fund";

// // 七牛云上传凭据
// export const qiniuConfig = {
//   accessKey: "V9G9_4w32Ez6nxHni1qYVsvOWImV6elNUsFHxWcJ",
//   secretKey: "vA9Zrw6S9-5vKSA0pLWOpZ1MOvYFtkbsOSlAcsHq",
//   server: "https://upload-z2.qiniup.com",
//   client: "http://qiniu.yezijun.top",
//   bucket: "yzj-light"
// };

// export const mac = new qiniu.auth.digest.Mac(
//   qiniuConfig.accessKey,
//   qiniuConfig.secretKey
// );
// export const qiniuCdnManger = new qiniu.cdn.CdnManager(mac);
// export const qiniuBucketManager = new qiniu.rs.BucketManager(mac);

// token密钥
export const signKey = "biubiubiu";
