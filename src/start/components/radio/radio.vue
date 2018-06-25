<template>
    <div class="xm-radio-wrap">
        <!--这里设置了选中后的radio样式类,和禁用后的样式类-->
        <label class="xm-radio" :class="{'checked':model==value,'disabled':disabled}">
            <input type="radio" ref="radio" :value="value" @click="updateVal" :disabled="disabled">
        </label>
      <span class="content"><slot></slot></span>
    </div>
</template>

<script>
export default {
  name:'xm-radio',//radio组件名称
  model: {//自定义 v-model的 prop和event,这个定义的意思就是使用change事件更新model的值,以此来实时更新v-model的值
    prop: 'model',
    event: 'change'
  },
  props:{
    value:{//radio的value属性
      type:[String,Number],
      required: true,
      require:true
    },
    model:{//这里的model指的是上面定义的v-model的prop
      type:[String,Number],
      require:true
    },
    checked:{//是否默认选中
      type:Boolean,
      default:false
    },
    disabled:{//是否禁用
      type:Boolean,
      default:false
    },
  },
  mounted(){//当dom渲染完成,判断组件是否默认选中
    if(this.checked===true){
      this.updateVal();
    }
  },
  methods:{
    updateVal(){//当用户点击radio时,触发change事件更新v-model
      this.$emit('change',this.$refs.radio.value);
      this.$emit('input',this.$refs.radio.value);
    }
  }
}
</script>