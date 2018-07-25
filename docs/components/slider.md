# Slider 滑块
----
#### 基础用法
<vuep  :options="{ tabSize: 2 }"  template="#example"></vuep>

<script v-pre type="text/x-template" id="example">
  <template>
    <div>
      <div>
        <f-slider :change="valueFun" :min="20" :max="80"></f-slider>
      </div>
      <div>
        <f-slider :change="valueFun" v-model="slider" :range="false"></f-slider>
      </div>
    </div>
  </template>
  <script>
    export default {
      data: function () {
        return {
            slider:20
         }
      },
      methods: {
        valueFun(right, left, width) {
            console.log(right, left, width);
        },
      }
    }
  </script>
</script>

!> v-model : ```[String, Number]```

### 事件
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change     | 值改变时触发（使用鼠标拖曳时）   | 改变后的值 |

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 设置类型   | String  | text, password, email, number, tel, datetime-local, date, time | text  |
| name    | 设置input name   | String  |    — | —   |
| max     | 设置maxlength   | String    |  — |     —    |
| value     | 绑定值   | String  |    — | —   |
| readonly     | 是否readonly   | Boolean  |    — | false   |
| disabled     | 是否disabled   | Boolean  |    — | false   |
| autocomplete     | 是否autocomplete   | String  | on, off	   — | off   |
| placeholder     | 设置placeholder   | String  |    — | —   |
