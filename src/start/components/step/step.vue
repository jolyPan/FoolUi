<template>
  <div class="xm__steps xm__steps--horizontal">
    <div class="xm__steps--items">
      <div class="xm__step" :class="['xm__step--'+direction,
        {'xm__step--process':index<=step,
        'xm__step--finish':loading ? step>index+1 : step>index,
        'xm__step--loading':loading && loading&&index==step
        }]" v-for="(stepItem,index) in stepList" :stepItem="stepItem" :key="index">
        <div class="xm__step--circle-container">
          <i v-if="loading&&index==step" class="xm__icon--loading"></i>
          <i v-else-if="index<=step" class="xm__icon--checked"></i>
          <i v-else class="xm__step--circle"></i>
        </div>
        <div class="xm__step--title">
          {{stepItem}}
        </div>
        <div class="xm__step--line">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'xm-step',
  props: {
    step: {
      type: Number,
      default: 0
    },
    stepList: {
      type: Array,
      default: () => { }
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    loading:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      nowStep: ''
    }
  }
}
</script>