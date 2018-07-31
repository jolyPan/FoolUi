<template>
  <button class="fool__btn" @click="handleClick" :style="{backgroundColor: bgColor, color: color, 'border-color':borderColor,fontSize:fontSize}" :class="['fool__btn--'+type,{'is-plain': plain, 'is-round': round,'circle':circle, 'is-long': long, 'fool__btn--block': block, 'no-radius': noRadius},iconClass]" :disabled="disabled">
    <i :class="icon" v-if="icon"></i>
    <i class="fool__icon--loading" v-if="loading && !icon"></i>
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'f-button',
  props: { //父组件传入的值
    type: {
      type: String,
      default: 'default'
    },
    long: Boolean,
    loading: {
      type: Boolean,
      default: false
    },
    noRadius: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: ''
    },
    borderColor: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    block: Boolean,
    disabled: Boolean,
    plain: Boolean,
    round: Boolean,
    circle:{
      type:Boolean,
      default:false
    },
    fontSize:{
      type: String,
      default: '1.6rem'
    }
  },
  methods: { //绑定的方法
    handleClick(event) {
      if (this.disabled) return
      this.$emit('click', event)  // 传播方法名为click，你也可以自定义其他名字
    }
  },
  computed: { //计算属性
    iconClass() {
      if (this.icon !== '') return 'fool__hasIconBtn'
    }
  }
}
</script>
