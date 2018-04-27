<template>
  <div>
    <div>you can click this!</div>
    <span @click="showItem">{{msg}}</span>
    <board v-show="itemType"></board>
    <div class="tip-lib" @click.self="showTip">提示框</div>
    <div class="tip-lib1" @click.self="showTip1">提示框</div>
    <div class="tip-lib2" @click.self="showTip2">提示框</div>
    <div class="tip-lib3" @click.self="showTip3">提示框</div>
  </div>
</template>

<script>
//  import Board from './classify/board.vue'
  export default {
    data () {
      return {
        msg: 'this is a message!',
        itemType: false
      }
    },
    methods: {
      showItem () {
        console.log(this)
        this._confirm({
          content: '22222',
          placement: 'center'
        })
        this.itemType = !this.itemType
      },
      showTip (el) {
        this.$_popOver({
          popContent: '弹出提示内容',
          direction: 'is_top',
          autoClose: false,
          name: el.target,
          closable: false
        })
      },
      showTip1 (el) {
        this.$_popOver({
          popContent: '弹出提示内容',
          direction: 'is_right',
          autoClose: false,
          name: el.target,
          closable: true
        })
      },
      showTip2 (el) {
        this.$_popOver({
          popContent: '弹出提示内容',
          direction: 'is_bottom',
          autoClose: false,
          name: el.target,
          closable: true
        })
      },
      showTip3 (el) {
        this.$_popOver({
          popContent: '弹出提示内容',
          direction: 'is_left',
          autoClose: false,
          name: el.target,
          closable: false
        })
      }
    }
  }
</script>