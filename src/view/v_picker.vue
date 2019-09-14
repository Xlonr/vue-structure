<template>
  <div>
    <div class="col">
      <picker @dateTimes="dateTimes" :isCheck="true">
        <span slot="slot-cont">
          <input-cont class="picker_calculate_num" input_text="选择日期" :value="dt"></input-cont>
        </span>
      </picker>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'

  export default {
    data () {
      return {
        dt: ''
      }
    },
    computed: {
      ...mapState([
      ])
    },
    methods: {
      ...mapActions ([
      ]),
      dateTimes (dt) {
        this.dt = dt
      }
    },
    created () {
    }
  }
</script>
