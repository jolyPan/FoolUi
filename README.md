[![NPM version](https://img.shields.io/npm/v/fool-ui.svg)](https://www.npmjs.com/package/fool-ui)

# FoolUi

> 基于vue2.x，可复用UI组件 [在线示例](https://jolypan.github.io/FoolUi/dist/#/) [在线文档](https://jolypan.github.io/FoolUi/#/)

## 安装

``` bash
npm install v-fool
```
## 快速开始
``` bash
import Vue from 'vue'
import Fool from 'fool-ui'
import 'fool-ui/package/foolui.min.css'  
 
Vue.use(Fool)
```
## 浏览器支持
``` bash
- 现代浏览器和IE10+
```

## 按需引入 -- 在 入口文件 main.js 或 组件内 中如下配置

``` bash
# 全局组件 main.js引入
import Toast from 'fool-ui/package/start/components/toast'
Vue.prototype.$toast = Toast

# 一般组件
import Button from 'fool-ui/package/start/components/button'
import ButtonGroup from 'fool-ui/package/start/components/buttongroup'
...

components: {
    Button,
    ButtonGroup,
    ...
}
``` 