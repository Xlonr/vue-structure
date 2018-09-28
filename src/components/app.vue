<template>
  <div class="content">
    <div class="header">The custom component library</div>
    <!--<span>{{count}}</span>-->
    <!--<router-link to="/second" @click.native="sends">{{text}}</router-link>-->
    <div class="midden-cont">
      <Menu></Menu>
      <div class="rightView">
        <router-view></router-view>
      </div>
    </div>
    <!--<list></list>-->
  </div>
</template>

<script>
//  import List from './list.vue'
  import {mapActions, mapGetters, mapState} from 'vuex'

  export default {
    data () {
      return {
        text: 'Demo'
      }
    },
    computed: {
      ...mapState([
        'count'
      ])
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
    }
  }
</script>
