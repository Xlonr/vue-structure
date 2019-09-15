<template>
  <div class="content">
    <div class="header">The custom component library</div>
    <!--<span>{{count}}</span>-->
    <!--<router-link to="/second" @click.native="sends">{{text}}</router-link>-->
    <div class="midden-cont">
      <Menu></Menu>
      <div class="rightView">
        <div class="view_cont">
          <router-view></router-view>
        </div>
        <md :mdCont="_changeMarkdown"></md>
      </div>
    </div>
    <!--<list></list>-->
  </div>
</template>

<script>
  import * as md from '../../docs/index'
  import {mapActions, mapGetters, mapState} from 'vuex'
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
        let routeName = this.$route.name
        let firstChar = routeName.slice(0, 1).toUpperCase()
        let mdName = `m${firstChar}${routeName.slice(1, )}`
        return md[mdName]
      }
    },
    methods: {
      ...mapActions ([
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
    mounted() {
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
