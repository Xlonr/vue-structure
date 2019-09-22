<template>
  <div class="pagination-operator">
    <div class="pagination-operator_btn" @click="pagePrev">上一页</div>
    <slot name="cont"></slot>
    <div class="pagination-operator_btn" @click="pageNext">下一页</div>
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
