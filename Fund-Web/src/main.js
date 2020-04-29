// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import "./lib/rem";
import router from './router'
import VueRoutes from 'vue-router'
import ajax from './api/index'
import urlMap from './api/urlMap'
import util from './lib/util'
import App from './App'
import g from './lib/data';
require('./mock/index')
import 'element-ui/lib/theme-chalk/index.css';



// 第三方组件
import {
  /* eslint-disable no-unused-vars */
  // Style,
  Toast,
  Dialog,
  Slide,
} from 'cube-ui'

import {
  CarouselItem,
  Carousel,
  Progress,
  InfiniteScroll,
  Input,
  Autocomplete,
  Button,
  Table,
  TableColumn
} from 'element-ui'
// 注册第三方组件
Vue.use(Progress)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Input)
Vue.use(Toast)
Vue.use(Dialog)
Vue.use(Slide)
Vue.use(InfiniteScroll)
Vue.use(Autocomplete)
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.config.productionTip = false
Vue.use(VueRoutes)
/* eslint-disable no-new */
const originalPush = VueRoutes.prototype.push

VueRoutes.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.prototype.$g = g 
Vue.prototype.$ajax = ajax
Vue.prototype.$urlMap = urlMap
Vue.prototype.$util = util.util

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
