<template>
    <div class="wrap">
      <h3>{{ msg }}</h3>
      <h2>基础组件</h2>
      <h3>按钮</h3>
      <xm-button>普通</xm-button>
      <xm-button type="primary" @click="btnClick" icon="xm__icon--checked" >主要</xm-button>
      <xm-button type="error" icon="xm__icon--checked"></xm-button>
      <xm-button type="warning" disabled>禁止</xm-button>
      <xm-button plain>简约</xm-button>
      <xm-button type="text" icon="xm__icon--checked">文字</xm-button>
      <xm-button loading type="success">loading状态</xm-button>
      <xm-button bg-color="#fc0" color="#e0439a" border-color="#fc0">自定义颜色</xm-button>
      <br/><br/>
      <xm-button bg-color="#fcb" color="#e0439a" border-color="#fcb" block no-radius class="btn__block">无圆角块状</xm-button>
      <br/>
      <xm-button round long>100%宽圆角</xm-button>
      <br/><br/>
      <xm-button-group class="btn__group">
        <xm-button type="warning">警告</xm-button>
        <xm-button type="primary" @click="btnClick" icon="xm__icon--checked" >主要</xm-button>
        <xm-button type="success" icon="xm__icon--loading">成功</xm-button>
      </xm-button-group>
      <h3>标签</h3>
      <xm-tag>default</xm-tag>
      <xm-tag v-if="closeFlag" closable @close="close">close</xm-tag>
      <xm-tag type="primary">primary</xm-tag>
      <xm-tag type="success">success</xm-tag>
      <xm-tag type="warning">warning</xm-tag>
      <xm-tag type="error">error</xm-tag>
      <xm-tag  round bg-color="#fc0" color="#e0439a" border-color="#fc0">自定义颜色</xm-tag>
      <h3>单选按钮</h3>
      <xm-radio v-model="radio" :value="1">备选项1</xm-radio>
      <xm-radio v-model="radio" :value="2">备选项2</xm-radio>
      <xm-radio v-model="radio" disabled :value="3">备选项2</xm-radio>
      <xm-radio v-model="radio" checked :value="4">备选项2</xm-radio>
      <h3>复选按钮</h3>
      <xm-checkbox v-model="checkbox" checked   disabled value="1" name="1" @change="input">巴士</xm-checkbox>
      <xm-checkbox v-model="checkbox" value="2" name="1" @change="input">火车</xm-checkbox>
      <xm-checkbox v-model="checkbox" value="3" name="1" @change="input" disabled>飞机--disabled</xm-checkbox>
      <xm-checkbox v-model="checkbox" value="4" name="1" @change="input">单车</xm-checkbox>
    </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
        msg: `Fool-ui - 基于vue2.x，可复用UI组件`,
        closeFlag:true,
        radio:null,
        checkbox:[],
    }
  },
  methods:{
    btnClick () {
      this.$toast.text({
        content:'风波之',
      })
    },
    close(){
      this.closeFlag = false
    },
    radioChange(){
      console.log(this.checkbox)
    },
    input(value){
      console.log(this.checkbox)
    }
  }
}
</script>
<style scoped>

</style>
