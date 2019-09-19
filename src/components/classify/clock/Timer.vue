<template>
  <div class="_timers">
    <div class="_item _hours"><span>{{hour | format}}</span></div>:
    <div class="_item _minutes"><span>{{minute | format}}</span></div>:
    <div class="_item _seconds"><span>{{second | format}}</span></div>
  </div>
</template>

<script>
export default {
  name: 'Timer',
  props: {
    changing: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      hour: 0,
      minute: 0,
      second: 0,
      tm: null
    }
  },
  created () {
    const date = new Date()
    this.hour = date.getHours()
    this.minute = date.getMinutes()
    this.second = date.getSeconds()
    if (this.changing) {
      this.changeTimer()
    }
  },
  filters: {
    format (v) {
      return ('0' + v).slice(-2)
    }
  },
  methods: {
    changeTimer () {
      this.tm = setInterval(() => {
        this.second += 1
        if (this.second >= 60) {
          this.second = 0
          this.minute += 1
          if (this.minute >= 60) {
            this.minute = 0
            this.hour += 1
            if (this.hour >= 24) {
              this.hour = 1
            }
          }
        }
      }, 1000)
    }
  },
  beforeDestroy () {
    clearInterval(this.tm)
  }
}
</script>
