<template>
  <div>
    <div>you can click this!</div>
    <span @click="showItem">{{msg}}</span>
    <board v-if="itemType"></board>
  </div>
</template>

<script>
  import Board from './board.vue'
  export default {
    components: {
      Board
    },
    data () {
      return {
        msg: 'this is a message!',
        itemType: false
      }
    },
    methods: {
      showItem () {
        this.itemType = !this.itemType
      }
    }
  }
</script>