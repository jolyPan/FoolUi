[![NPM version](https://img.shields.io/npm/v/v-fool.svg)](https://www.npmjs.com/package/v-fool)

# FoolUi

> 基于vue2.x，可复用UI组件

## 安装

``` bash
npm install v-fool --save
```
## 快速开始
``` bash
import Vue from 'vue'
import Fool from 'v-fool'
import 'v-fool/package/foolui.min.css'  
 
Vue.use(Fool)
```
## 浏览器支持
``` bash
- 现代浏览器和IE10+
```

## 按需引入 -- 在 入口文件 main.js 或 组件内 中如下配置

``` bash
# 全局组件 main.js引入
import Toast from 'v-fool/package/start/components/toast'
Vue.prototype.$toast = Toast

# 一般组件
import Button from 'v-fool/package/start/components/button'
import ButtonGroup from 'v-fool/package/start/components/buttongroup'
...

components: {
    Button,
    ButtonGroup,
    ...
}
``` 
## 查看示例  

[在线示例](https://jolypan.github.io/FoolUi/dist/#/?_blank) 