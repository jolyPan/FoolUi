# MessageBox 弹框
----
#### 基础用法
<vuep  :options="{ tabSize: 2 }"  template="#example"></vuep>

> $Alert(content, title, options)

-   content 弹窗内容

-   title 标题 

-   options    isShowCancelBtn：是否显示取消按钮， isShowConfimrBtn：是否显示确认按钮， cancelBtnText：取消按钮文本， confirmBtnText：确认按钮文本 

> $Prompt()

<script v-pre type="text/x-template" id="example">
  <template>
    <div>
      <f-button @click="messagebox">消息提示</f-button>
      <f-button type="primary" @click="cancelmessagebox">确认消息</f-button>
      <f-button type="error" @click="prompt">提交内容</f-button>
    </div>
  </template>
  <script>
    export default {
      data: function () {
        return {
            radio:null
         }
      },
      methods: {
        prompt(){
          this.$Prompt({
              isShowCancelBtn:true,
              isShowConfimrBtn:true
            }).then(function(value){
              console.log(value)
            },function(value){
              console.log(value)
            })
        },
        cancelmessagebox(){
          this.$Alert('标题名称','这是一段内容！',{
            isShowCancelBtn:true,
            isShowConfimrBtn:true
          }).then(function(value){
            console.log(value)
          },function(value){
            console.log(value)
          })
        },
        messagebox(){
          this.$Alert().then(function(value){
            console.log(value)
          },function(value){
            console.log(value)
          })
        },
      }
    }
  </script>
</script>