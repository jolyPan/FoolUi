# Button 按钮
----
#### 基础用法
<vuep  :options="{ tabSize: 2 }"  template="#example"></vuep>

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| long     | 长按钮   | Boolean  |    — | false   |
| loading     | 是否有加载效果   | Boolean  |    — | false   |
| type     | 类型   | String    |   primary,success,warning,danger,info |     —    |
| plain     | 是否简约按钮   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | Boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | String   |  —  |  —  |
| round     | 圆角   | Boolean  |    — | false   |
| block     | 块级按钮   | Boolean  |    — | false   |
| bg-color     | 背景颜色   | String    | 自定义 |     —    |
| color     | 文字颜色   | String    |  自定义 |     —    |
| border-color     | 边框颜色   | String    |   自定义 |     —    | 
| no-radius     | 无边框   | String    |   自定义 |     —    | 
| font-size     | 自定义按钮字体大小   | String    |   自定义 |     1.6rem    | 

<script v-pre type="text/x-template" id="example">
  <template>
      <div>
        <f-button @click="btnClick">普通</f-button>
        <f-button type="primary" icon="fool__icon--refresh">主要</f-button>
        <f-button type="error" icon="fool__icon--likefill"></f-button>
        <f-button type="warning" disabled>禁止</f-button>
        <f-button plain>简约</f-button>
        <f-button loading no-radius type="primary">loading状态</f-button>
        <f-button no-radius bg-color="#f56c6c" color="#fff" border-color="#f56c6c">自定义颜色</f-button>
        <f-button no-radius>无圆角</f-button>
        <f-button no-radius type="text" icon="fool__icon--checked">文字</f-button>
        <f-button circle type="primary" icon="fool__icon--refresh"></f-button>
        <f-button circle type="success" icon="fool__icon--checked"></f-button>
        <f-button circle icon="fool__icon--search"></f-button>
        <f-button circle type="error" icon="fool__icon--delete"></f-button>
        <f-button circle type="warning" icon="fool__icon--lock"></f-button>
        <f-button round long>100%宽圆角</f-button>
      </div>
  </template>
  <script>
    export default {
      data: function () {
        return { }
      },
      methods: {
        btnClick() {
          this.$Toast.text({content: 2})
        },
      }
    }
  </script>
</script>