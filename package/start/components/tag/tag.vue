<template>
  <transition name="custom-classes-transition" leave-active-class="animated flipOutY">
    <div class="xm_tag" :class="['xm_tag--' + type,{round:round}]" :style="{backgroundColor:bgColor,borderColor:borderColor,color:color}">
      <span>
        <slot>
        </slot>
      </span>
      <i class="xm__icon--close" v-if="closable" @click="closeAction"></i>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'xm-tag',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    closable: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    borderColor: {
      type: String,
      default: ''
    },
    round: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      flipOutY: false
    }
  },
  methods: {
    closeAction() {
      this.$emit('close')
    }
  },
  beforeDestroy() {
    this.flipOutY = true
  }
}
</script>