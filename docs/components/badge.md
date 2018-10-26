# Badge 标记
----
#### 基础用法
<vuep  :options="{ tabSize: 2 }"  template="#example"></vuep>

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | 显示值   | String, Number  |    — | -   |
| bg-color     | 背景颜色   | String    | 自定义 |     —    |
| color     | 文字颜色   | String    |  自定义 |     —    |
| border-color     | 边框颜色   | String    |   自定义 |     —    | 
| hidden     | 隐藏标记   | Boolean    | — | false   |
| max     | 最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型   | Number    | — | false   |
| is-dot  | 小圆点    | Boolean   | —   | false   |

<script v-pre type="text/x-template" id="example">
  <template>
      <div>
        <f-badge :value="5">
        <f-button plain>评论</f-button>
        </f-badge>
        <f-badge :value="10">
        <f-button plain>回复</f-button>
        </f-badge>
        <f-badge :value="100" :max="99">
        <f-button plain>点赞</f-button>
        </f-badge>
        <f-badge is-dot>
        <f-button plain>关注</f-button>
        </f-badge>
        <f-badge bg-color="#fc0" color="#e0439a" value="自定义">
        <f-button plain>自定义颜色</f-button>
        </f-badge>
        <f-badge value="new">
        </f-badge>
        <f-badge value="hot">
        </f-badge>
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