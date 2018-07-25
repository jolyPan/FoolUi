# Steps 步骤条
----
#### 基础用法
<vuep  :options="{ tabSize: 2 }"  template="#example"></vuep>

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| step     | 设置当前步骤的下标   | Number  |    — | 0   |
| step-list     | step集合   | Array    | 自定义 |     []   |
| loading     | 设置当前步骤是否loading状态   | Boolean    |   - |     false    | 

<script v-pre type="text/x-template" id="example">
  <template>
      <div>
        <f-step :loading="loading" :step="step" :step-list="stepList"></f-step>
        <div>
            <f-button type="primary" @click="next" icon="fool__icon--refresh">下一步</f-button>
        </div>
      </div>
  </template>
  <script>
    export default {
      data: function () {
        return {
            stepList: ['步骤一', '步骤二', '步骤三', '步骤四'],
            step: 1,
            loading:true,
         }
      },
      methods: {
        next() {
            if (this.loading) {
                this.loading = false
            } else {
                this.loading = true
                if (this.step >= 3) {
                this.step = 0
                } else {
                this.step++
                }
            }
        },
      }
    }
  </script>
</script>