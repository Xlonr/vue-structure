<template>
  <div class="_picker" @mouseleave="mouseHandler(0)">
    <div class="_picker_slot">
      <slot class="slot-cont" name="slot-cont"></slot>
    </div>
    <div class="_calendar_picker" v-if="showCalendar">
      <div class="_picker_header">
        <i class="iconfont icon-left arrow" @click="pYear--"></i>
        <i class="iconfont icon-left arrow" @click="changeCalendar('prev')"></i>
        <span class="calendar">{{pYear}}年{{pMonths}}月</span>
        <i class="iconfont icon-arrow-right arrow" @click="changeCalendar('next')"></i>
        <i class="iconfont icon-arrow-right arrow" @click="pYear++"></i>
      </div>
      <div class="picker_cont">
        <ul>
          <li class="week_list" v-for="it in weeks">{{it}}</li>
        </ul>
        <ul>
          <li class="day_list p_time" v-for="ptime in SurplusTime" @click="checkDate('prev', ptime)">{{ptime}}</li>
          <li :class="['day_list', {'is_active': `${pYear}-${pMonths}-${day}` === cDate}]" v-for="day in tDays" @click="selectDateTime(day)">{{day}}</li>
          <li class="day_list n_time" v-for="ntime in nextTimes" @click="checkDate('next', ntime)">{{ntime}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      isCheck: {
        type: Boolean,
        default: false
      },
      isHover: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      SurplusTime () {
        let sTime = new Date(`${this.pYear}-${this.pMonths}-1`).getDay()
        let year = this.pYear
        let month = this.pMonths
        if (this.pMonths <= 1) {
          year -= 1
          month = 12
        } else {
          month -= 1
        }
        let dt = this.computeTotalDays({cYear: year, cMonths: month, pYear: this.pYear, pMonths: this.pMonths})
        this.frontDays = sTime
        return this.frontDates(dt, sTime).reverse()
      },
      nextTimes () {
        let totalDate = this.tDays + this.frontDays
        let dnum = 7 - totalDate % 7
        return this.frontDates(dnum, dnum).reverse()
      }
    },
    beforeCreate () {
    },
    data () {
      return {
        weeks: ['日', '一', '二', '三', '四', '五', '六'],
        tDays: 31,
        pYear: new Date().getFullYear(),
        pMonths: new Date().getMonth() + 1,
        frontDays: 0,
        cDate: '',
        showCalendar: false
      }
    },
    methods: {
      changeCalendar (val) {
        let cYear = this.pYear
        let cMonths = this.pMonths
        if (val === 'prev') {
          if (this.pMonths > 1) {
            this.pMonths -= 1
          } else if (this.pMonths <= 1) {
            this.pYear -= 1
            this.pMonths = 12
          }
          this.tDays = this.computeTotalDays({cYear, cMonths, pYear: this.pYear, pMonths: this.pMonths})
        } else {
          if (this.pMonths >= 12) {
            this.pMonths = 1
            this.pYear += 1
          } else {
            this.pMonths += 1
          }
          this.tDays = this.computeTotalDays({cYear: cMonths === 12 ? cYear + 1 : cYear, cMonths: cMonths === 12 ? 1 : cMonths + 1, pYear: this.pMonths === 12 ? this.pYear + 1 : this.pYear, pMonths: this.pMonths === 12 ? 1 : this.pMonths + 1})
        }
      },
      computeTotalDays (item) {
        let tatolDay = Math.abs(this.dateTimes({year: item.cYear, month: item.cMonths}) - this.dateTimes({year: item.pYear, month: item.pMonths}))
        return tatolDay / 1000 / 60 / 60 / 24
      },
      dateTimes ({year, month}) {
        return new Date(`${year}-${month}-1`).getTime()
      },
      frontDates (d, s) {
        let r = d - s
        let arr = []
        while (d > r) {
          arr.push(d)
          d--
        }
        return arr
      },
      checkDate (val, day) {
        this.changeCalendar(val)
        this.selectDateTime(day)
      },
      selectDateTime (day) {
        this.cDate = `${this.pYear}-${this.pMonths}-${day}`
        this.showCalendar = false
        this.$emit('dateTimes', this.cDate)
      },
      showPicker () {
        this.showCalendar = !this.showCalendar
      },
      mouseHandler (val) {
        if (!this.isHover) return
        this.showCalendar = !!val
      }
    },
    mounted () {
      let el = this.$el.querySelector('._picker_slot')
      if (this.isCheck) {
        el.addEventListener('click', this.showPicker)
      } else if (this.isHover) {
        el.addEventListener('mouseenter', () => { this.mouseHandler(1) })
      }
    }
  }
</script>