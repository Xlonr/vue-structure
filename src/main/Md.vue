<template>
  <div class="md">
    <div class="md_cont" v-html="mdCont" v-if="showMd"></div>
    <div class="md_is_show"><span :class="['iconfont', showMd ? 'icon-jiantoushang' : 'icon-jiantouxia']" @click="showMd = !showMd">{{showMd ? '隐藏' : '展开'}}</span></div>
  </div>
</template>

<script>

  import {mapActions, mapGetters, mapState} from 'vuex'
  export default {
    data () {
      return {
        showMd: false
      }
    },
    props: {
      mdCont: {
        type: String,
        default: ''
      }
    },
    watch: {
      '$route.name': function (newVal, oldVal) {
        if (newVal !== oldVal) {
          this.showMd = false
        }
      }
    },
    computed: {
      ...mapState([
      ])
    },
    methods: {
      ...mapActions ([
      ]),
    },
    created () {
    }
  }
</script>
