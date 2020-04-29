import axios from 'axios'
import {Decrypt,Encrypt} from '../lib/crypto';
const ajax = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  }
})

// 签名 interceptors(拦截器)
ajax.interceptors.request.use(config => {
  const method = config.method.toLowerCase()
  if (['post', 'put'].includes(method)) {
    config.data = Encrypt(config.data || {})
  } else if (['get', 'delete'].includes(method)) {
    config.params = Encrypt(config.params || {})
  }
  return config
})

ajax.interceptors.response.use(config => {
  config.data =Decrypt(config.data);
  return config
})

export default ajax
