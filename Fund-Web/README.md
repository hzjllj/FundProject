# vue-demo2

> A Vue.js project

## 介绍

本课题研究方向是Vue.js的基金交易H5通用模板，
主要分五大模块：
基金首页模块：广告轮播图、基金搜索、系统功能推荐、基金达人推荐、基
金推荐、资讯轮播图、资讯热点等。
基金自选模块：指数查看、自选基金表现查看、基金搜索等。
个人资产模块：买入、卖出、交易记录、我的资产、我的基金等。
基金资讯模块：资讯轮播图、个体资讯信息展示等。
我的设置模块：热点功能展示、活动中心、财富日记、投诉建议、常见问题、帮助设置、客服中心等

未实现功能 买入、卖出、交易记录、活动中心、财富日记、投诉建议、常见问题、帮助设置、客服中心

可通过 http://hzj-llj.cn 打开查看

登录账户  1
登录密码  1 

若要注册 则验证码为 123456

PS
基金详情页需要在搜索栏里搜索，或者点击热点基金才能跳转进去

买入界面需要在基金详情页里的 申购 按钮进行跳转

交易费率需要在基金详情页里的 交易费率 点击进行跳转


## 界面图片

![登录页](https://github.com/hzjllj/FundProject/raw/master/Fund-Web/doc/登录页面.png "登录页面")

![注册](https://github.com/hzjllj/FundProject/raw/master/Fund-Web/doc/注册1.png "注册1")

![注册](https://github.com/hzjllj/FundProject/raw/master/Fund-Web/doc/注册2.png "注册2")

![注册](https://github.com/hzjllj/FundProject/raw/master/Fund-Web/doc/注册3.png "注册3")

![个人页](https://github.com/hzjllj/FundProject/raw/master/Fund-Web/doc/个人页.png "个人页")

![首页](https://github.com/hzjllj/FundProject/raw/master/Fund-Web/doc/首页1.png "首页1")

![首页](https://github.com/hzjllj/FundProject/raw/master/Fund-Web/doc/首页2.png "首页2")

![资产页](https://github.com/hzjllj/FundProject/raw/master/Fund-Web/doc/资产页-未登录.png "资产页-未登录")

![资产页](https://github.com/hzjllj/FundProject/raw/master/Fund-Web/doc/资产页-登录.png "资产页-登录")

![资讯页](https://github.com/hzjllj/FundProject/raw/master/Fund-Web/doc/资讯页.png "资讯页")

![自选页](https://github.com/hzjllj/FundProject/raw/master/Fund-Web/doc/自选页.png "自选页")

![搜索页](https://github.com/hzjllj/FundProject/raw/master/Fund-Web/doc/搜索页.png "搜索页")

![基金详情](https://github.com/hzjllj/FundProject/raw/master/Fund-Web/doc/基金详情1.png "基金详情1")

![基金详情](https://github.com/hzjllj/FundProject/raw/master/Fund-Web/doc/基金详情2.png "基金详情2")

![交易费率](https://github.com/hzjllj/FundProject/raw/master/Fund-Web/doc/交易费率.png "交易费率")


---

## Build Setup

``` bash
# 安装依赖
npm install

# 运行命令
npm run dev

# 打包命令
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 重要目录解释
本地后台域名更改地址
src/api/index.js

> 接口列表地址
src/api/urlMap.js

> 图片存放目录
src/assets

> 路由
src/router/index.js

> 全局CSS
static/css

> 移动布局适配CSS与lib/rem.js配合使用
src/style



For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
