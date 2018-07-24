# Radio 单选框
----
##### 基础用法
<vuep  :options="{ tabSize: 2 }"  template="#example"></vuep>

<script v-pre type="text/x-template" id="example">
  <template>
    <div>
        <f-radio v-model="radio" :value="1">备选项1</f-radio>
        <f-radio v-model="radio" :value="2">备选项2</f-radio>
        <f-radio v-model="radio" disabled :value="3">备选项2</f-radio>
        <f-radio v-model="radio" checked :value="4">备选项2</f-radio>
    </div>
  </template>
  <script>
    export default {
      data: function () {
        return {
            radio:null
         }
      },
      methods: {}
    }
  </script>
</script>
### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | radio的value属性   | String, Number  |    — | —   |
| checked     | 是否默认选中   | Boolean    |   — |     false    |
| disabled  | 是否禁用状态    | Boolean   | —   | false   |

