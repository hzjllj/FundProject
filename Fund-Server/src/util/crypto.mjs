import CryptoJS from "crypto-js";

const key = CryptoJS.enc.Utf8.parse("1412CAB2DE34123F"); //十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse("A1234BC3412DEF12"); //十六位十六进制数作为密钥偏移量

//解密方法
export function Decrypt(word) {
  let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  let decrypt = CryptoJS.AES.decrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return JSON.parse(decryptedStr.toString());
  
}

//加密方法
export function Encrypt(word) {
  word = JSON.stringify(word)
  let srcs = CryptoJS.enc.Utf8.parse(word);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.ciphertext.toString().toUpperCase();
  
}
