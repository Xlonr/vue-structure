<template>
  <div class="pagination is_small">
    <component :is="changePageType" @changePaging="changePaging">
      <ul class="pagination-bg" slot="cont">
        <li v-for="v in page" :key="v.num" :class="['pagination-bg_num', {'active': v.num === currentNum, 'disabled': !v.allowPage}]" @click="v.allowPage && clickPageNumber(v.num)">{{v.num}}</li>
      </ul>
    </component>
    <div class="pagination-jump">
      <span>第</span>
      <input type="number" v-model="jumpToPageNum" @change="gotoPageNum" :max="this.pageNum" :min="1">
      <span>页</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageType: {
      type: String,
      default: 'btn'
    },
    pageNum: {
      type: Number,
      default: 10
    }
  },
  data () {
    const components = {
      default: 'page-arrow',
      btn: 'page-button'
    }
    return {
      page: [],
      currentNum: 1,
      pageComponent: components,
      jumpToPageNum: 1
    }
  },
  created () {
    this.page = Array.from({ length: this.pageNum }).map((v, index) => {
      return { num: index + 1, allowPage: index !== 4 }
    })
  },
  computed: {
    changePageType () {
      return this.pageComponent[this.pageType]
    }
  },
  methods: {
    clickPageNumber (num) {
      this.currentNum = num
    },
    // 上一页或下一页
    changePaging (val) {
      let num = this.currentNum
      if (val === 'prev') {
        num--
      } else if (val === 'next') {
        num++
      }
      this.commonPageNum(val, num)
    },
    gotoPageNum (e) {
      const value = +e.target.value
      this.commonPageNum(value > this.currentNum ? 'next' : 'prev', value)
    },
    commonPageNum (type, num) {
      const nums = []
      this.page.forEach(it => !it.allowPage && nums.push(it.num))
      if (typeof type === 'undefined') {
        type = 'next'
      }
      const findNextNum = (num) => {
        if ((type === 'prev' && num < 1) || (type === 'next' && num > this.pageNum)) return
        if (nums.includes(num)) {
          if (type === 'prev') {
            num--
          } else if (type === 'next') {
            num++
          }
          findNextNum(num)
        } else {
          this.currentNum = num
        }
      }
      findNextNum(num)
    }
  },
  watch: {
    currentNum (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.jumpToPageNum = this.currentNum
        this.$emit('pageNum', this.currentNum)
        console.log(this.currentNum)
      }
    }
  }
}
</script>
