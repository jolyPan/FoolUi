<template>
    <div class="fool__grids" :class="'fool__grids--'+row">
      <slot></slot>
    </div>
</template>

<script>

export default {
  name: 'f-grids',
  props: {
    row: {
      type: String,
      default: '4'
    }
  }
}
</script>

<style scoped lang="scss">

</style>
