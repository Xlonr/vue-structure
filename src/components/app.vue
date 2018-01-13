<template>
  <div>
    <router-link to="/home/second" @click.native="sends">{{text}}</router-link>
    <div class="rightView">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import List from './list.vue'
  import {sendMess} from '../../service/socket'
  export default {
    components: {
      List
    },
    data () {
      return {
        text: 'Demo'
      }
    },
    methods: {
      sends () {
        sendMess('1212122')
      }
    }
  }
</script>

<style lang="sass">
  @import "../../sass/all.sass";
</style>