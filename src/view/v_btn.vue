<template>
  <div>
    <div>you can click this!</div>
    <div class="col">
      <btn btnText="按钮" o_class="is_per is_small" @click="showItem"></btn>
      <btn btnText="按钮" o_class="is_warn" @click="showItem1"></btn>
      <btn btnText="按钮" o_class="is_warn is_disabled" @click="showItem1"></btn>
      <btn btnText="按钮" o_class="is_error is_larger" @click="showItem2"></btn>
    </div>
  </div>
</template>

<script>
//  import List from './list.vue'
  import {mapActions, mapGetters, mapState} from 'vuex'

  export default {
    data () {
      return {
      }
    },
    computed: {
      ...mapState([
      ])
    },
    methods: {
      ...mapActions ([
      ]),
      showItem () {
        this._confirm({
          content: '内容',
          placement: 'center',
          title: 'Title'
        })
      },
      showItem1 () {
        this._confirm({
          content: '内容1',
          placement: 'center'
        })
      },
      showItem2 () {
        this._confirm({
          content: '内容2',
          placement: 'center'
        })
      }
    },
    created () {
    }
  }
</script>
