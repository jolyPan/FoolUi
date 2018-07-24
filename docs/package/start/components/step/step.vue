<template>
  <div class="fool__steps fool__steps--horizontal">
    <div class="fool__steps--items">
      <div class="fool__step" :class="['fool__step--'+direction,
        {'fool__step--process':index<=step,
        'fool__step--finish':loading ? step>index+1 : step>index,
        'fool__step--loading':loading && loading&&index==step
        }]" v-for="(stepItem,index) in stepList" :stepItem="stepItem" :key="index">
        <div class="fool__step--circle-container">
          <i v-if="loading&&index==step" class="fool__icon--loading"></i>
          <i v-else-if="index<=step" class="fool__icon--checked"></i>
          <i v-else class="fool__step--circle"></i>
        </div>
        <div class="fool__step--title">
          {{stepItem}}
        </div>
        <div class="fool__step--line">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'f-step',
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