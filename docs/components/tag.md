# Tag 标签
----
#### 基础用法
<vuep  :options="{ tabSize: 2 }"  template="#example"></vuep>

### 事件
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| close     | 点击关闭按钮的时候触发   | — |

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| closable     | 是否显示关闭按钮   | Boolean  |    — | false   |
| type     | 类型   | String    |   primary,success,warning,danger,info |     —    |
| bg-color     | 背景颜色   | String    | 自定义 |     —    |
| color     | 文字颜色   | String    |  自定义 |     —    |
| border-color     | 边框颜色   | String    |   自定义 |     —    | 
| round     | 圆角   | Boolean  |    — | false   |

<script v-pre type="text/x-template" id="example">
  <template>
    <div>
    <f-tag>default</f-tag>
    <f-tag v-if="closeFlag" closable @close="close">close</f-tag>
    <f-tag type="primary">primary</f-tag>
    <f-tag type="success">success</f-tag>
    <f-tag type="warning">warning</f-tag>
    <f-tag type="error">error</f-tag>
    <f-tag round bg-color="#fc0" color="#e0439a" border-color="#fc0">自定义颜色</f-tag>
    </div>
  </template>
  <script>
    export default {
      data: function () {
        return {
            closeFlag:true
         }
      },
      methods: {
        close() {
            this.closeFlag = false;
        },
      }
    }
  </script>
</script>