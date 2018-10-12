<template>
  <div class="_clock_time">
    <div class="cur_time">
      <div class="time t_hour">
        <span class="">{{ minutes }}</span>
      </div>
      <div :class="['time', 't_minutes']">
        <span class="time_number">{{ seconds }}</span>
      </div>
    </div>
    <div class="next_time">
      <div class="time t_hour">
        <span class="">{{ minutes }}</span>
      </div>
      <div :class="['time', 't_minutes']">
        <span class="">{{ nextSeconds }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
    },
    computed: {
    },
    beforeCreate () {
    },
    data () {
      return {
        minutes: 0,
        seconds: 0,
        isActive: false,
        nextSeconds: 0
      }
    },
    created () {
      let date = new Date()
      this.nowTime(date)
      this.changeTime()
    },
    methods: {
      changeTime () {
        setInterval(() => {
          let dt = new Date()
          this.nowTime(dt)
        }, 1000)
      },
      nowTime (date) {
        this.minutes = `0${date.getMinutes()}`.slice(-2)
        this.seconds = `0${date.getSeconds()}`.slice(-2)
        this.$nextTick(() => {
          this.nextSeconds = `0${date.getSeconds() + 1}`.slice(-2)
          if (+this.nextSeconds === 60) {
              this.nextSeconds = '00'
          }
        })
      }
    }
  }
</script>