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

!> v-model : ```[Number]``` range为false的时候使用

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| change     | 值改变时触发（使用鼠标拖曳时）   | Function | — | — |
| max    |  最大值   | Number  |    — | 100   |
| min     | 最小值   | Number    |  — |    0    |
| value     | 绑定值   | String  |    — | —   |
| range     | 是否显示范围   | Boolean  |    — | true   |
