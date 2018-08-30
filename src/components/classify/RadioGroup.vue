<template>
    <div>
        <label class="_radios" v-for="(it, index) in options">
            <div class="_rad" @click="changeType(index)">
                <i class="pos" v-if="index === indexNum"></i>
            </div>
            <span>{{ it }}</span>
        </label>
    </div>
</template>

<script>
  export default {
    props: {
      options: {
        type: Array,
        default: () => {
          return [1, 2, 3, 4]
        }
      },
      checkIndex: {
        type: Number,
        default: 0
      }
    },
    computed: {
    },
    created () {
      this.indexNum = this.checkIndex
    },
    data () {
      return {
        indexNum: 0
      }
    },
    methods: {
      changeType (idx) {
        this.indexNum = idx
        this.$emit('input', idx)
      }
    },
    mounted () {
    },
    updated () {
    }
  }
</script>