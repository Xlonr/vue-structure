<template>
  <div class="pagination-operator">
    <span class="pagination-operator_arrow" @click="pagePrev"><i class="iconfont icon-left"></i></span>
    <slot name="cont"></slot>
    <span class="pagination-operator_arrow" @click="pageNext"><i class="iconfont icon-arrow-right"></i></span>
  </div>
</template>

<script>
export default {
  created () {
  },
  mounted () {
  },
  data () {
    return {
    }
  },
  methods: {
    pagePrev () {
      this.$emit('changePaging', 'prev')
    },
    pageNext () {
      this.$emit('changePaging', 'next')
    }
  }
}
</script>
