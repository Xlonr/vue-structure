<template>
  <div>
    <btn o_class="tip-lib" btnText="提示框" @click.native.self="showTip"></btn>
    <btn o_class="tip-lib1" btnText="提示框" @click.native.self="showTip1"></btn>
    <btn o_class="tip-lib2" btnText="提示框" @click.native.self="showTip2"></btn>
    <btn o_class="tip-lib3" btnText="提示框" @click.native.self="showTip3"></btn>
  </div>
</template>

<script>
//  import List from './list.vue'
  import {mapActions, mapGetters, mapState} from 'vuex'

  export default {
    data () {
      return {
        dfCont: '地点',
      }
    },
    computed: {
      ...mapState([
      ])
    },
    methods: {
      ...mapActions ([
      ]),
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
    },
    created () {
    }
  }
</script>
