<template>
  <div class="content">
    <div class="header">The custom component library</div>
    <div class="midden-cont">
      <Menu></Menu>
      <div class="rightView">
        <div class="view_cont">
          <router-view></router-view>
        </div>
        <md :mdCont="_changeMarkdown"></md>
      </div>
    </div>
  </div>
</template>

<script>
import * as md from '../../docs/index'
import { mapActions, mapState } from 'vuex'
import PrinterCircle from './plugins/canvas/line'

export default {
  data () {
    return {
      text: 'Demo'
    }
  },
  computed: {
    ...mapState([
      'count'
    ]),
    _changeMarkdown () {
      const routeName = this.$route.name
      const firstChar = routeName.slice(0, 1).toUpperCase()
      const mdName = `m${firstChar}${routeName.slice(1 )}`

      return md[mdName]
    }
  },
  methods: {
    ...mapActions([
      'updateCount',
      'socketMessage'
    ]),
    sends () {
      this.socketMessage('1212122')
      this.updateCount(2).then((res) => {
        console.log(res)
      })
    }
  },
  created () {
    console.log(md)
  },
  mounted () {
    new PrinterCircle('body', {
      counts: 10,
      color: '#ccc',
      lineWidth: 5,
      rate: 0.3,
      radius: 5
    }).drawStart()
  }
}
</script>
