# Input 输入框
----
#### 基础用法
<vuep  :options="{ tabSize: 2 }"  template="#example"></vuep>

!> v-model : ```[String, Number]```

### 事件
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| input     | 绑定值变化时触发的事件   | 输入绑定值 |
| blur     | 失焦方法   | 输入绑定值  |
| focus    | 聚焦方法   | 输入绑定值  |

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


<script v-pre type="text/x-template" id="example">
  <template>
    <div>
        <f-input slot="right" v-model="value1" name="name1" max="10" placeholder="请输入用户名" @blur="inputAction1" @focus="inputAction2"></f-input>
        <f-input slot="right" type="password" v-model="value1" placeholder="请输入密码"></f-input>
        <span slot="leftIcon" class="f__icon--phone"></span>
        <f-input slot="right" type="tel" v-model="value1" placeholder="请输入手机号"></f-input>
        <f-input slot="right" :value="value1" placeholder="这里是readonly" readonly></f-input>
        <span slot="rightIcon" class="f__icon--delete"></span>
        <f-input slot="right" :value="value1" placeholder="这里是disabled"   disabled></f-input>
        <span slot="rightIcon" class="f__icon--delete"></span>
    </div>
  </template>
  <script>
    export default {
      data: function () {
        return {
            value1:''
         }
      },
      methods: {
        inputAction1() {
           console.log(this.value1);
        },
        inputAction2() {
            
        }
      }
    }
  </script>
</script>