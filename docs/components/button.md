# Button 按钮
#### 基础用法
# Button 按钮
----
### 基础用法
使用```type```、```plain```、```icon```、```loading```、```long```、```bg-color```、```color```、```border-color```、```no-radius```、```block```和```round```属性来定义 Button 的样式。
``` html
<f-button>普通</f-button>
<f-button type="primary" @click="btnClick" icon="xm__icon--refresh">主要</f-button>
<f-button type="error" icon="xm__icon--likefill"></f-button>
<f-button type="warning" disabled>禁止</f-button>
<f-button plain>简约</f-button>
<f-button loading no-radius type="primary">loading状态</f-button>
<f-button no-radius bg-color="#f56c6c" color="#fff" border-color="#f56c6c">自定义颜色</f-button>
<f-button no-radius>无圆角</f-button>
<f-button no-radius type="text" icon="xm__icon--checked">文字</f-button>
<f-button circle type="primary" @click="btnClick" icon="xm__icon--refresh"></f-button>
<f-button circle type="success" icon="xm__icon--checked"></f-button>
<f-button circle @click="btnClick" icon="xm__icon--search"></f-button>
<f-button circle type="error" icon="xm__icon--delete"></f-button>
<f-button circle type="warning" icon="xm__icon--lock"></f-button>
<f-button round long>100%宽圆角</f-button>
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| long     | 长按钮   | Boolean  |    — | false   |
| loading     | 是否有加载效果   | Boolean  |    — | false   |
| type     | 类型   | string    |   primary,success,warning,danger,info |     —    |
| plain     | 是否简约按钮   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | Boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
| round     | 圆角   | Boolean  |    — | false   |
| block     | 块级按钮   | Boolean  |    — | false   |
| bg-color     | 背景颜色   | string    | 自定义 |     —    |
| color     | 文字颜色   | string    |  自定义 |     —    |
| border-color     | 边框颜色   | string    |   自定义 |     —    | 
| no-radius     | 无边框   | string    |   自定义 |     —    | 

