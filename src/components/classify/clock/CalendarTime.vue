<template>
  <div class="_calendar_time">
    <div class="time_b">
      <div class="time_list left_time">
        <div class="circular">
          <span class="cir_1"></span>
          <span class="cir_2"></span>
        </div>

        <div class="clock_num">
          <transition name="rot_first">
            <div class="num hour_num" v-if="isChangeHour"><span>{{ hours }}</span></div>
          </transition>
          <span class="next_time">{{ hours }}</span>
        </div>
      </div>
      <div class="time_list right_time">
        <div class="circular">
          <span class="cir_1"></span><span class="cir_2"></span>
        </div>
        <div class="clock_num">
          <transition name="rot">
            <div class="num" v-if="isChangeMinutes"><span>{{ minutes }}</span></div>
          </transition>
          <span class="next_time">{{ minutes }}</span>
        </div>
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
        hours: '00',
        minutes: '00',
        isChangeHour: true,
        isChangeMinutes: true
      }
    },
    watch: {
      hours (newVal, oldVal) {
        if (newVal !== oldVal) {
          this.isChangeHour = false
          setTimeout(() => {
            this.isChangeHour = true
          }, 800)
        }
      },
      minutes (newVal, oldVal) {
        if (newVal !== oldVal) {
          this.isChangeMinutes = false
          setTimeout(() => {
              this.isChangeMinutes = true
          }, 800)
        }
      }
    },
    created () {
      setInterval(() => {
        this.changeTime()
      }, 1000)
    },
    methods: {
      changeTime () {
        let dt = new Date()
        this.hours = dt.getHours()
        this.minutes = dt.getMinutes()
      }
    }
  }
</script>