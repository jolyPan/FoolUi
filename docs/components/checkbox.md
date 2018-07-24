# Checkbox 多选框
----
##### 基础用法
<vuep  :options="{ tabSize: 2 }"  template="#example"></vuep>

<script v-pre type="text/x-template" id="example">
  <template>
    <div>
        <f-checkbox v-model="checkbox" checked disabled value="1" name="1" @change="input">巴士</f-checkbox>
        <f-checkbox v-model="checkbox" value="2" name="1" @change="input">火车</f-checkbox>
        <f-checkbox v-model="checkbox" value="3" name="1" @change="input" disabled>飞机--disabled</f-checkbox>
        <f-checkbox v-model="checkbox" value="4" name="1" @change="input">单车</f-checkbox>
    </div>
  </template>
  <script>
    export default {
      data: function () {
        return {
            checkbox:2
         }
      },
      methods: {
        input(value) {
            console.log(this.checkbox);
        },
      }
    }
  </script>
</script>
### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | checkbox的value属性   | String, Number  |    — | —   |
| checked     | 是否默认选中   | Boolean    |   — |     false    |
| disabled  | 是否禁用状态    | Boolean   | —   | false   |
| name  |  checkbox的name属性   | String   | —   | —   |


