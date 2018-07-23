<template>
  <transition>
    <div class="fool__loading--wrap">
      <div class="fool__mask" v-if="fullScreen"></div>
      <div class="fool__loading bounceInDown animated" :class="[
          {'fool__loading--fullScreen':fullScreen}
          ]">
        <span class="fool__loading--loader" :class="[
          {'fool__loading--vertical':vertical,'borderRightTransparent':color}
          ]" :style="{'width': width+'px','height': height+'px','border-color': color,'border-width': borderWidth+'px'}"></span>
        <span class="fool__loading--text" v-if="hasText">
          <slot>加载中...</slot>
        </span>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'f-loading',
  props: {
    color: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    borderWidth: {
      type: String,
      default: ''
    },
    fullScreen: {
      type: Boolean,
      default: false
    },
    hasText: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
</style>
