<template>
    <label class="xm__checkbox" :class="[{'disabled':disabled}]">
        <span class="xm__checkbox--input">
          <span class="xm__checkbox--inner" :class="[{'is-checked':isChecked}]"></span>
          <input :name='name' :checked="checked" ref="checkbox" type="checkbox" :value="value" @change="onChange" :disabled="disabled" v-model="checkedModels"/>
        </span>
        <span class="xm__checkbox--text">
          <slot></slot>
        </span>
    </label>
</template>

<script>
export default {
  name: 'xm-checkbox',
  model: {
    prop: 'model',
    event: 'change'
  },
  props: {
    value: [String, Number],
    disabled: Boolean,
    model: {
      type:[Boolean,Array],
      default:null
    },
    name:{
      type:String,
      default:null
    },
    checked:{
      type:Boolean,
      default:false
    }
  },
  watch:{
    checked:{
      handler:function(){
        this.inint()
      },
      deep:true
    }
  },
  mounted(){
    this.inint()
  },
  data () {
    return {
      checkedModels: [],
      isChecked:false
    }
  },
  methods: {
    inint(){
      this.$refs.checkbox.checked = this.checked
      this.isChecked = this.$refs.checkbox.checked
    },
    onChange (event) { // @change 组件改变后的操作
      if (this.disabled) {
        return
      }
      if(typeof this.model === 'boolean'){
        this.isChecked = this.$refs.checkbox.checked
        this.$emit('change', this.isChecked)
      }else if(Object.prototype.toString.call(this.model)=='[object Array]'){
        this.isChecked = this.$refs.checkbox.checked
        let checkboxlist = document.querySelectorAll('input[type="checkbox"][name='+ '"' +this.name+ '"' +']')
        let checkedlist = []
        for (let index = 0; index < checkboxlist.length; index++) {
          const element = checkboxlist[index];
          if(element.checked){
            checkedlist.push(element.value)
          }
        }
        this.$emit('change', checkedlist)
      }
    }
  }
}
</script>
