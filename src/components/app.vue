<template>
  <div>
    <span>{{count}}</span>
    <router-link to="/home/second" @click.native="sends">{{text}}</router-link>
    <div class="rightView">
      <router-view></router-view>
    </div>
    <list></list>
  </div>
</template>

<script>
//  import List from './list.vue'
  import {sendMess} from '../../service/socket'
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
        'updateCount'
      ]),
      sends () {
        sendMess('1212122')
        this.updateCount(2).then((res) => {
          console.log(res)
        })
      }
    },
    created () {
    }
  }
</script>
